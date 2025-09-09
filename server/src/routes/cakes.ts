import { Router } from 'express'

const router = Router()

const cakes = [
  { id: 1, name: 'Vanilla Magnolia', price: 59 },
  { id: 2, name: 'Peach & Sage Dream', price: 69 },
  { id: 3, name: 'Coffee Caramel Drip', price: 72 }
]

router.get('/', (_req, res) => {
  res.json(cakes)
})

export default router
