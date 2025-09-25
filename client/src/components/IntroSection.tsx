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

      // wait 1000ms then change phrase and fade-in
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
        setFade(true)
      }, 1000)
    }, 4000)

    return () => clearInterval(interval)
  }, [])


  return (
    <section
  id="home"
  className="relative bg-[url('/cakes/image.jpg')] bg-cover bg-center py-16 sm:py-20"
>
  {/* Dark overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/50" />



  {/* Content */}
  <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
      SWEET MAGNOLIA <br /> CAKERY
    </h1>

    {/* Rotating subtitle with fade */}
    <div className="mt-4 min-h-[2.5rem]">
      <p
        className={`text-lg sm:text-xl italic text-[#e7e6fb] transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {phrases[index]}
      </p>
    </div>

    <p className="mt-6 text-base sm:text-lg leading-relaxed drop-shadow-md">
      Handcrafted artisan cakes made with love, finest ingredients, and
      botanical inspiration for life&apos;s most cherished moments
    </p>
  </div>
</section>

  )
}
