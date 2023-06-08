import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Banner from "./components/Banner"
import About from "./components/About"
import SkillsCarousel from "./components/SkillsCarousel"
import Projects from "./components/Projects"

function App() {

  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <SkillsCarousel />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
