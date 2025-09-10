export default function AboutUs() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Heading + paragraphs */}
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#6a8a6a] mb-6">
            Our Blooming Story
          </h2>

          <div className="space-y-6 text-[#456654] text-lg leading-relaxed">
            <p>
              Welcome to Sweet Magnolia Cakery, where the delicate beauty of
              magnolia blossoms meets the artistry of fine baking. Like the
              magnolia flower that symbolizes perseverance and dignity, our
              cakes are crafted with patience, care, and unwavering attention
              to detail.
            </p>

            <p>
              Founded with a passion for creating edible works of art, we draw
              inspiration from nature&apos;s most beautiful moments. Each cake
              tells a story of botanical elegance, infused with flavors as
              exquisite as a blooming garden in spring.
            </p>

            <p>
              Using only the finest organic ingredients and time-honored
              techniques passed down through generations, our master bakers
              create not just desserts, but memories that bloom long after the
              last bite.
            </p>
          </div>
        </div>

        {/* Right: Peach card with icon */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-br from-[#f4bfa8] to-[#eca989] text-white text-center px-6 py-12 shadow-lg">
            {/* Decorative dots effect */}
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-white/20"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 space-y-4">
              <div className="text-3xl">🌸</div>
              <p className="text-xl font-serif font-semibold">
                Botanical Artistry <br /> Since 2020
              </p>
              <div className="text-2xl">🍰</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
