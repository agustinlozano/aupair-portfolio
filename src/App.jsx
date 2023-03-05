import Header from "./components/Header"
import Welcome from "./components/welcome/"
import ExperienceContainer from "./components/Experience/"
import { motion, useScroll } from 'framer-motion'
import { LanguageContext } from './context/multilingual'
import { useState } from "react"
import './app.css'
import GoUp from "./components/atoms/GoUp"

function App() {
  const { scrollYProgress } = useScroll()
  const [language, setLanguage] = useState('spanish')

  const toggleLanguage = () => {
    setLanguage((language) => (language === 'spanish' ? 'english' : 'spanish'))
  }

  return (
    <>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress, zIndex: 1000 }} />
        <Header />
        <div className="m-auto">
          <Welcome />
          <ExperienceContainer />
        </div>
        <GoUp />
      </LanguageContext.Provider>
    </>
  )
}

export default App
