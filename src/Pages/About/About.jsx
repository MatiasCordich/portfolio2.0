import React from 'react'
import { motion } from 'framer-motion'
import './about.css'
import photo from '../../Assets/matias.png'

const About = () => {
  return (
    <motion.section
      className='about-section'
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -30, opacity: 0 }}
      transition={{ duration: .8 }}
    >

      <main className='about-box'>
        <div className='photo-box'>
          <img className='photo' src={photo} alt="matias-transparent" />
        </div>
        <article className='about-text'>
          <h2>Sobre mi</h2>
          <p className='text-box'>
            <span>
              Vivo en la <span className='bold'>Ciudad de Buenos Aires</span>, Argentina, tengo 26 años.</span>
            <span>Soy desarollador Full Stack (especializado en el stack <span className='bold'>MERN</span>) orientado al <span className='bold'>FrontEnd</span>.</span>
            <span>Mis primeros pasos en el mundo de la programación los dí a comienzos del 2021 cuando, finalmente, decidí aventurarme en el mundo del desarollo web y así, poder encontrar un ecosistema que una mis dos pasiones, el <span className='bold'>diseño</span> y la <span className='bold'>computación</span>.</span>
            <span>Cuando no estoy programando, estoy leyendo algun libro, escuchando música o jugando con el cubo de <span className='bold'>Rubik</span>.</span>
          </p>
        </article>
      </main>


    </motion.section>
  )
}

export default About