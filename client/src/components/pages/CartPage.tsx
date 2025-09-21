import { useCart } from "../pages/CartContext"

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  if (cart.length === 0) {
    return <p className="p-6 text-center">Your cart is empty 🛒</p>
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <ul className="space-y-4">
        {cart.map((item, i) => (
          <li key={i} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">
                {item.size} — ${item.price} × {item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.slug, item.size)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={clearCart}
        className="mt-6 px-6 py-2 bg-red-500 text-white rounded"
      >
        Clear Cart
      </button>
    </section>
  )
}
