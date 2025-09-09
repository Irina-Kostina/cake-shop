import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top bar */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={viteLogo} alt="Vite" className="h-8 w-8" />
            <img src={reactLogo} alt="React" className="h-8 w-8 animate-spin-slow" />
            <span className="text-lg font-semibold">Cake Shop (Tailwind v4)</span>
          </div>
          <nav className="flex items-center gap-4 text-sm text-neutral-600">
            <a href="#" className="hover:text-neutral-900">Home</a>
            <a href="#" className="hover:text-neutral-900">Cakes</a>
            <a href="#" className="hover:text-neutral-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Sweet Magnolia Cakery</h1>
        <p className="mt-2 text-neutral-600">
          Beautiful cakes for every occasion — styled with Tailwind v4.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="rounded-xl bg-neutral-900 px-5 py-2.5 text-white shadow hover:bg-neutral-800 active:translate-y-[1px]"
          >
            Count: {count}
          </button>
          <span className="text-neutral-600">Click to confirm HMR + Tailwind</span>
        </div>
      </section>

      {/* Sample cards */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { id: 1, name: 'Vanilla Magnolia', price: 59 },
          { id: 2, name: 'Peach & Sage Dream', price: 69 },
          { id: 3, name: 'Coffee Caramel Drip', price: 72 },
        ].map((cake) => (
          <article key={cake.id} className="rounded-2xl border bg-white p-4 shadow-sm">
            <div className="mb-3 aspect-[4/3] w-full rounded-xl bg-neutral-100" />
            <h3 className="text-lg font-semibold">{cake.name}</h3>
            <p className="mt-1 text-neutral-700">${cake.price.toFixed(2)}</p>
            <button className="mt-3 inline-flex w-full items-center justify-center rounded-xl border px-4 py-2 hover:bg-neutral-50">
              Add to cart
            </button>
          </article>
        ))}
      </section>
    </main>
  )
}

// Tailwind v4 custom util (optional): add in client/src/index.css if you like.
// .animate-spin-slow { animation: spin 6s linear infinite; }
