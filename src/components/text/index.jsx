export const TextLg = ({ children }) => {
  return (
    <p className="text-gray-400 text-center text-3xl inline-block md:text-4xl">{children}</p>
  )
}

export const TextMd = ({ children, color, className }) => {
  return (
    color === "dark"
      ? <h3 className={"text-gray-600 text-lg mb-5 inline-block md:text-3xl " + className}>{children}</h3>
      : <h3 className={"text-gray-400 text-lg mb-5 inline-block md:text-3xl " + className}>{children}</h3>
  )
}

export const TextSm = ({ children, color, className }) => {
  return (
    color === "dark"
      ? <p className={"text-gray-600 text-left text-sm block md:text-lg " + className}>{children}</p>
      : <p className={"text-gray-400 text-left text-sm block md:text-lg " + className}>{children}</p>
  )
}

export const HiglightTextXl = ({ children, color = 'purple' }) => {
  return (
    color === "purple"
      ? <b className="text-violet-500 text-center text-3xl inline-block md:text-5xl">{children}</b>
      : <b className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-600 text-center text-3xl inline-block md:text-4xl">{children}</b>  
  )
}

export const Subtitle = ({ children, id }) => {
  return (
    <h2 id={id} className="font-walsheim text-cyan-500 text-6xl my-20 text-center drop-shadow-md shadow-blue-600/50 md:text-8xl md:mb-20 hover:text-slate-50">{children}</h2>
  )
}

export const Parap = ({children}) => {
  return (
    <p className="text-gray-400 text-lg inline-block">
      {children}
    </p>
  )
}
