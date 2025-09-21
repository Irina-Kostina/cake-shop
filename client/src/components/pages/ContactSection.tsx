// ContactSection.tsx
export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#f7f7f7] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact info */}
        <div>
          <h2 className="text-3xl font-bold text-[#6a8a6a] mb-6">Get in Touch</h2>
          <p className="text-zinc-700 mb-4">
            Have a question about our cakes or want to place a custom order?  
            We’d love to hear from you!
          </p>
          <ul className="space-y-3 text-zinc-800">
            <li><strong>Phone:</strong> (09) 123 4567</li>
            <li><strong>Email:</strong> hello@sweetmagnolia.co.nz</li>
            <li><strong>Address:</strong> 123 Magnolia Lane, Auckland, NZ</li>
          </ul>
        </div>

        {/* Contact form */}
        <form className="bg-white shadow-md rounded-2xl p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700">Name</label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a8a6a]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a8a6a]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700">Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6a8a6a]"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6a8a6a] text-white py-2 rounded-lg font-semibold hover:bg-[#587658] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
