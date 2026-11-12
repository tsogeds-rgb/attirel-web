// The supported-brand list the site renders from.
//
// At build time this module attempts a fresh fetch from Supabase and rewrites
// the committed snapshot (src/config/supportedBrands.json). If the fetch fails
// — no network, env vars absent in local dev — it logs a warning and falls back
// to the committed snapshot. If the snapshot is also missing, the build fails,
// so the site can never silently ship an empty brand list.
//
// Consumers import `brands` / `brandNames` / `formatBrandList` from here and
// never touch the network themselves. The `sync-brands` CLI imports the pure
// helpers from ./brandSnapshot directly, so it does not trigger this fetch.

import {
  fetchSupportedBrands,
  formatBrandList,
  orderForDisplay,
  readSnapshot,
  SNAPSHOT_PATH,
  writeSnapshot,
  type SupportedBrand,
} from './brandSnapshot';

async function load(): Promise<SupportedBrand[]> {
  try {
    const fetched = await fetchSupportedBrands();
    // Refreshing the committed snapshot is best-effort: we already have the
    // fresh data in hand, so a read-only filesystem must not fail the build.
    try {
      writeSnapshot(fetched);
    } catch (writeErr) {
      const why = writeErr instanceof Error ? writeErr.message : String(writeErr);
      console.warn(`[supportedBrands] fetched brands but could not persist snapshot: ${why}`);
    }
    return fetched;
  } catch (err) {
    const snapshot = readSnapshot();
    const reason = err instanceof Error ? err.message : String(err);
    if (snapshot) {
      console.warn(
        `[supportedBrands] build-time fetch failed (${reason}); using committed snapshot.`,
      );
      return snapshot;
    }
    throw new Error(
      `[supportedBrands] fetch failed and no snapshot found at ${SNAPSHOT_PATH}: ${reason}`,
    );
  }
}

/** Supported brands in site display order (Old Navy first — see brandSnapshot). */
export const brands: SupportedBrand[] = orderForDisplay(await load());

/** Just the display names, in the same order, for formatBrandList. */
export const brandNames: string[] = brands.map((b) => b.name);

export { formatBrandList };
export type { SupportedBrand };
