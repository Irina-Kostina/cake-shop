import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "./CartContext"

type SizeOption = {
  label: string
  serves: number
  price: number
}

type Cake = {
  id: number
  name: string
  slug: string
  price: number
  image: string
  sizes: SizeOption[]
}

export default function ShopPage() {
  const [cakes, setCakes] = useState<Cake[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { addToCart } = useCart()

  // modal state
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null)
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/cakes")
        if (!res.ok) throw new Error(`HTTP error ${res.status}`)
        const data = await res.json()
        setCakes(data)
      } catch (err: any) {
        setError(err.message ?? "Unknown error")
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

  function handleAddToCart() {
    if (!selectedCake || !selectedSize) return

    addToCart({
      id: selectedCake.id,
      name: selectedCake.name,
      slug: selectedCake.slug,
      image: selectedCake.image,
      size: selectedSize.label,
      price: selectedSize.price,
      quantity: 1,
    })

    setSuccessMessage(`✅ ${selectedCake.name} (${selectedSize.label}) added to cart!`)
    setSelectedSize(null)
  }

  function closeModal() {
    setSelectedCake(null)
    setSelectedSize(null)
    setSuccessMessage(null)
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
            <div className="group h-full rounded-2xl bg-white/90 ring-1 ring-[#cfd8cf] shadow-sm hover:shadow-md transition-shadow">
              <Link to={`/shop/${cake.slug}`}>
                <div className="overflow-hidden rounded-t-2xl bg-neutral-100 aspect-[5/5]">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </Link>

              <div className="p-4 sm:p-5">
                <h3 className="font-medium text-neutral-900 leading-snug">
                  {cake.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  From <span className="font-semibold">${cake.price}</span>
                </p>

                <button
                  onClick={() => setSelectedCake(cake)}
                  className="mt-5 w-full rounded-full bg-gradient-to-b from-[#7daf94] to-[#7cb8b0] text-white font-medium py-2.5 shadow hover:shadow-lg transition"
                >
                  Select &amp; Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* ✅ Modal */}
      {selectedCake && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4 text-[#6a8a6a]">
              Choose size for {selectedCake.name}
            </h2>

            {/* Sizes */}
            <div className="flex flex-wrap gap-3">
              {selectedCake.sizes.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-2 rounded-full border transition ${
                    selectedSize?.label === s.label
                      ? "bg-gradient-to-b from-[#4fd28c] to-[#7cb8b0] text-white shadow"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {s.label} ({s.serves} serves) – ${s.price}
                </button>
              ))}
            </div>

            {/* Success message */}
            {successMessage && (
              <p className="mt-4 text-green-600 font-medium">{successMessage}</p>
            )}

            {/* Actions */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm rounded-md border text-gray-600 hover:bg-gray-100"
              >
                {successMessage ? "Close" : "Cancel"}
              </button>
              {!successMessage && (
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className="px-4 py-2 rounded-md bg-gradient-to-b from-[#5f8f73] to-[#4d8070] text-white font-medium disabled:opacity-50"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
