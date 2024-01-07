import Grow from "./components/Grow"
import GrowSpace from "./components/GrowSpace"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SecondSection from "./components/SecondSection"

function App() {

  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
        <SecondSection />
        <Grow />
        <GrowSpace />
      </div>
    </>
  )
}

export default App
