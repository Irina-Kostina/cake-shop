import { Router } from 'express'
// import knex from 'knex'
// import knexConfig from '../../db/knexfile'

export const cakes = [
  {
    id: 1,
    name: 'Mango-Lime Delight',
    slug: 'mango-delight',
    image: '/cakes/mango1.jpg',
    category: 'Core Flavours',
    price: 68,
    sizes: [
      { label: 'Medium', serves: 8, price: 68 },
      { label: 'Large', serves: 12, price: 82 }
    ],
    components: ['Mango mousse', 'Vanilla sponge', 'Lime compote'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.8, reviewsCount: 22 }
  },
  {
    id: 2,
    name: 'Peach & Sage Dream',
    slug: 'peach-sage-dream',
    image: '/cakes/peach.jpg',
    category: 'Core Flavours',
    price: 69,
    sizes: [
      { label: 'Medium', serves: 8, price: 69 },
      { label: 'Large', serves: 12, price: 83 }
    ],
    components: ['Peach mousse', 'Sage cream', 'Vanilla sponge'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.7, reviewsCount: 18 }
  },
  {
    id: 3,
    name: 'Coffee Caramel Drip',
    slug: 'coffee-caramel-drip',
    image: '/cakes/coffee.jpg',
    category: 'Core Flavours',
    price: 72,
    sizes: [
      { label: 'Medium', serves: 8, price: 72 },
      { label: 'Large', serves: 12, price: 86 }
    ],
    components: ['Coffee sponge', 'Salted caramel', 'Vanilla cream'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.9, reviewsCount: 35 }
  },
  {
    id: 4,
    name: 'Lavender-Blueberry Whisper',
    slug: 'lavender-whisper',
    image: '/cakes/lav.jpg',
    category: 'Core Flavours',
    price: 65,
    sizes: [
      { label: 'Medium', serves: 8, price: 65 },
      { label: 'Large', serves: 12, price: 79 }
    ],
    components: ['Lavender mousse', 'Blueberry mousse', 'Lemon curd', 'Vanilla sponge'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.6, reviewsCount: 12 }
  },
  {
    id: 5,
    name: 'Honey Blossom',
    slug: 'honey-blossom',
    image: '/cakes/honey.jpg',
    category: 'Core Flavours',
    price: 65,
    sizes: [
      { label: 'Medium', serves: 8, price: 65 },
      { label: 'Large', serves: 12, price: 79 }
    ],
    components: ['Honey sponge', 'Sour cream frosting', 'Honey drizzle'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.7, reviewsCount: 27 }
  },
  {
    id: 6,
    name: 'Vanilla Citrus Symphony',
    slug: 'vanilla-citrus-symphony',
    image: '/cakes/lemon.jpg',
    category: 'Core Flavours',
    price: 59,
    sizes: [
      { label: 'Medium', serves: 8, price: 59 },
      { label: 'Large', serves: 12, price: 73 }
    ],
    components: ['Vanilla sponge', 'Citrus cream', 'Candied peel'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.5, reviewsCount: 14 }
  },
  {
    id: 7,
    name: 'Tiramisu Temptation',
    slug: 'tiramisu-temptation',
    image: '/cakes/tiramisu.jpg',
    category: 'Core Flavours',
    price: 75,
    sizes: [
      { label: 'Medium', serves: 8, price: 75 },
      { label: 'Large', serves: 12, price: 89 }
    ],
    components: ['Coffee-soaked sponge', 'Mascarpone cream', 'Cocoa'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.9, reviewsCount: 41 }
  },
  {
    id: 8,
    name: 'Red Velvet',
    slug: 'red-velvet',
    image: '/cakes/red-velvet.jpg',
    category: 'Core Flavours',
    price: 70,
    sizes: [
      { label: 'Medium', serves: 8, price: 70 },
      { label: 'Large', serves: 12, price: 84 }
    ],
    components: ['Cocoa-infused sponge', 'Cream cheese frosting', 'Velvet crumb coating'],
    allergens: ['Egg', 'Dairy', 'Gluten', 'Gelatine'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 4 days',
    rating: { average: 4.9, reviewsCount: 35 }
  },
  {
    id: 9,
    name: 'Chocolate Flower',
    slug: 'chocolate-flower',
    image: '/cakes/choco.jpg',
    category: 'Core Flavours',
    price: 65,
    sizes: [
      { label: 'Medium', serves: 8, price: 65 },
      { label: 'Large', serves: 12, price: 79 }
    ],
    components: ['Chocolate sponge', 'Chocolate ganache', 'Cocoa nibs'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.8, reviewsCount: 29 }
  },
  {
    id: 10,
    name: 'Velvet Oreo Bliss',
    slug: 'velvet-oreo-bliss',
    image: '/cakes/oreo.jpg',
    category: 'Core Flavours',
    price: 70,
    sizes: [
      { label: 'Medium', serves: 8, price: 70 },
      { label: 'Large', serves: 12, price: 84 }
    ],
    components: ['Chocolate sponge', 'Oreo cream', 'Cookie crumble'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.7, reviewsCount: 19 }
  },
  {
    id: 11,
    name: 'Green Harmony',
    slug: 'green-harmony',
    image: '/cakes/matcha.jpg',
    category: 'Core Flavours',
    price: 70,
    sizes: [
      { label: 'Medium', serves: 8, price: 70 },
      { label: 'Large', serves: 12, price: 84 }
    ],
    components: ['Matcha sponge', 'White chocolate cream', 'Matcha dust'],
    allergens: ['Egg', 'Dairy', 'Gluten'],
    storage: 'Refrigeration required',
    expiry: 'Best consumed within 3–4 days',
    rating: { average: 4.6, reviewsCount: 16 }
  }
]


// const db = knex(knexConfig.development)
const router = Router()

/** STEP 1: Define helpful types */
type SizeOption = {
  label: string
  serves: number
  price: number
}

type RatingSummary = {
  average: number
  reviewsCount: number
}

export type Cake = {
  id: number
  name: string
  slug: string
  image: string
  category: string
  price: number
  sizes: SizeOption[]
  components: string[]
  allergens: string[]
  storage: string
  expiry: string
  rating: RatingSummary
}

/** STEP 2: Helper to compute price range */
function priceRangeFromSizes(sizes: SizeOption[]) {
  const prices = sizes.map((s) => s.price)
  return { min: Math.min(...prices), max: Math.max(...prices) }
}

/** STEP 3: List endpoint — Shop grid */
router.get('/', async (_req, res) => {
  try {
    // DB mode
    // const rows = await db('cakes').select()
    // const list = cakes.map((cake) => {
    // const cake: Cake = {
    //     id: row.id,
    //     name: row.name,
    //     slug: row.slug,
    //     image: row.image,
    //     category: row.category,
    //     price: row.price,
    //     sizes: JSON.parse(row.sizes),
    //     components: JSON.parse(row.components),
    //     allergens: JSON.parse(row.allergens),
    //     storage: row.storage,
    //     expiry: row.expiry,
    //     rating: JSON.parse(row.rating),
    //   }

    //   return {
    //     id: cake.id,
    //     name: cake.name,
    //     slug: cake.slug,
    //     image: cake.image,
    //     category: cake.category,
    //     price: cake.price,
    //     rating: cake.rating,
    //     sizes: cake.sizes,
    //   }
    // })

// --- Hardcoded mode ---
    const list = cakes.map((cake) => ({
      id: cake.id,
      name: cake.name,
      slug: cake.slug,
      image: cake.image,
      category: cake.category,
      price: cake.price,
      rating: cake.rating,
      sizes: cake.sizes,
    }))

    res.json(list)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch cakes' })
  }
})

/** STEP 4: Details endpoint — /shop/:slug */
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params

    // --- DB mode (commented out for now, kept for future) ---
    // const row = await db('cakes').where({ slug }).first()
    // if (!row) return res.status(404).json({ error: 'Cake not found' })
    // const cake: Cake = {
    //   id: row.id,
    //   name: row.name,
    //   slug: row.slug,
    //   image: row.image,
    //   category: row.category,
    //   price: row.price,
    //   sizes: JSON.parse(row.sizes),
    //   components: JSON.parse(row.components),
    //   allergens: JSON.parse(row.allergens),
    //   storage: row.storage,
    //   expiry: row.expiry,
    //   rating: JSON.parse(row.rating),
    // }

    // --- Hardcoded mode (active) ---
    const cake = cakes.find((c) => c.slug === slug)
    if (!cake) return res.status(404).json({ error: 'Cake not found' })

    const priceRange = priceRangeFromSizes(cake.sizes)
    res.json({ ...cake, priceRange })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch cake details' })
  }
})

export default router