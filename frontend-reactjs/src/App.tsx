import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Banner from "./components/Banner"
import About from "./components/About"
import SkillsCarousel from "./components/SkillsCarousel"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <Banner />
      <About />
      <SkillsCarousel />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
