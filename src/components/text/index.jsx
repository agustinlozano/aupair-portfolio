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

// build a fourh version of subtitle component based on the third version
// now the market pen effect have to trigger when the user are scrolling over the subtitle
export const Subtitle2 = ({ children, id }) => {
  const [ref, inView] = useInView({
    threshold: 1,
    rootMargin: '-1px',
    triggerOnce: true,
  });

  useEffect(() => {
    console.log(inView);
  }, [inView])

  return (
    <AnimatePresence>
    { inView &&
      <h2 id={id} className="w-fit mx-auto font-walsheim text-cyan-500 text-6xl my-20 text-center drop-shadow-md shadow-blue-600/50 md:text-8xl md:mb-20 hover:text-slate-50 z-10">
        <span className="relative inline-block">
          <span className="relative">{children}</span>
              <motion.span
                ref={ref}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5 }}
                className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-r opacity-30 from-cyan-500 to-cyan-600 rounded-sm z-0" aria-hidden="true">
              </motion.span>
        </span>
      </h2>
    }
    </AnimatePresence>
  )
}

export const Parap = ({children}) => {
  return (
    <p className="text-gray-400 text-lg inline-block">
      {children}
    </p>
  )
}
