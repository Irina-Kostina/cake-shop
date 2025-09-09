import Nav from './components/Nav'
import IntroSection from "./components/IntroSection"
import FavouritesSection from "./components/FavouritesSection"

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#fafafa] text-zinc-900">
      <Nav />
      <IntroSection />
      <FavouritesSection />
      <main className="w-full px-8 py-6">
        {/* page content goes here */}
      </main>
    </div>
  )
}

