// Pure, side-effect-free helpers behind the supported-brand list.
//
// Everything here is safe to import from anywhere: a unit test, the
// `sync-brands` CLI, or the render-time module (src/lib/supportedBrands.ts).
// Nothing in this file touches the network or reads the snapshot at import
// time, so importing it never triggers a build-time fetch.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export interface SupportedBrand {
  /** Display name exactly as stored in the retailers table, e.g. "Old Navy". */
  name: string;
  /** Guide key, e.g. "oldnavy" — matches the affiliateLinks keys and guide routes. */
  slug: string;
}

// Absolute path to the committed snapshot the site reads at render time.
// Anchored to the project root (process.cwd()) rather than import.meta.url:
// `astro build`, the render pass, and the sync CLI all run from the repo root,
// and the module is bundled into dist/ at build time, so import.meta.url would
// point into dist/ instead of at the source file.
export const SNAPSHOT_PATH = join(process.cwd(), 'src', 'config', 'supportedBrands.json');

// Display order for the brand sentences on the site. Historically the copy
// read "Old Navy, Gap and Athleta", so those lead in that order and newer
// supported brands follow. Anything not listed here sorts alphabetically
// after, so the list still degrades sensibly if the set changes.
const PREFERRED_ORDER = ['oldnavy', 'gap', 'athleta', 'skechers'];

/**
 * Derive a guide key from a retailer name. The retailers table has no slug
 * column, so we fold the name to lowercase alphanumerics: "Old Navy" →
 * "oldnavy", "Skechers" → "skechers".
 */
export function brandSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

/**
 * Join brand names into a readable list with no Oxford comma:
 *   1 → "Old Navy"
 *   2 → "Old Navy and Gap"
 *   3 → "Old Navy, Gap and Athleta"
 *   4 → "Old Navy, Gap, Athleta and Skechers"
 * `conj` switches the final conjunction, e.g. "or".
 */
export function formatBrandList(names: string[], conj = 'and'): string {
  if (names.length === 0) return '';
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} ${conj} ${names[1]}`;
  return `${names.slice(0, -1).join(', ')} ${conj} ${names[names.length - 1]}`;
}

/** Put the brands into site display order (see PREFERRED_ORDER). */
export function orderForDisplay(list: SupportedBrand[]): SupportedBrand[] {
  return [...list].sort((a, b) => {
    const ia = PREFERRED_ORDER.indexOf(a.slug);
    const ib = PREFERRED_ORDER.indexOf(b.slug);
    if (ia === -1 && ib === -1) return a.name.localeCompare(b.name);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });
}

/**
 * Fetch the supported retailers from Supabase, ordered by name, via the public
 * REST API with the anon key. Throws if the env vars are missing or the request
 * fails, so callers can decide whether to fall back to the snapshot.
 */
export async function fetchSupportedBrands(): Promise<SupportedBrand[]> {
  const env = (typeof process !== 'undefined' ? process.env : {}) as Record<
    string,
    string | undefined
  >;
  const url = env.SUPABASE_URL;
  const key = env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error(
      'SUPABASE_URL and SUPABASE_ANON_KEY must both be set to fetch supported brands.',
    );
  }

  const endpoint =
    `${url.replace(/\/+$/, '')}/rest/v1/retailers` +
    `?select=name&fit_support_level=eq.supported&order=name.asc`;
  const res = await fetch(endpoint, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  if (!res.ok) {
    throw new Error(`Supabase responded ${res.status} ${res.statusText}`);
  }

  const rows = (await res.json()) as unknown;
  if (!Array.isArray(rows)) {
    throw new Error('Supabase returned an unexpected payload (expected an array).');
  }
  return rows.map((row) => {
    const name = (row as { name?: unknown }).name;
    if (typeof name !== 'string' || name.length === 0) {
      throw new Error('A supported retailer row is missing its name.');
    }
    return { name, slug: brandSlug(name) };
  });
}

/** Read the committed snapshot, or null if it is missing or unreadable. */
export function readSnapshot(): SupportedBrand[] | null {
  try {
    const parsed = JSON.parse(readFileSync(SNAPSHOT_PATH, 'utf8')) as unknown;
    if (!Array.isArray(parsed)) return null;
    return parsed as SupportedBrand[];
  } catch {
    return null;
  }
}

/** Write the snapshot (ordered by name, as fetched) with a trailing newline. */
export function writeSnapshot(list: SupportedBrand[]): void {
  writeFileSync(SNAPSHOT_PATH, JSON.stringify(list, null, 2) + '\n', 'utf8');
}

/**
 * Refresh the committed snapshot from Supabase. Used by `npm run sync-brands`
 * and at build time. Returns the freshly fetched list.
 */
export async function syncSupportedBrands(): Promise<SupportedBrand[]> {
  const fetched = await fetchSupportedBrands();
  writeSnapshot(fetched);
  return fetched;
}
