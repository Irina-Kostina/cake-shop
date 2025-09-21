// src/components/ProductsSection.tsx
export default function ProductsSection() {
  return (
    <section className="w-full bg-[#fafafa] py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE / CARD */}
        <div className="rounded-2xl bg-[#f7b599] shadow-md p-10 flex flex-col items-center justify-center text-center text-white">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Botanical Goodness
          </h3>
          <p className="text-lg max-w-md">
            Crafted with care using the purest ingredients, each cake reflects
            our love for nature’s beauty and flavour.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-serif font-bold text-[#6a8a6a] mb-8">
            Our Products
          </h2>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-2xl font-semibold text-[#6a8a6a] mb-2">
                Crafted with Care
              </h3>
              <p>
                At Sweet Magnolia Cakery, every dessert begins with patience and passion. 
                Our bakers pour artistry into each creation, ensuring that every cake 
                is as beautiful as it is delicious.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#6a8a6a] mb-2">
                Nature’s Finest Ingredients
              </h3>
              <p>
                We choose only the highest-quality ingredients — from real cream and 
                rich chocolate to locally grown fruits. This commitment guarantees 
                unforgettable flavour in every bite.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#6a8a6a] mb-2">
                Moments Made Sweeter
              </h3>
              <p>
                Each cake is more than dessert — it’s a memory in the making. 
                Whether it’s a quiet indulgence or a joyful celebration, 
                we’re here to make your moments sweeter and more meaningful.
              </p>
            </div>
          </div>

          <a
            href="/products"
            className="inline-block mt-8 px-6 py-3 bg-[#f7b599] text-white font-medium rounded-full shadow-md hover:bg-[#e99d7f] transition"
          >
            Explore our delicious range →
          </a>
        </div>
      </div>
    </section>
  )
}
