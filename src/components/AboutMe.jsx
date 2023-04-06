import { useContext } from "react"
import { LanguageContext } from "../context/multilingual"
import { aboutCnt } from "../content"
import { Parap } from "./text"
import Subtitle from "./text/Subtitle"
import introSvg from "../assets/introduction.svg"
import cookingSvg from "../assets/cooking.svg"
import goalSvg from "../assets/goals.svg"
import Linker from "./atoms/Linker"
import Svg from "./Svg"


const AboutMe = () => {
  const { language } = useContext(LanguageContext)

  return (
    <section id="about" className="my-32 mx-2 p-2 border-2 rounded-2xl shadow-xl sm:p-28 lg:p-6 lg:grid-cols-5 lg:mb-10 lg:mt-28 lg:mx-16">
        <Subtitle>
          <Linker id="#about" />
          {aboutCnt[language].title}
        </Subtitle>
        <div className="grid grid-cols-1 mb-36 gap-4 lg:m-20 lg:grid-cols-5">
          <div className="col-span-1 px-5 mb-10 flex items-center lg:col-span-3 lg:mb-0">
            <Parap>
              {aboutCnt[language].introduction}
            </Parap>
          </div>
          <div className="col-span-1 px-5 lg:col-span-2">
            <Svg svgFile={introSvg} style="p-5" />
          </div>
        </div>
        <div className="grid grid-cols-1 mb-36 gap-4 lg:m-20 lg:grid-cols-5">
          <div className="col-span-1 px-5 mb-10 flex items-center lg:col-span-3 lg:mb-0">
            <Parap className="text-center text-lg text-gray-700">
              {aboutCnt[language].hobbies}
            </Parap>
          </div>
          <div className="col-span-1 px-5 lg:col-span-2">
            <Svg svgFile={cookingSvg} style="p-5" />
          </div>
        </div>
        <div className="grid grid-cols-1 mb-36 gap-4 lg:m-20 lg:grid-cols-5">
          <div className="col-span-1 px-5 mb-10 flex items-center lg:col-span-3 lg:mb-0">
            <Parap>
              {aboutCnt[language].goals}
            </Parap>
          </div>
          <div className="col-span-1 px-5 lg:col-span-2">
            <Svg svgFile={goalSvg} style="p-5" />
          </div>
        </div>
        <div className="grid grid-cols-1 mb-36 gap-4 lg:m-20 lg:grid-cols-5">
          <div className="col-span-1 px-5 mb-10 flex items-center lg:col-span-3 lg:mb-0">
            <Parap>
              {aboutCnt[language].motivations}
            </Parap>
          </div>
          <div className="col-span-1 px-5 lg:col-span-2">
            <Svg svgFile={introSvg} style="p-5" />
          </div>
        </div>
    </section>
  )
}

export default AboutMe
