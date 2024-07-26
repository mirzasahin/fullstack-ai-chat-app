import { Link } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="left">
        <h1>Mars AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque et distinctio quis dolor saepe laboriosam enim.
        </h3>
        <Link to="/dashboard" >Get Started</Link>
      </div>
      <div className="right">Right bar</div>
    </div>
  )
}

export default Homepage