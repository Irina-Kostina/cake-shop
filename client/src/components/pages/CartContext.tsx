import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type CartItem = {
  id: number
  name: string
  slug: string
  image: string
  size: string
  price: number
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (slug: string, size: string) => void
  clearCart: () => void
  updateQuantity: (slug: string, size: string, quantity: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Load from localStorage on first render
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  function addToCart(item: CartItem) {
    setCart((prev) => {
      const existing = prev.find(
        (c) => c.slug === item.slug && c.size === item.size
      )
      if (existing) {
        return prev.map((c) =>
          c.slug === item.slug && c.size === item.size
            ? { ...c, quantity: c.quantity + item.quantity }
            : c
        )
      }
      return [...prev, item]
    })
  }

  function removeFromCart(slug: string, size: string) {
    setCart((prev) => prev.filter((c) => !(c.slug === slug && c.size === size)))
  }

  function clearCart() {
    setCart([])
  }

  function updateQuantity(slug: string, size: string, quantity: number) {
    setCart((prev) =>
      prev.map((c) =>
        c.slug === slug && c.size === size
          ? { ...c, quantity: Math.max(1, quantity) } // prevents going below 1
          : c
      )
    )
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within a CartProvider")
  return context
}
