export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] border-t border-zinc-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-[#6a8a6a]">Sweet Magnolia</h3>
          <p className="mt-2 text-zinc-600">
            Handmade cakes baked with love in New Zealand. 
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#6a8a6a] mb-3">Quick Links</h4>
          <ul className="space-y-2 text-zinc-700">
            <li><a href="/" className="hover:text-[#7e9b7d]">Home</a></li>
            <li><a href="/shop" className="hover:text-[#7e9b7d]">Shop</a></li>
            <li><a href="/about" className="hover:text-[#7e9b7d]">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#7e9b7d]">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-[#6a8a6a] mb-3">Contact</h4>
          <p className="text-zinc-700">Auckland, New Zealand</p>
          <p className="text-zinc-700">📞 +64 21 123 4567</p>
          <p className="text-zinc-700">✉️ info@sweetmagnolia.co.nz</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-200 py-4 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Sweet Magnolia Cakery. All rights reserved.
      </div>
    </footer>
  )
}
