// Standard published international size conversions.
// These are generic industry conversions, NOT brand-specific garment
// measurements. Brand guides render these tables and link out to each
// brand's official chart for exact garment measurements.

export interface ConversionTable {
  heading: string;
  note?: string;
  minWidth?: number;
  headers: string[];
  rows: string[][];
}

export const womensClothing: ConversionTable = {
  heading: "Women's clothing: standard international conversion",
  note: 'Standard conversions; individual brands vary by cut and fabric.',
  minWidth: 560,
  headers: ['Alpha', 'US', 'UK', 'EU'],
  rows: [
    ['XS', '0–2', '4–6', '32–34'],
    ['S', '4–6', '8–10', '36–38'],
    ['M', '8–10', '12–14', '40–42'],
    ['L', '12–14', '16–18', '44–46'],
    ['XL', '16–18', '20–22', '48–50'],
    ['XXL', '20–22', '24–26', '52–54'],
  ],
};

export const mensClothing: ConversionTable = {
  heading: "Men's tops: standard international conversion",
  note: 'US and UK men\'s sizes use the same chest-inch base; EU adds roughly 10.',
  minWidth: 560,
  headers: ['Alpha', 'Chest (US/UK, in)', 'EU'],
  rows: [
    ['XS', '32–34', '42–44'],
    ['S', '34–36', '44–46'],
    ['M', '38–40', '48–50'],
    ['L', '42–44', '52–54'],
    ['XL', '46–48', '56–58'],
    ['XXL', '50–52', '60–62'],
  ],
};

export const womensClothingIntl: ConversionTable = {
  heading: "Women's clothing: US / UK / EU / AU / JP",
  note: 'AU sizing follows UK numbers; JP typically runs one number above UK.',
  minWidth: 640,
  headers: ['US', 'UK', 'EU', 'AU', 'JP'],
  rows: [
    ['0', '4', '32', '4', '5'],
    ['2', '6', '34', '6', '7'],
    ['4', '8', '36', '8', '9'],
    ['6', '10', '38', '10', '11'],
    ['8', '12', '40', '12', '13'],
    ['10', '14', '42', '14', '15'],
    ['12', '16', '44', '16', '17'],
    ['14', '18', '46', '18', '19'],
    ['16', '20', '48', '20', '21'],
  ],
};

export const mensClothingIntl: ConversionTable = {
  heading: "Men's clothing: US / UK / EU / AU / JP",
  note: 'US, UK, and AU men\'s sizes share the chest-inch base; EU ≈ chest + 10; JP uses S–3L alpha sizing.',
  minWidth: 640,
  headers: ['Alpha', 'US/UK/AU chest (in)', 'EU', 'JP'],
  rows: [
    ['XS', '32–34', '42–44', 'S'],
    ['S', '34–36', '44–46', 'S–M'],
    ['M', '38–40', '48–50', 'M–L'],
    ['L', '42–44', '52–54', 'L–LL'],
    ['XL', '46–48', '56–58', 'LL–3L'],
  ],
};

export const womensShoes: ConversionTable = {
  heading: "Women's shoes: standard conversion",
  note: 'EU conversions are approximate; half sizes fall between rows.',
  minWidth: 560,
  headers: ['US', 'UK', 'EU', 'JP (cm)'],
  rows: [
    ['5', '3', '35–36', '22'],
    ['6', '4', '36–37', '23'],
    ['7', '5', '37–38', '24'],
    ['8', '6', '38–39', '25'],
    ['9', '7', '39–40', '26'],
    ['10', '8', '40–41', '27'],
    ['11', '9', '41–42', '28'],
  ],
};

export const mensShoes: ConversionTable = {
  heading: "Men's shoes: standard conversion",
  note: 'EU conversions are approximate; half sizes fall between rows.',
  minWidth: 560,
  headers: ['US', 'UK', 'EU', 'JP (cm)'],
  rows: [
    ['7', '6', '40', '25'],
    ['8', '7', '41', '26'],
    ['9', '8', '42', '27'],
    ['10', '9', '43', '28'],
    ['11', '10', '44–45', '29'],
    ['12', '11', '45–46', '30'],
    ['13', '12', '47', '31'],
  ],
};
