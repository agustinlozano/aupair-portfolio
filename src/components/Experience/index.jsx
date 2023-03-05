import { Parap, Subtitle, TextMd } from "../text"
import { experiences } from "../../content/"
import { shuffleArray } from "../../utils/random"
import Linker from "../atoms/Linker"
import Label from "../atoms/Label"

// an array of tailwind colors
const colors = [
  "#fb8b24",
  "#bdb2ff",
  "#06d6a0",
  "#ffd166",
  "#f6f4d2",
]

const Experience = ({children, title, labels}) => {
  const randomColors = shuffleArray(colors)

  const randomLabels = labels.map((label, index) => {
    return {
      label,
      color: randomColors[index]
    }
  })

  return (
    <div className="grid grid-cols-1 mb-20 gap-4 lg:m-20 lg:grid-cols-8">
      <div className="px-5 lg:col-span-5">
        <TextMd color='dark'>{title}</TextMd>
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
    </div>
  )
}

const ExperienceContainer = () => {
  return (
    <div id="experience" className="my-32 p-2 border-t sm:p-28 lg:p-6 lg:grid-cols-5 lg:mb-10 lg:mt-28 lg:mx-16">
      <Subtitle>
        <Linker id="#experience" />
        EXPERIENCE
      </Subtitle>
      {experiences.map((experience) => (
        <Experience
          key={experience.id}
          title={experience.title}
          labels={experience.labels}
        >
          {experience.content}
        </Experience>
      ))}
    </div>
  )
}

export default ExperienceContainer