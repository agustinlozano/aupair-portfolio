export const TextLg = ({ children }) => {
  return (
    <p className="text-gray-400 text-center text-3xl inline-block md:text-4xl">{children}</p>
  )
}

export const TextMd = ({ children, color }) => {
  return (
    color === "dark"
      ? <h3 className="text-gray-600 text-center text-lg mb-5 inline-block md:text-3xl md:text-center">{children}</h3>
      : <h3 className="text-gray-400 text-center text-lg mb-5 inline-block md:text-3xl md:text-center lg:text-left">{children}</h3>
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
    <h2 id={id} className="text-cyan-500 text-3xl my-16 font-extrabold text-center drop-shadow-md shadow-blue-600/50 md:text-5xl md:mb-20 hover:text-slate-50">{children}</h2>
  )
}

export const Parap = ({children, color}) => {
  return (
    <p className="text-gray-400 text-lg inline-block">
      {children}
    </p>
  )
}
