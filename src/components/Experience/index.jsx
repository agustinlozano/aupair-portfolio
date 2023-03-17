import { Parap, Subtitle, TextMd, TextSm } from "../text"
import { experienceCnt } from "../../content/"
import { shuffleArray } from "../../utils/random"
import Linker from "../atoms/Linker"
import Label from "../atoms/Label"
import { useContext } from "react"
import { LanguageContext } from "../../context/multilingual"

// an array of tailwind colors
const colors = [
  "#fb8b24",
  "#bdb2ff",
  "#06d6a0",
  "#ffd166",
  "#f6f4d2",
]

const LocationPinSvg = () => (
  <svg className="inline w-4 h-4 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13Z" fill="#374151" />
  </svg>
)

const Experience = ({children, title, date, location, labels}) => {
  const randomColors = shuffleArray(colors)

  const randomLabels = labels.map((label, index) => {
    return {
      label,
      color: randomColors[index]
    }
  })

  return (
    <section className="grid grid-cols-1 mb-20 gap-4 lg:m-20 lg:grid-cols-8">
      <div className="px-5 lg:col-span-5">
        <TextMd color='dark' className="text-center font-bold">{title}</TextMd>
        <TextSm color='dark' className="mb-2">{date} | 
        <a href={location.coords} className="underline hover:text-cyan-500" target="_blank"><LocationPinSvg />{location.city}</a>.</TextSm>
        <Parap>
          {children}
        </Parap>
      </div>
      <div className="px-5 lg:p-1 lg:col-span-3">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 lg:grid-cols-2">
          {randomLabels.map((item) =>
            <Label key={item.label} color={item.color}>
              {item.label}
            </Label>
          )}
        </div>
      </div>
    </section>
  )
}

const ExperienceContainer = () => {
  const { language } = useContext(LanguageContext)

  return (
    <div id="experience" className="my-32 p-2 border-t sm:p-28 lg:p-6 lg:grid-cols-5 lg:mb-10 lg:mt-28 lg:mx-16">
      <Subtitle>
        <Linker id="#experience" />
        {experienceCnt[language].title}
      </Subtitle>
      {experienceCnt[language].items.map((experience) => (
        <Experience
          key={experience.id}
          title={experience.title.toUpperCase()}
          date={experience.date}
          location={experience.location}
          labels={experience.labels}
        >
          {experience.content}
        </Experience>
      ))}
    </div>
  )
}

export default ExperienceContainer