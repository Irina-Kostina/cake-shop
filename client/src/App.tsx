import { Outlet, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import IntroSection from "./components/IntroSection"
import FavouritesSection from "./components/FavouritesSection"
import AboutUs from "./components/AboutUs"
import ProductsSection from './components/pages/ProductsSection'
import ContactSection from './components/pages/ContactSection'
import Footer from './components/Footer'



export default function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen w-full bg-[#faf9e6] text-zinc-900">
      <Nav />
      <span id="home" className="block h-0" />
      <div className="pt-28">
        {location.pathname === '/' && (
          <>
            <div>
            <IntroSection />
            <FavouritesSection />
            <AboutUs />
            <ProductsSection />

            <ContactSection />
            </div>
            <Footer />
          </>
        )}
        <main className="w-full px-8 py-6">
          {/* page content goes here */}
          <Outlet />
        </main>
      </div>
    </div>
  )
}

