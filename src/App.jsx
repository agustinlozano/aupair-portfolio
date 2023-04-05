import { motion, useScroll } from 'framer-motion'
import { LanguageContext } from './context/multilingual'
import { useState } from "react"
import ExperienceContainer from "./components/Experience"
import Welcome from "./components/welcome"
import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import GoUp from "./components/atoms/GoUp"
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
        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress, zIndex: 1000 }} />
        <Header />
        <div className="m-auto max-w-screen-2xl">
          <Welcome />
          <ExperienceContainer />
          <AboutMe />
        </div>
        <GoUp />
      </LanguageContext.Provider>
    </>
  )
}

export default App
