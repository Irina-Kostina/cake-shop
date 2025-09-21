import { createContext, useContext, useState, ReactNode } from "react"

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
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(item: CartItem) {
    setCart((prev) => {
      // check if item (same cake + same size) already exists
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

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within a CartProvider")
  return context
}
