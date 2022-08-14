import { useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import CV from '../../Files/CV.pdf'

const Navbar = () => {

  const linksName = [
    { name: 'Home' },
    { name: 'Sobre Mi' },
    { name: 'Habilidades' },
    { name: 'Portfolio' },
    { name: 'Contacto' }
  ]

  const linksAnchor = [
    { name: '/' },
    { name: '/about' },
    { name: '/skills' },
    { name: '/proyectos' },
    { name: '/contacto' }
  ]

  const [open, setOpen] = useState(false)
  const [change, setChange] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  const activeNavbarGlassmorphism = () => {
    if (window.scrollY >=50) {
      setChange(true)
    } else {
      setChange(false)
    }
  }

  window.addEventListener('scroll', activeNavbarGlassmorphism)

  return (
    <nav className={change ? 'navbar glassmorphism' : 'navbar'}>

      <img className='icon-1' src="https://img.icons8.com/ios/60/DFF6FF/programming.png" alt='icon-computer'/>

      <div className='button-ham-box'>
        <button onClick={handleToggle} className='button-ham'>
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </div>

      <ul className={`navbar-items ${open ? 'showMenu' : ""}`}>
        <div className='button-close-box'>
          <button onClick={handleToggle} className='button-ham'>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <img className='icon-2' src="https://img.icons8.com/ios/60/DFF6FF/programming.png" alt='icon-computer'/>

        {linksName.map((link, index) => (
          <li onClick={handleToggle} className='links' key={index}>
            <Link className='link' to={`${linksAnchor[index].name}`}>{link.name}</Link>
          </li>
        ))}

        <a className='resume-button' href={CV}>
          Mi CV
        </a>
      </ul>
    </nav>
  )
}

export default Navbar