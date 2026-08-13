// Central registry of outbound retailer links.
// These are plain retailer URLs today. The day affiliate approvals land
// (CJ / Skimlinks / AWIN), swap the `url` values here and every
// <AffLink> across the site updates at once.

export interface RetailerLink {
  name: string;
  /** Outbound link used by <AffLink>. Replace with tracking URL when approved. */
  url: string;
  /** The brand's own site, for "official size chart" anchor links. */
  officialSiteUrl: string;
  /**
   * Whether we have an affiliate relationship with this retailer.
   *
   * Required, not optional: a brand with no program must be a deliberate
   * declaration, not an omission. When false, <AffLink> renders a plain
   * untracked anchor — no `sponsored` token, no `data-aff` hook, and no
   * tracking parameters are ever constructed for the brand.
   */
  affiliate: boolean;
}

export const affiliateLinks: Record<string, RetailerLink> = {
  uniqlo: {
    name: 'Uniqlo',
    url: 'https://www.uniqlo.com/',
    officialSiteUrl: 'https://www.uniqlo.com/',
    affiliate: true,
  },
  levis: {
    name: "Levi's",
    url: 'https://www.levi.com/',
    officialSiteUrl: 'https://www.levi.com/',
    affiliate: true,
  },
  adidas: {
    name: 'Adidas',
    url: 'https://www.adidas.com/',
    officialSiteUrl: 'https://www.adidas.com/',
    affiliate: true,
  },
  // No affiliate approval. Deliberately false so <AffLink> emits a plain
  // untracked anchor — do not flip this without an actual approval.
  gap: {
    name: 'Gap',
    url: 'https://www.gap.com/',
    officialSiteUrl: 'https://www.gap.com/',
    affiliate: false,
  },
  oldnavy: {
    name: 'Old Navy',
    url: 'https://oldnavy.gap.com/',
    officialSiteUrl: 'https://oldnavy.gap.com/',
    affiliate: true,
  },
  shein: {
    name: 'Shein',
    url: 'https://www.shein.com/',
    officialSiteUrl: 'https://www.shein.com/',
    affiliate: true,
  },
  lululemon: {
    name: 'Lululemon',
    url: 'https://shop.lululemon.com/',
    officialSiteUrl: 'https://shop.lululemon.com/',
    affiliate: true,
  },
  mango: {
    name: 'Mango',
    url: 'https://shop.mango.com/',
    officialSiteUrl: 'https://shop.mango.com/',
    affiliate: true,
  },
  asos: {
    name: 'ASOS',
    url: 'https://www.asos.com/',
    officialSiteUrl: 'https://www.asos.com/',
    affiliate: true,
  },
  hm: {
    name: 'H&M',
    url: 'https://www2.hm.com/',
    officialSiteUrl: 'https://www2.hm.com/',
    affiliate: true,
  },
  nike: {
    name: 'Nike',
    url: 'https://www.nike.com/',
    officialSiteUrl: 'https://www.nike.com/',
    affiliate: true,
  },
  zara: {
    name: 'Zara',
    url: 'https://www.zara.com/',
    officialSiteUrl: 'https://www.zara.com/',
    affiliate: true,
  },
  // No US affiliate program. Deliberately false so <AffLink> emits a plain
  // untracked anchor — do not flip this without an actual approval.
  skechers: {
    name: 'Skechers',
    url: 'https://www.skechers.com/',
    officialSiteUrl: 'https://www.skechers.com/',
    affiliate: false,
  },
};
