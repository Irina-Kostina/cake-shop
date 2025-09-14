import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


/** Shape of a cake item shown on the grid */
type Cake = {
  id: number
  name: string
  price: number
  image: string
}



/**
 * Customer Favourites section
 * – grid like screenshot #1, styled like screenshot #2 (sage + peach, soft cards)
 */
export default function FavouritesSection() {
  const [cakes, setCakes] = useState<Cake[]>([])

  useEffect(() => {
    async function fetchCakes() {
      try {
        const res = await fetch("/api/cakes") // Express route
        const data = await res.json()
        setCakes(data)
      } catch (err) {
        console.error("Failed to fetch cakes", err)
      }
    }
    fetchCakes()
  }, [])

  const favouriteIds = [1, 3, 5, 7]

  return (
    <section
      aria-labelledby="favourites-heading"
      className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14"
    >
      {/* Heading – your site’s vibe: serif, sage, generous tracking */}
      <div className="text-center mb-8 sm:mb-12">
        <h2
          id="favourites-heading"
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#6a8a6a] tracking-wide"
        >
          Shop Our Customer Favourites
        </h2>
      </div>

      {/* Grid of cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {cakes
        .filter((cake) => favouriteIds.includes(cake.id))
        .map((cake) => (
          <li key={cake.id}>
            <Link to={`/cakes/${cake.id}`}>
              <div className="group h-full rounded-2xl bg-white/90 ring-1 ring-[#cfd8cf] shadow-sm hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="overflow-hidden rounded-t-2xl bg-neutral-100 aspect-[5/5]">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] bg-white"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-medium text-neutral-900 leading-snug">
                    {cake.name}
                  </h3>

                  {/* From price line – muted like screenshot #1 */}
                  <p className="mt-1 text-sm text-neutral-500">
                    From <span className="font-semibold">${cake.price}</span>
                  </p>

                  {/* Add/Order button – peach bubble like your navbar cart */}
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
