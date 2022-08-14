import React from 'react'
import { motion } from 'framer-motion'
import './skills.css'

const Skills = () => {
  return (
    <motion.section
      className='skills'
      style={{ color: 'white' }}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y:0 ,opacity: 1 }}
      exit={{ y:-30, opacity: 0 }}
      transition= {{duration: .8}}
    >
      <h2>Habilidades</h2>
      <aside className='home-code block'>
        <article className='code-box'>
          <div className='code-navbar'>
            <p className='code-article'>
              Frontend.js
            </p>
            <div className='btns-code-navbar'>
              <img src="https://img.icons8.com/material-outlined/20/47B5FF/minus-math.png" alt='line-btn' />
              <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/17/47B5FF/external-minimize-applications-windows-those-icons-lineal-those-icons.png" alt='minimize-btn' />
              <img src="https://img.icons8.com/material-outlined/20/47B5FF/delete-sign.png" alt='delte-btn' />
            </div>
          </div>
          <div className='code-text'>
            <p>
              <span className='var-color'>const</span> <span className='var-name'>frontend</span><span className='value'> = &#123;</span>
              <span>
                <p style={{'marginLeft': '15px'}} className='key'>
                  lenguajes: <span className='value'>&#91;"HTML","CSS",
                    "Javascript"&#93;,</span>
                </p>
                <p style={{'marginLeft': '15px'}} className='key'>
                  framework: <span className='value'>&#91;"React","Styled-Components","Redux",
                    "Bootstrap"&#93;<span className='key'></span></span>
                </p>

              </span>
            </p>
            <span className='value'>&#125;</span>
          </div>
        </article>
      </aside>

      <div className='flex-end'>
        <aside className='home-code block translate'>
          <article className='code-box'>
            <div className='code-navbar'>
              <p className='code-article'>
                Backend.js
              </p>
              <div className='btns-code-navbar'>
                <img src="https://img.icons8.com/material-outlined/20/47B5FF/minus-math.png" alt='line-btn' />
                <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/17/47B5FF/external-minimize-applications-windows-those-icons-lineal-those-icons.png" alt='minimize-btn' />
                <img src="https://img.icons8.com/material-outlined/20/47B5FF/delete-sign.png" alt='delte-btn' />
              </div>
            </div>
            <div className='code-text'>
              <p>
                <span className='var-color'>const</span> <span className='var-name'>backend</span><span className='value'> = &#123;</span>
                <span>
                  <p style={{'marginLeft': '15px'}} className='key'>
                    lenguaje: <span className='value'>"Node.js",</span>
                  </p>
                  <p style={{'marginLeft': '15px'}} className='key'>
                    framework: <span className='value'>&#91;"Express","Mongoose"&#93;,</span>
                  </p>
                  <p style={{'marginLeft': '15px'}} className='key'>
                    database: <span className='value'>&#91;"MongoDB","Firebase"&#93;</span>
                  </p>
                </span>
              </p>
              <span className='value'>&#125;</span>
            </div>
          </article>
        </aside>
      </div>


      <aside className='home-code block'>
        <article className='code-box'>
          <div className='code-navbar'>
            <p className='code-article'>
              Herramientas.js
            </p>
            <div className='btns-code-navbar'>
              <img src="https://img.icons8.com/material-outlined/20/47B5FF/minus-math.png" alt='line-btn' />
              <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/17/47B5FF/external-minimize-applications-windows-those-icons-lineal-those-icons.png" alt='minimize-btn' />
              <img src="https://img.icons8.com/material-outlined/20/47B5FF/delete-sign.png" alt='delte-btn' />
            </div>
          </div>
          <div className='code-text'>
            <p>
              <span className='var-color'>const</span> <span className='var-name'>herramientas</span><span className='value'> = &#123;</span>
              <span>
                <p style={{'marginLeft': '15px'}} className='key'>
                  herramientas: <span className='value'>&#91;"Vercel","Heroku",
                    "Postman", "Git", "Github"&#93;<span className='key'></span></span>
                </p>
              </span>
            </p>
            <span className='value'>&#125;</span>
          </div>
        </article>
      </aside>
    </motion.section>
  )
}

export default Skills