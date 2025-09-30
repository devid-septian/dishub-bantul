import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AppDetail from "./pages/AppDetail"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Terms from "./pages/Terms"
import BackToTop from "./components/BackToTop"
import PostSlider from "./components/PostSlider"
import PostDetail from "./pages/PostDetail"
import React from "react"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app/:id" element={<AppDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/" element={<PostSlider />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
      <BackToTop />
    </Router>
  )
}

export default App
