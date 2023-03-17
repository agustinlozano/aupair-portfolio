import { useContext } from 'react'
import { motion } from 'framer-motion'
import { welcomeCnt } from '../../content/'
import { LanguageContext } from '../../context/multilingual'
import { HiglightTextXl, TextLg } from '../text'
import girlJumping from '../../assets/girlJumping.svg'
import welcome from '../../assets/welcome.svg'
import SocialMedia from '../SocialMedia'
import Svg from "../Svg"
import './welcome.css'

const Welcome = () => {
  // use context
  const { language } = useContext(LanguageContext)

  return (
    <motion.div
      id="welcome"
      className="bg-slate-200 grid grid-cols-1 place-content-center gap-4 m-3 rounded-lg shadow-lg sm:mx-20 lg:grid-cols-5 max-lg:pt-14 max-lg:mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="col-span-1 flex flex-col justify-center px-3 lg:col-span-3">
        <TextLg>{welcomeCnt[language].greeting} <HiglightTextXl color="cyan">Celeste</HiglightTextXl><Svg svgFile={girlJumping} style="w-10 inline-block lg:w-20" /></TextLg>
        <br/>
        <TextLg>{welcomeCnt[language].welcome}</TextLg>
        {/* <h1 className="text-[#6c63ff] text-5xl font-bold my-6 max-md:text-4xl">Au Pair Candidate Portfolio</h1> */}
        {/* <h1 className="font-extrabold text-transparent text-center text-3xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:text-6xl">Au Pair Candidate Portfolio</h1> */}
        <h1 className="font-extrabold text-transparent text-center text-3xl bg-clip-text bg-gradient-to-r from-cyan-800 via-cyan-500 to-teal-700 md:text-4xl">Au Pair Candidate Portfolio</h1>
        <SocialMedia />
      </div>
      <motion.div
        className="flex justify-center items-center col-span-1 px-4 lg:col-span-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Svg svgFile={welcome} style="" />
      </motion.div>
    </motion.div>
  )
}

export default Welcome
