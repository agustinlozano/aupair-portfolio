const Label = ({children, color}) => {
  return (
    <p
      className="p-1 text-center rounded-md text-xs lg:text-sm hover:shadow-md hover:text-neutral-900 hover:font-semibold"
      style={{ backgroundColor: `${color}` }}
    >
      {children}
    </p>
  )
}

export default Label
