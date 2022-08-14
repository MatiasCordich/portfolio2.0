import React from 'react'
import { motion } from 'framer-motion'
import './home.css'

const Home = () => {

  return (
    <motion.main
      className='home-container'
      initial={{ y:30, opacity: 0 }}
      animate={{ y:0 ,opacity: 1 }}
      exit={{ y:-30, opacity: 0 }}
      transition= {{duration: .8}}
    >
      <aside className='home-text'>
        <h1>Hola.</h1>
        <h2>Me llamo <span>Matias</span> </h2>
        <h3>Desarrollador Front-End</h3>
        <div className='home-links'>
          <a className='btn active' href="https://github.com/MatiasCordich" target="__blank">
            <img src="https://img.icons8.com/ios-glyphs/30/DFF6FF/github.png" alt='github-btn' /> Github
          </a>
          <a className='btn no-active' href="https://www.linkedin.com/in/matiassiocordich/" target="__blank">
            <img src="https://img.icons8.com/ios-glyphs/30/DFF6FF/linkedin-circled--v1.png" alt='linkedin-btn' /> Linkedin
          </a>
        </div>
      </aside>
      <aside className='home-code'>
        <article className='code-box'>
          <div className='code-navbar'>
            <p className='code-article'>
              Matias.js
            </p>
            <div className='btns-code-navbar'>
              <img src="https://img.icons8.com/material-outlined/20/47B5FF/minus-math.png" alt='line-btn' />
              <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/17/47B5FF/external-minimize-applications-windows-those-icons-lineal-those-icons.png" alt='minimize-btn' />
              <img src="https://img.icons8.com/material-outlined/20/47B5FF/delete-sign.png" alt='delte-btn' />
            </div>
          </div>
          <div className='code-text'>
            <p>
              <span className='var-color'>const</span> <span className='var-name'>matias</span><span className='value'> = &#123;</span>
              <span>
                <p className='key'>
                  apellidos: <span className='value'>&#91;"Sio", "Cordich"&#93;<span className='key'></span></span>,
                </p>
                <p className='key'>
                  trabajo: <span className='value'>"Front-End developer"</span>,
                </p>
                <p className='key'>
                  edad: <span className='value'>26</span>,
                </p>
                <p className='key'>
                  pais: <span className='value'>"Argentina"</span>,
                </p>
                <p className='key'>lenguajes:
                  <span className='value'>&#91;"HTML", "CSS", "Javascript"&#93;
                  </span>,
                </p>
                <p className='key'><span className='key'>skills: <span className='value'>&#123;</span></span>
                  <span className='value'>
                    <p className='key' style={{ "marginLeft": "20px" }}>
                      frontend: <span className='value'>&#91;"React", "Redux", "Styled-Components","Bootstrap"&#93;<span className='key'>,</span></span>
                    </p>
                  </span>
                  <span className='value'>
                    <p className='key' style={{ "marginLeft": "20px" }}>
                      backend: <span className='value'>&#91;"Node.js", "Express"&#93;<span className='key'>,</span></span>
                    </p>
                  </span>
                  <span className='value'>
                    <p className='key' style={{ "marginLeft": "20px" }}>
                      database: <span className='value'>&#91;"MongoDB", "Firebase"&#93;<span className='key'>,</span></span>
                    </p>
                  </span>
                  <span className='value'>
                    <p className='key' style={{ "marginLeft": "20px" }}>
                      herramientas: <span className='value'>&#91;"Vercel", "Heroku", "Git", "Postman"&#93;</span>
                    </p>
                  </span>
                </p>
                <span className='value' style={{ "marginLeft": "10px" }}>&#125;</span>
              </span>

            </p>
            <span className='value'>&#125;</span>
          </div>
        </article>
      </aside>

    </motion.main>
  )
}

export default Home