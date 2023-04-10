import { Link } from "react-router-dom"

import '../index.css'
import styles from './styles/Navbar.module.css'
import logo from '../assets/SummerLogo.png';

const Navbar = () => {  
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.company}>
            <img src={logo} className={styles.logo} alt='Logo'></img>
            <Link to="/" className={styles.webTitle}>Summer</Link>
          </div>
        </li>
        <CustomLink to='/' content='Home' className={styles.headText}></CustomLink>
        <CustomLink to='/library' content='Library' className={styles.headText}></CustomLink>
        <CustomLink to='/videolinkinput' content='Summer-ize' className={styles.headText}></CustomLink>
        <CustomLink to='/quizpage' content='Quiz Page' className={styles.headText}></CustomLink>
        <div className={styles.login}>
          <CustomLink to='/login' content='Log In' className={`${styles.headText} ${styles.white}`}></CustomLink>
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
