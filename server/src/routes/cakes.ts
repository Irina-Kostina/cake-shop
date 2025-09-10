import { Router } from 'express'

const router = Router()

const cakes = [
  {
    id: 1,
    name: 'Vanilla Magnolia',
    price: 59,
    image: '/cakes/chocolate_cake.png',
  },
  {
    id: 2,
    name: 'Peach & Sage Dream',
    price: 69,
    image: '/cakes/cream_cake.png',
  },
  {
    id: 3,
    name: 'Coffee Caramel Drip',
    price: 72,
    image: '/cakes/coffee_cake.png',
  },
  {
    id: 4,
    name: 'Honey Blossom',
    price: 65,
    image: '/cakes/honey_cake.png',
  },
  {
    id: 5,
    name: 'Mango Delight',
    price: 68,
    image: '/cakes/mango_cake.png',
  },
  {
    id: 6,
    name: 'Tiramisu Temptation',
    price: 75,
    image: '/cakes/tiramisu_cake.png',
  },
  {
    id: 7,
    name: 'Ube Velvet',
    price: 70,
    image: '/cakes/ube_cake.png',
  },
]



router.get('/', (_req, res) => {
  res.json(cakes)
})

export default router
