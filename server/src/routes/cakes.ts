import { Router } from 'express'

const router = Router()

/** STEP 1: Define helpful types */
type SizeOption = {
  label: string            // e.g. 'Medium' | 'Large'
  serves: number           // e.g. 8
  price: number            // NZD price for this size
}

type RatingSummary = {
  average: number          // e.g. 4.9
  reviewsCount: number     // e.g. 35
}

export type Cake = {
  id: number
  name: string
  slug: string             // pretty URL id
  image: string            // single photo only (your request)
  category: string         // e.g. 'Core Flavours' (used in breadcrumbs)
  price: number            // show "From $X" on the Shop grid (usually the smallest size price)
  sizes: SizeOption[]      // choose size on the product page
  components: string[]     // ingredients/components list
  allergens: string[]      // allergen list
  storage: string          // storage instructions
  expiry: string           // expiry/best-by
  rating: RatingSummary    // for stars + count
}

/** STEP 2: Seed data (adjust text and prices as you like) */
const cakes: Cake[] = [
  {
    id: 1,
    name: 'Mango Delight',
    slug: 'mango-delight',
    image: '/cakes/mango_cake.png',
    category: 'Core Flavours',
    price: 68,
    sizes: [
      { label: 'Medium', serves: 8, price: 68 },
      { label: 'Large',  serves: 12, price: 82 },
    ],
    components: ['Mango mousse', 'Vanilla sponge', 'Mango compote'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.8, reviewsCount: 22 },
  },
  {
    id: 2,
    name: 'Peach & Sage Dream',
    slug: 'peach-sage-dream',
    image: '/cakes/cream_cake.png',
    category: 'Core Flavours',
    price: 69,
    sizes: [
      { label: 'Medium', serves: 8, price: 69 },
      { label: 'Large',  serves: 12, price: 83 },
    ],
    components: ['Peach mousse', 'Sage cream', 'Vanilla sponge'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.7, reviewsCount: 18 },
  },
  {
    id: 3,
    name: 'Coffee Caramel Drip',
    slug: 'coffee-caramel-drip',
    image: '/cakes/coffee_cake.png',
    category: 'Core Flavours',
    price: 72,
    sizes: [
      { label: 'Medium', serves: 8, price: 72 },
      { label: 'Large',  serves: 12, price: 86 },
    ],
    components: ['Coffee sponge', 'Salted caramel', 'Vanilla cream'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.9, reviewsCount: 35 },
  },
  {
    id: 4,
    name: 'Lavender Whisper',
    slug: 'lavender-whisper',
    image: '/cakes/lavander.png',
    category: 'Core Flavours',
    price: 65,
    sizes: [
      { label: 'Medium', serves: 8, price: 65 },
      { label: 'Large',  serves: 12, price: 79 },
    ],
    components: ['Lavender mousse', 'Lemon curd', 'Vanilla sponge'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.6, reviewsCount: 12 },
  },
  {
    id: 5,
    name: 'Honey Blossom',
    slug: 'honey-blossom',
    image: '/cakes/honey_cake.png',
    category: 'Core Flavours',
    price: 65,
    sizes: [
      { label: 'Medium', serves: 8, price: 65 },
      { label: 'Large',  serves: 12, price: 79 },
    ],
    components: ['Honey sponge', 'Sour cream frosting', 'Honey drizzle'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.7, reviewsCount: 27 },
  },
  {
    id: 6,
    name: 'Vanilla Citrus Symphony',
    slug: 'vanilla-citrus-symphony',
    image: '/cakes/vanilla.png',
    category: 'Core Flavours',
    price: 59,
    sizes: [
      { label: 'Medium', serves: 8, price: 59 },
      { label: 'Large',  serves: 12, price: 73 },
    ],
    components: ['Vanilla sponge', 'Citrus cream', 'Candied peel'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.5, reviewsCount: 14 },
  },
  {
    id: 7,
    name: 'Tiramisu Temptation',
    slug: 'tiramisu-temptation',
    image: '/cakes/tiramisu_cake.png',
    category: 'Core Flavours',
    price: 75,
    sizes: [
      { label: 'Medium', serves: 8, price: 75 },
      { label: 'Large',  serves: 12, price: 89 },
    ],
    components: ['Coffee-soaked sponge', 'Mascarpone cream', 'Cocoa'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.9, reviewsCount: 41 },
  },
  {
    id: 8,
    name: 'Ube Velvet',
    slug: 'ube-velvet',
    image: '/cakes/ube_cake.png',
    category: 'Core Flavours',
    price: 70,
    sizes: [
      { label: 'Medium', serves: 8, price: 70 },
      { label: 'Large',  serves: 12, price: 84 },
    ],
    components: ['Ube mousse', 'Cream cheese spread', 'Ube sponge'],
    allergens: ['Egg', 'Dairy', 'Gluten', 'Gelatine'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 4 days',
    rating: { average: 4.9, reviewsCount: 35 },
  },
  {
    id: 9,
    name: 'Chocolate Flower',
    slug: 'chocolate-flower',
    image: '/cakes/chocolate.png',
    category: 'Core Flavours',
    price: 65,
    sizes: [
      { label: 'Medium', serves: 8, price: 65 },
      { label: 'Large',  serves: 12, price: 79 },
    ],
    components: ['Chocolate sponge', 'Chocolate ganache', 'Cocoa nibs'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.8, reviewsCount: 29 },
  },
  {
    id: 10,
    name: 'Velvet Oreo Bliss',
    slug: 'velvet-oreo-bliss',
    image: '/cakes/oreo.png',
    category: 'Core Flavours',
    price: 70,
    sizes: [
      { label: 'Medium', serves: 8, price: 70 },
      { label: 'Large',  serves: 12, price: 84 },
    ],
    components: ['Chocolate sponge', 'Oreo cream', 'Cookie crumble'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.7, reviewsCount: 19 },
  },
  {
    id: 11,
    name: 'Green Harmony',
    slug: 'green-harmony',
    image: '/cakes/matcha.png',
    category: 'Core Flavours',
    price: 70,
    sizes: [
      { label: 'Medium', serves: 8, price: 70 },
      { label: 'Large',  serves: 12, price: 84 },
    ],
    components: ['Matcha sponge', 'White chocolate cream', 'Matcha dust'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.6, reviewsCount: 16 },
  },
]

/** STEP 3: Helper to compute price range from sizes (used in details response) */
function priceRangeFromSizes(sizes: SizeOption[]) {
  const prices = sizes.map((s) => s.price)
  return { min: Math.min(...prices), max: Math.max(...prices) }
}

/** STEP 4: List endpoint — used by Shop grid */
router.get('/', (_req, res) => {
  // You can return all fields, or slim down for the grid:
  const list = cakes.map(c => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
    image: c.image,
    category: c.category,
    price: c.price,               // “From $X” on cards
    rating: c.rating,
    sizes: c.sizes,
  }))
  res.json(list)
})

/** STEP 5: Details endpoint — used by /shop/:slug page */
router.get('/:slug', (req, res) => {
  const { slug } = req.params
  const cake = cakes.find((c) => c.slug === slug)
  if (!cake) return res.status(404).json({ error: 'Cake not found' })

  // Attach a computed priceRange to help your UI show “NZD $min – NZD $max”
  const priceRange = priceRangeFromSizes(cake.sizes)

  res.json({
    ...cake,
    priceRange, // { min, max }
  })
})

export default router
