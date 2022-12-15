
import Navbar from "./Navbar"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import List from "./Pages/List"
import { Route, Routes } from "react-router-dom"


export default function App() {
  return (
    <div>
     <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/List" element={<List/>} />
        </Routes>
      </div>
    </div>
  )
}


