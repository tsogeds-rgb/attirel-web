// Refresh src/config/supportedBrands.json from Supabase on demand.
//
//   npm run sync-brands
//
// Reads SUPABASE_URL and SUPABASE_ANON_KEY from the environment (a local .env
// is loaded automatically if present). The anon key is public — the same one
// the app ships — so this is safe to run anywhere.

import { SNAPSHOT_PATH, syncSupportedBrands } from '../src/lib/brandSnapshot.ts';

try {
  const brands = await syncSupportedBrands();
  const names = brands.map((b) => `${b.name} (${b.slug})`).join(', ');
  console.log(`Synced ${brands.length} supported brand(s): ${names}`);
  console.log(`Wrote ${SNAPSHOT_PATH}`);
} catch (err) {
  console.error('Failed to sync supported brands:');
  console.error(err instanceof Error ? err.message : err);
  process.exitCode = 1;
}
