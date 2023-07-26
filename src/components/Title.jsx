const Title = ({ text, style }) => {
  return (
    <strong className={`fw-bold text-uppercase ${style}`}>{text}</strong>
  )
}

export default Title