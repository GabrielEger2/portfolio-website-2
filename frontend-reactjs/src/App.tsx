import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <div>
      <Outlet />
      <Navbar />
      <Footer />
    </div>
  )
}

export default App
