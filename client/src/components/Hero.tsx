import { Link } from 'react-router-dom'
import '../assets/styles/index.css'

export const Hero = () => {
  return (
    <div className='hero'>
     
      <Link to='/game'> <img src="https://res.cloudinary.com/drjyg98uv/image/upload/v1693217566/memory-game/kwtljauocd9jt87c8rr5.jpg" /></Link>

    </div>
  )
}
