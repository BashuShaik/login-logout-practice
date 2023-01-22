import './index.css'

const Welcome = props => {
  const {name, greeting} = props
  return (
    <h1 className="message">
      {name}, {greeting}
    </h1>
  )
}

Welcome.defaultProps = {
  name: 'Basha',
  greeting: 'Have a Good Day',
}

export default Welcome
