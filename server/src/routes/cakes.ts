import { Router } from 'express'

const router = Router()

const cakes = [
  {
    id: 1,
    name: 'Mango Delight',
    slug: 'mango-delight',
    price: 68,
    image: '/cakes/mango_cake.png',
  },
  {
    id: 2,
    name: 'Peach & Sage Dream',
    slug: 'peach-sage-dream',
    price: 69,
    image: '/cakes/cream_cake.png',
  },
  {
    id: 3,
    name: 'Coffee Caramel Drip',
    slug: 'coffee-caramel-drip',
    price: 72,
    image: '/cakes/coffee_cake.png',
  },
  {
    id: 4,
    name: 'Lavender Whisper',
    slug: 'lavender-whisper',
    price: 65,
    image: '/cakes/lavander.png',
  },
  {
    id: 5,
    name: 'Honey Blossom',
    slug: 'honey-blossom',
    price: 65,
    image: '/cakes/honey_cake.png',
  },
  {
    id: 6,
    name: 'Vanilla Citrus Symphony',
    slug: 'vanilla-citrus-symphony',
    price: 59,
    image: '/cakes/vanilla.png',
  },
  {
    id: 7,
    name: 'Tiramisu Temptation',
    slug: 'tiramisu-temptation',
    price: 75,
    image: '/cakes/tiramisu_cake.png',
  },
  {
    id: 8,
    name: 'Ube Velvet',
    slug: 'ube-velvet',
    price: 70,
    image: '/cakes/ube_cake.png',
  },
  {
    id: 9,
    name: 'Chocolate Flower',
    slug: 'chocolate-flower',
    price: 65,
    image: '/cakes/chocolate.png',
  },
  {
    id: 10,
    name: 'Velvet Oreo Bliss',
    slug: 'velvet-oreo-bliss',
    price: 70,
    image: '/cakes/oreo.png',
  },
  {
    id: 11,
    name: 'Green Harmony',
    slug: 'green-harmony',
    price: 70,
    image: '/cakes/matcha.png',
  },
]

// ✅ All cakes
router.get('/', (_req, res) => {
  res.json(cakes)
})

// ✅ Single cake by slug
router.get('/:slug', (req, res) => {
  const { slug } = req.params
  const cake = cakes.find((c) => c.slug === slug)
  if (!cake) {
    return res.status(404).json({ error: 'Cake not found' })
  }
  res.json(cake)
})

export default router
