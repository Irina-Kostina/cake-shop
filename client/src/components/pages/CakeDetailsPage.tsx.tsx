import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

type Cake = {
  id: number
  name: string
  price: number
  image: string
}

export default function CakeDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const [cake, setCake] = useState<Cake | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCake() {
      try {
        const res = await fetch(`/api/cakes/${id}`)
        if (!res.ok) throw new Error("Cake not found")
        const data = await res.json()
        setCake(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }
    fetchCake()
  }, [id])

  if (loading) return <p className="p-6">Loading...</p>
  if (error) return <p className="p-6 text-red-500">{error}</p>
  if (!cake) return <p className="p-6">Cake not found</p>

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-center">
      <img
        src={cake.image}
        alt={cake.name}
        className="w-full max-h-[400px] object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-[#6a8a6a]">{cake.name}</h1>
      <p className="text-lg mt-2">${cake.price.toFixed(2)}</p>

      <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-b from-[#efb39a] to-[#e3a283] text-white">
        Add to Cart
      </button>
    </section>
  )
}
