import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div>
      <Outlet />
      <Navbar />
    </div>
  )
}

export default App
