import { useState } from "react"
import { useCart } from "../pages/CartContext"

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart()
  const [shipping, setShipping] = useState("pickup")

  if (cart.length === 0) {
    return <p className="p-6 text-center">Your cart is empty 🛒</p>
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = 0 // ✅ delivery is free now
  const total = subtotal + shippingCost

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">
      {/* Left: Cart Table */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6 text-[#6a8a6a]">Your Cart</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left font-semibold text-gray-700">
              <th className="py-3">Product</th>
              <th className="py-3">Price</th>
              <th className="py-3">Quantity</th>
              <th className="py-3">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={`${item.slug}-${item.size}`} className="border-b">
                <td className="py-4 flex items-center gap-4">
                  <button
                    onClick={() => removeFromCart(item.slug, item.size)}
                    className="text-lg font-bold text-gray-400 hover:text-red-500"
                    aria-label={`Remove ${item.name}`}
                  >
                    ✕
                  </button>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  )}
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.size}</p>
                  </div>
                </td>

                <td className="py-4">NZD ${item.price.toFixed(2)}</td>

                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <button
                      className={`w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-100
                        ${item.quantity <= 1 ? "opacity-40 cursor-not-allowed" : ""}`}
                      onClick={() =>
                        updateQuantity(item.slug, item.size, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      –
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-100"
                      onClick={() =>
                        updateQuantity(item.slug, item.size, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="py-4">NZD {(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Coupon + Update Cart + Clear Cart */}
        <div className="flex flex-wrap gap-4 mt-6">
          <input
            type="text"
            placeholder="Coupon code"
            className="border p-3 flex-1 min-w-[200px] rounded-lg"
          />
          <button className="bg-[#6a8a6a] text-white px-6 py-3 rounded-lg hover:bg-[#557055]">
            APPLY COUPON
          </button>
          <button className="bg-[#6a8a6a] text-white px-6 py-3 rounded-lg hover:bg-[#557055]">
            UPDATE CART
          </button>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
          >
            CLEAR CART
          </button>
        </div>
      </div>

      {/* Right: Cart Totals */}
      <div className="lg:w-1/3 border p-6 rounded-2xl bg-white shadow">
        <h2 className="font-bold text-lg mb-6 text-[#6a8a6a]">CART TOTALS</h2>

        {/* Order Summary */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>NZD ${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t pt-3">
            <span>Total</span>
            <span>NZD ${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Shipping Options */}
        <h3 className="font-semibold mb-3 text-[#6a8a6a]">Choose Shipping</h3>
        <div className="flex flex-col gap-3 mb-6">
          {[ 
            { value: "pickup", label: "Pickup – 123 Magnolia Lane, Auckland, NZ" },
            { value: "delivery", label: "Delivery (Free)" },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setShipping(option.value)}
              className={`px-4 py-2 rounded-full border transition 
                ${
                  shipping === option.value
                    ? "bg-[#e9b29c] text-white border-[#e9b29c]"
                    : "border-gray-300 text-gray-700 hover:border-[#6a8a6a]"
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <button className="bg-[#e9b29c] text-white w-full py-3 text-lg rounded-lg hover:bg-[#d89c83]">
          PROCEED TO CHECKOUT →
        </button>
      </div>
    </section>
  )
}
