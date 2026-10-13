export interface HeroSlide {
  url: string
  label: string
  location: string
  categoryLabel: string
  categoryEmoji: string
}

export const SLIDE_MS = 5500
export const SHOW_COUNT = 6

export const HERO_POOL: HeroSlide[] = [
  { url: 'https://pub-b693088e04e14696a9caf041d4221a3a.r2.dev/stays/sitka-lighthouse-ak.jpeg', label: 'Lighthouse on the Coast', location: 'Sitka, Alaska', categoryLabel: 'Lighthouses', categoryEmoji: '🗼' },
  { url: 'https://pub-b693088e04e14696a9caf041d4221a3a.r2.dev/stays/luxury-castle-davis-ca.jpeg', label: 'Castle Estate', location: 'Davis, California', categoryLabel: 'Castles & Estates', categoryEmoji: '🏰' },
  { url: 'https://pub-b693088e04e14696a9caf041d4221a3a.r2.dev/hero/dome-water.jpg', label: 'Geodesic Dome on the Water', location: 'Alaska', categoryLabel: 'Geodesic Domes', categoryEmoji: '🔮' },
  { url: 'https://pub-b693088e04e14696a9caf041d4221a3a.r2.dev/hero/aframe-pnw.jpg', label: 'A-Frame in the Pacific Northwest', location: 'Washington', categoryLabel: 'A-Frame Cabins', categoryEmoji: '🏔️' },
  { url: 'https://pub-b693088e04e14696a9caf041d4221a3a.r2.dev/hero/lighthouse-rocky.jpg', label: 'Lighthouse on the Rocky Coast', location: 'Oregon Coast', categoryLabel: 'Lighthouses', categoryEmoji: '🗼' },
  { url: 'https://pub-b693088e04e14696a9caf041d4221a3a.r2.dev/hero/houseboat-calm.jpg', label: 'Houseboat on Calm Waters', location: 'Finland', categoryLabel: 'Houseboats', categoryEmoji: '⛵' },
  { url: 'https://pub-b693088e04e14696a9caf041d4221a3a.r2.dev/hero/tiny-house-mountains.jpg', label: 'Tiny House in the Mountains', location: 'Montenegro', categoryLabel: 'Tiny Homes', categoryEmoji: '🏡' },
  { url: 'https://pub-b693088e04e14696a9caf041d4221a3a.r2.dev/hero/tiny-house-countryside.jpg', label: 'Tiny House in the Countryside', location: 'Sweden', categoryLabel: 'Tiny Homes', categoryEmoji: '🏡' },
  { url: 'https://pub-b693088e04e14696a9caf041d4221a3a.r2.dev/hero/glamping-mountain.jpg', label: 'Glamping with Mountain Views', location: 'Switzerland', categoryLabel: 'Glamping', categoryEmoji: '⛺' },
  { url: 'https://pub-b693088e04e14696a9caf041d4221a3a.r2.dev/hero/safari-sunset.jpg', label: 'Safari Tent at Sunset', location: 'Tanzania', categoryLabel: 'Glamping', categoryEmoji: '⛺' },
  { url: 'https://pub-b693088e04e14696a9caf041d4221a3a.r2.dev/hero/castle-fog.jpg', label: 'Castle in Morning Fog', location: 'Bavaria', categoryLabel: 'Castles & Estates', categoryEmoji: '🏰' },
]

// Daily rotation keyed to the UTC day. Call on the server only and pass the result to
// client components: the browser's local day can differ and cause a hydration mismatch.
export function getHeroSlides(date: Date): HeroSlide[] {
  const offset = date.getUTCDate() % HERO_POOL.length
  return [...HERO_POOL.slice(offset), ...HERO_POOL.slice(0, offset)].slice(0, SHOW_COUNT)
}
