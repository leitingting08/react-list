interface Prop {
  color: string
}

const IconOracle = (props: Prop) => {
  const { color = '#76FCB3' } = props
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="6.5" stroke={color} />
      <circle opacity="0.5" cx="9" cy="9" r="8.75" stroke={color} strokeWidth="0.5" />
      <circle cx="9" cy="9" r="4" fill={color} />
    </svg>
  )
}

export default IconOracle
