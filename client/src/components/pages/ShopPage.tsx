import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Cake = {
  id: number
  name: string
  slug: string
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
        <p className="text-lg text-gray-600">Loading cakes...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
        <p className="text-red-600 text-lg">Error: {error}</p>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#6a8a6a] tracking-wide">
          All Cakes
        </h1>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {cakes.map((cake) => (
          <li key={cake.id}>
            <Link to={`/shop/${cake.slug}`}>
              <div className="group h-full rounded-2xl bg-white/90 ring-1 ring-[#cfd8cf] shadow-sm hover:shadow-md transition-shadow">
                <div className="overflow-hidden rounded-t-2xl bg-neutral-100 aspect-[5/5]">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] bg-white"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = '/cakes/default.png'
                    }}
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-medium text-neutral-900 leading-snug">
                    {cake.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    From <span className="font-semibold">${cake.price}</span>
                  </p>
                  <button
                    onClick={() => alert(`Added: ${cake.name}`)}
                    className="mt-5 w-full rounded-full bg-gradient-to-b from-[#efb39a] to-[#e3a283] text-white font-medium py-2.5 shadow-[0_6px_20px_rgba(227,162,131,0.35)] hover:shadow-[0_10px_26px_rgba(227,162,131,0.45)] transition-shadow"
                  >
                    Select &amp; Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
