import React from "react"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Title from "./components/Title"
import { Route, Router, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <div >
      <Navbar />
      <Title />
      {/* <Router></Router> */}
      <main className="mvh-100">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* </Route> */}
          <Route path="/about" element={<About />} />


          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

    </div>
  )
}

export default App
