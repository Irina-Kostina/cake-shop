import { useEffect, useState } from "react"

const phrases = [
  "Where Every Bloom Becomes a Sweet Memory",
  "Crafting Sweet Stories, One Petal at a Time",
  "Where Garden Dreams Meet Cake Artistry",
  "Blossoming Flavors for Life's Sweetest Moments",
]


export default function IntroSection() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false) // start fade-out

      // wait 300ms then change phrase and fade-in
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
        setFade(true)
      }, 1000)
    }, 4000)

    return () => clearInterval(interval)
  }, [])


  return (
    <section className="relative bg-gradient-to-b from-neutral-50 to-white py-16 sm:py-20">
      {/* Background subtle dots pattern */}
      <div className="absolute inset-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-12 gap-4 opacity-20">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className="h-2 w-2 rounded-full bg-[#e3a283]/30"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#6a8a6a] tracking-wide">
          SWEET MAGNOLIA <br /> CAKERY
        </h1>

        {/* ✨ Rotating subtitle with fade */}
        <div className="mt-4 min-h-[2.5rem]">
          <p
            className={`text-lg sm:text-xl italic text-[#e3a283] transition-opacity duration-1000 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {phrases[index]}
          </p>
        </div>

        <p className="mt-6 text-base sm:text-lg text-[#6a8a6a] leading-relaxed">
          Handcrafted artisan cakes made with love, finest ingredients, and
          botanical inspiration for life&apos;s most cherished moments
        </p>
      </div>
    </section>
  )
}
