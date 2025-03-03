import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from "./LandingPage"
import EditExperiences from "./EditExperiences"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/edit/experiences" element={<EditExperiences />} />
      </Routes>
    </Router>
  )
}

export default App
