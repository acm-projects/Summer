import { Link } from "react-router-dom"

import '../index.css'
import './styles/Navbar.css'
import logo from '../assets/SummerLogo.png';

const Navbar = () => {  
  return (
    <nav className='nav'>
      <ul>
        <li>
          <div className='company'>
            <img src={logo} className='logo' alt='Logo'></img>
            <Link to="/" className="web-title">Summer</Link>
          </div>
        </li>
        <CustomLink to='/' content='Home' className='headText'></CustomLink>
        <CustomLink to='/library' content='Library' className='headText'></CustomLink>
        <div className='login'>
          <CustomLink to='/login' content='Log In' className='headText white'></CustomLink>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar

// Take in link, name of link, and any other props
function CustomLink({ to, content, ...props }) {
  const path = window.location.pathname
  return (
    <li className={ path === to ? 'active' : ''}>
      <Link to={to} {...props}>
        {content}
      </Link>
    </li>
  )
}

