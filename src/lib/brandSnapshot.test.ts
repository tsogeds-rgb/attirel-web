// Run with: npm test  (node --test, native TS)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatBrandList } from './brandSnapshot.ts';

test('formatBrandList: one name is returned as-is', () => {
  assert.equal(formatBrandList(['Old Navy']), 'Old Navy');
});

test('formatBrandList: two names join with the conjunction', () => {
  assert.equal(formatBrandList(['Old Navy', 'Gap']), 'Old Navy and Gap');
});

test('formatBrandList: three names use commas then a final "and"', () => {
  assert.equal(
    formatBrandList(['Old Navy', 'Gap', 'Athleta']),
    'Old Navy, Gap and Athleta',
  );
});

test('formatBrandList: four names keep the same no-Oxford-comma grammar', () => {
  assert.equal(
    formatBrandList(['Old Navy', 'Gap', 'Athleta', 'Skechers']),
    'Old Navy, Gap, Athleta and Skechers',
  );
});

test('formatBrandList: the conjunction is configurable (or)', () => {
  assert.equal(
    formatBrandList(['Old Navy', 'Gap', 'Athleta', 'Skechers'], 'or'),
    'Old Navy, Gap, Athleta or Skechers',
  );
  assert.equal(formatBrandList(['Old Navy', 'Gap'], 'or'), 'Old Navy or Gap');
});
