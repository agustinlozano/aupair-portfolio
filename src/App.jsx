import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import { LanguageContext } from './context/multilingual'
import { useState } from "react"
import ExperienceContainer from "./components/Experience"

import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import GoUp from "./components/atoms/GoUp"
import Index from './components/Index'
import './app.css'

function App() {
  const { scrollYProgress } = useScroll()
  const [language, setLanguage] = useState('english')

  const toggleLanguage = () => {
    setLanguage((language) => (language === 'spanish' ? 'english' : 'spanish'))
  }

  return (
    <>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <Router>
          <motion.div className="progress-bar" style={{ scaleX: scrollYProgress, zIndex: 1000 }} />
          <Header />
          <div className="m-auto max-w-screen-2xl">
            <Routes>
              <Route path="/about" element={<AboutMe />} />
              <Route path="/experience" element={<ExperienceContainer />} />
              <Route path="/" element={<Index />} />
            </Routes>
          </div>
          <GoUp />
        </Router>
      </LanguageContext.Provider>
    </>
  )
}

export default App
