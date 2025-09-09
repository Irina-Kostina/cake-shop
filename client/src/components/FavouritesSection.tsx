import { useState } from "react"

/** Shape of a cake item shown on the grid */
type Cake = {
  id: string
  name: string
  image: string           // put images in /public/cakes/...
  priceFrom: string       // e.g. "$17.00"
  sizes: { key: string; label: string }[] // radio options
}

/** Demo data – replace images with yours in /public/cakes */
const CAKES: Cake[] = [
  {
    id: "caramel-glaze",
    name: "Caramel Glaze Mudcake",
    image: "/cakes/caramel-glaze.jpg",
    priceFrom: "$19.00",
    sizes: [
      { key: "6", label: "6″" },
      { key: "8", label: "8″" },
      { key: "10", label: "10″" },
      { key: "12", label: "12″" },
    ],
  },
  {
    id: "american-baked",
    name: "American Baked Cheesecake",
    image: "/cakes/american-baked.jpg",
    priceFrom: "$17.00",
    sizes: [
      { key: "full", label: "Full" },
      { key: "half", label: "Half" },
      { key: "quarter", label: "Quarter" },
    ],
  },
  {
    id: "choc-hazelnut-stick",
    name: "Cheesecake Stick – Choc Hazelnut",
    image: "/cakes/choc-stick.jpg",
    priceFrom: "$7.90",
    sizes: [{ key: "single", label: "Single" }],
  },
  {
    id: "black-forest",
    name: "Black Forest Torte",
    image: "/cakes/black-forest.jpg",
    priceFrom: "$18.00",
    sizes: [
      { key: "6", label: "6″" },
      { key: "8", label: "8″" },
      { key: "10", label: "10″" },
      { key: "12", label: "12″" },
    ],
  },
]

/**
 * Customer Favourites section
 * – grid like screenshot #1, styled like screenshot #2 (sage + peach, soft cards)
 */
export default function FavouritesSection() {
  // remember chosen size per cake (by id)
  const [selected, setSelected] = useState<Record<string, string>>({})

  const onPick = (cakeId: string, sizeKey: string) =>
    setSelected((s) => ({ ...s, [cakeId]: sizeKey }))

  const onAdd = (cake: Cake) => {
    const size = selected[cake.id] ?? cake.sizes[0]?.key
    // TODO: wire to your cart later
    alert(`Added: ${cake.name} (${size})`)
  }

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
        {CAKES.map((cake) => (
          <li key={cake.id}>
            {/* Card – soft white, subtle ring, rounded-2xl like your UI */}
            <div className="group h-full rounded-2xl bg-white/90 ring-1 ring-[#cfd8cf] shadow-sm hover:shadow-md transition-shadow">
              {/* Image with fixed aspect and rounded corners */}
              <div className="overflow-hidden rounded-t-2xl bg-neutral-100 aspect-[4/3]">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
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
                  From <span className="font-semibold">{cake.priceFrom}</span>
                </p>

                {/* Size radios – pill style to match your rounded/peach aesthetic */}
                <fieldset className="mt-4">
                  <legend className="sr-only">Select size</legend>
                  <div className="flex flex-wrap gap-2">
                    {cake.sizes.map((s) => {
                      const active =
                        (selected[cake.id] ?? cake.sizes[0]?.key) === s.key
                      return (
                        <label
                          key={s.key}
                          className={[
                            "cursor-pointer rounded-full border px-3 py-1 text-sm",
                            "transition",
                            active
                              ? "border-transparent bg-gradient-to-b from-[#efb39a]/90 to-[#e3a283]/90 text-white shadow-sm"
                              : "border-neutral-300 text-neutral-700 hover:border-[#efb39a]/60",
                          ].join(" ")}
                        >
                          <input
                            type="radio"
                            name={`size-${cake.id}`}
                            value={s.key}
                            className="sr-only"
                            checked={active}
                            onChange={() => onPick(cake.id, s.key)}
                          />
                          {s.label}
                        </label>
                      )
                    })}
                  </div>
                </fieldset>

                {/* Add/Order button – peach bubble like your navbar cart */}
                <button
                  onClick={() => onAdd(cake)}
                  className="mt-5 w-full rounded-full bg-gradient-to-b from-[#efb39a] to-[#e3a283] text-white font-medium py-2.5 shadow-[0_6px_20px_rgba(227,162,131,0.35)] hover:shadow-[0_10px_26px_rgba(227,162,131,0.45)] transition-shadow"
                >
                  Select &amp; Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
