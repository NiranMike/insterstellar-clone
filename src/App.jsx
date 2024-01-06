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
      </div>
    </>
  )
}

export default App
