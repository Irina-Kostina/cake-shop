import { Router } from 'express'
import knex from 'knex'
import knexConfig from '../../db/knexfile'



const db = knex(knexConfig.development)
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
    const rows = await db('cakes').select()

    const list = rows.map((row) => {
      const cake: Cake = {
        id: row.id,
        name: row.name,
        slug: row.slug,
        image: row.image,
        category: row.category,
        price: row.price,
        sizes: JSON.parse(row.sizes),
        components: JSON.parse(row.components),
        allergens: JSON.parse(row.allergens),
        storage: row.storage,
        expiry: row.expiry,
        rating: JSON.parse(row.rating),
      }

      return {
        id: cake.id,
        name: cake.name,
        slug: cake.slug,
        image: cake.image,
        category: cake.category,
        price: cake.price,
        rating: cake.rating,
        sizes: cake.sizes,
      }
    })

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
    const row = await db('cakes').where({ slug }).first()

    if (!row) return res.status(404).json({ error: 'Cake not found' })

    const cake: Cake = {
      id: row.id,
      name: row.name,
      slug: row.slug,
      image: row.image,
      category: row.category,
      price: row.price,
      sizes: JSON.parse(row.sizes),
      components: JSON.parse(row.components),
      allergens: JSON.parse(row.allergens),
      storage: row.storage,
      expiry: row.expiry,
      rating: JSON.parse(row.rating),
    }

    const priceRange = priceRangeFromSizes(cake.sizes)

    res.json({ ...cake, priceRange })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch cake details' })
  }
})

export default router
