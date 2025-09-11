import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Cake = {
  id: number
  name: string
  price: number
  image: string
}

export default function ShopPage() {
  const [cakes, setCakes] = useState<Cake[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/cakes') 
        if (!res.ok) throw new Error(`HTTP error ${res.status}`)
        const data = await res.json()
        setCakes(data)
      } catch (err: any) {
        setError(err.message ?? 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <p className="text-lg text-gray-600">Loading cakes...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <p className="text-red-600 text-lg">Error: {error}</p>
      </section>
    )
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#6a8a6a] mb-8">All Cakes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cakes.map((cake) => (
          <div
            key={cake.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <Link to={`/cakes/${cake.id}`} className="w-full text-center aspect-[4/3] overflow-hidden">
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-48 object-cover rounded-md mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/cakes/default.png' // fallback if image missing
                }}
              />
              <h2 className="text-xl font-semibold text-[#6a8a6a]">{cake.name}</h2>
              <p className="text-gray-700 mt-1">${cake.price.toFixed(2)}</p>
            </Link>
            
            <button className="mt-4 px-4 py-2 bg-[#6a8a6a] text-white rounded-lg hover:bg-[#5a795a] transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
