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
}

export const affiliateLinks: Record<string, RetailerLink> = {
  uniqlo: {
    name: 'Uniqlo',
    url: 'https://www.uniqlo.com/',
    officialSiteUrl: 'https://www.uniqlo.com/',
  },
  levis: {
    name: "Levi's",
    url: 'https://www.levi.com/',
    officialSiteUrl: 'https://www.levi.com/',
  },
  adidas: {
    name: 'Adidas',
    url: 'https://www.adidas.com/',
    officialSiteUrl: 'https://www.adidas.com/',
  },
  gap: {
    name: 'Gap',
    url: 'https://www.gap.com/',
    officialSiteUrl: 'https://www.gap.com/',
  },
  oldnavy: {
    name: 'Old Navy',
    url: 'https://oldnavy.gap.com/',
    officialSiteUrl: 'https://oldnavy.gap.com/',
  },
  shein: {
    name: 'Shein',
    url: 'https://www.shein.com/',
    officialSiteUrl: 'https://www.shein.com/',
  },
  lululemon: {
    name: 'Lululemon',
    url: 'https://shop.lululemon.com/',
    officialSiteUrl: 'https://shop.lululemon.com/',
  },
  mango: {
    name: 'Mango',
    url: 'https://shop.mango.com/',
    officialSiteUrl: 'https://shop.mango.com/',
  },
  asos: {
    name: 'ASOS',
    url: 'https://www.asos.com/',
    officialSiteUrl: 'https://www.asos.com/',
  },
  hm: {
    name: 'H&M',
    url: 'https://www2.hm.com/',
    officialSiteUrl: 'https://www2.hm.com/',
  },
  nike: {
    name: 'Nike',
    url: 'https://www.nike.com/',
    officialSiteUrl: 'https://www.nike.com/',
  },
  zara: {
    name: 'Zara',
    url: 'https://www.zara.com/',
    officialSiteUrl: 'https://www.zara.com/',
  },
};
