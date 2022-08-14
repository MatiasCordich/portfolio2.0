import React from 'react'
import {motion} from 'framer-motion'
import './contact.css'

const Contact = () => {
  return (
    <motion.section
    className='contact'
    style={{ color: 'white' }}
    initial={{ y:30, opacity: 0 }}
    animate={{ y:0 ,opacity: 1 }}
    exit={{ y:-30, opacity: 0 }}
    transition= {{duration: .8}}
    >
      <article className='contact-box'>
        <h3>...y ahora qué?</h3>
        <h2>Contáctame</h2>
        <p>Si has llegado hasta aquí y te ha gustado alguno de mis proyectos, puedes dejarme un mensaje. Actualmente me encuentro buscando ofertas de trabajo, ¿tienes algun proyecto en mente?, ¿buscas a alguien para tu equipo de trabajo? Charlemos!, tu propuesta me interesa.
        </p>
        <a className='btn no-active' href="mailto:m.scordich@gmail.com">
        <img src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/24/D1D1D1/external-email-communication-nawicon-detailed-outline-nawicon.png" alt='message-alt'/>
          Mensaje
          </a>
      </article>
    </motion.section>
  )
}

export default Contact