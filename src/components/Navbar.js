import { Link } from 'react-router-dom'
import logo from '../unsw-1.svg'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='UNSW logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/workexp'>Work Experience</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
