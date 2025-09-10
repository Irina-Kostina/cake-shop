import Nav from './components/Nav'
import IntroSection from "./components/IntroSection"
import FavouritesSection from "./components/FavouritesSection"
import AboutUs from "./components/AboutUs"



export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#fafafa] text-zinc-900">
      <Nav />
      <div className="pt-28">
        <IntroSection />
        <FavouritesSection />
        <AboutUs />
        <main className="w-full px-8 py-6">
          {/* page content goes here */}
        </main>
      </div>
    </div>
  )
}

