const Svg = ({ svgFile, style = ""}) => {
  return (
      <img src={svgFile} alt="svg" className={style} />
  )
}

export default Svg;