import React from 'react'
import './footer.css'

const Footer = () => {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <footer className='footer'>
      <h3>Matias Sio Cordich</h3>
      <h3>Hecho con <img src="https://img.icons8.com/ios/20/47B5FF/like--v1.png" alt='heart-icon'/></h3>
      <h3>{year}</h3>
    </footer>
  )
}

export default Footer