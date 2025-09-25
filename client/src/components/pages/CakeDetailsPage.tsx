import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useCart } from "./CartContext"

type SizeOption = {
  label: string
  serves: number
  price: number
}

type RatingSummary = {
  average: number
  reviewsCount: number
}

type Cake = {
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
  priceRange: { min: number; max: number }
}

export default function CakeDetailsPage() {
  const { slug } = useParams<{ slug: string }>()
  const [cake, setCake] = useState<Cake | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null)
  const [quantity, setQuantity] = useState<number>(1)
  const { addToCart } = useCart()

  useEffect(() => {
    async function fetchCake() {
      try {
        const res = await fetch(`/api/cakes/${slug}`)
        if (!res.ok) throw new Error("Cake not found")
        const data = await res.json()
        setCake(data)
        setSelectedSize(data.sizes[0]) // default select first size
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }
    fetchCake()
  }, [slug])

  if (loading) return <p className="p-6">Loading...</p>
  if (error) return <p className="p-6 text-red-500">{error}</p>
  if (!cake) return <p className="p-6">Cake not found</p>

  // Safe Add to Cart
  function handleAddToCart() {
    if (!cake || !selectedSize) return
    addToCart({
      id: cake.id,
      name: cake.name,
      slug: cake.slug,
      image: cake.image,
      size: selectedSize.label,
      price: selectedSize.price,
      quantity,
    })
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-800 mb-6 flex items-center gap-2">
        <Link to="/" className="hover:underline">Cakery Auckland</Link>
        <span>›</span>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <span>›</span>
        <span className="font-semibold">{cake.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Cake image */}
        <div>
          <img
            src={cake.image}
            alt={cake.name}
            className="w-full rounded-lg shadow"
          />
        </div>

        {/* Right: Cake details */}
        <div>
          <h1 className="text-3xl font-bold text-[#6a8a6a]">{cake.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 my-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-500">
              {cake.rating.average} ({cake.rating.reviewsCount} reviews)
            </span>
          </div>

          {/* Price range */}
          <p className="text-2xl font-semibold mb-4">
            NZD ${cake.priceRange.min} – ${cake.priceRange.max}
          </p>

          {/* Components */}
          <h3 className="font-bold mt-4">Components:</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {cake.components.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

          {/* Extra info */}
          <p className="mt-4"><b>Allergens:</b> {cake.allergens.join(", ")}</p>
          <p><b>Storage:</b> {cake.storage}</p>
          <p><b>Expiry:</b> {cake.expiry}</p>

          {/* Sizes */}
          <h3 className="font-bold mt-6">Choose size:</h3>
          <div className="flex flex-wrap gap-3 mt-2">
            {cake.sizes.map((s, i) => (
              <button
                key={i}
                onClick={() => setSelectedSize(s)}
                className={`px-4 py-2 rounded-full border transition 
                  ${selectedSize?.label === s.label
                    ? "bg-gradient-to-b from-[#efb39a] to-[#e3a283] text-white shadow"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"}`}
              >
                {s.label} ({s.serves} serves) – ${s.price}
              </button>
            ))}
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-3 mt-8">
            <div className="flex items-center border rounded-full">
              <button
                className="px-3 py-1 text-lg"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                –
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-3 py-1 text-lg"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-b from-[#efb39a] to-[#e3a283] text-white px-6 py-2 rounded-full shadow hover:shadow-lg transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
