import React from 'react'
import { motion } from 'framer-motion'
import './proyects.css'

const Proyects = () => {
  return (
    <motion.section
      className='portfolio-section'
      style={{ color: 'white' }}
      initial={{ y:30, opacity: 0 }}
      animate={{ y:0 ,opacity: 1 }}
      exit={{ y:-30, opacity: 0 }}
      transition= {{duration: .8}}
    >
      <h2>Portfolio</h2>
      <aside className='home-code block w-100 flex-fix mx-6'>

          <div className='code-navbar w-9'>
            <p className='code-article'>
              Portfolio.json
            </p>
            <div className='btns-code-navbar'>
              <img src="https://img.icons8.com/material-outlined/20/47B5FF/minus-math.png" alt='line-btn' />
              <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/17/47B5FF/external-minimize-applications-windows-those-icons-lineal-those-icons.png" alt='minimize-btn' />
              <img src="https://img.icons8.com/material-outlined/20/47B5FF/delete-sign.png" alt='delte-btn' />
            </div>
          </div>
          <div className='code-text'>
            <span className='value'> &#123;</span>
            <p>

              <span className='var-name'>"proyectos": </span><span className='value'>&#91;</span>

              <div style={{ 'marginLeft': '25px' }} className='json-box'>
                <span className='value'>&#123;</span>
                <span>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "titulo": <span className='value'>"Calculadora",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "descripcion": <span className='value'>"Calculadora funcional hecha con JS vanilla",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "herramientas": <span className='value'>&#91;"HTML","CSS",
                  "Javascript"&#93;<span className='key'></span>,</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "sitios": <span className='value'>
                      &#91;
                      <a className='port-links' href="https://github.com/MatiasCordich/Calculadora" target="__blank">"Github"</a>
                    , <a className='port-links' href="https://calculadora-lemon-rho.vercel.app/" target="__blank">"Pagina"</a>&#93;<span className='key'></span></span>
                  </p>
                </span>
                <span className='value'>&#125;</span>,

                <p className='value'>&#123;</p>
                <span>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "titulo": <span className='value'>"Queseria de Mi?",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "descripcion": <span className='value'>"Landing page sobre una página informativa de quesos",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "herramientas": <span className='value'>&#91;"HTML","CSS"&#93;<span className='key'></span>,</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "sitios": <span className='value'>
                      &#91;
                      <a className='port-links' href="https://github.com/MatiasCordich/Pagina-Quesos" target="__blank">"Github"</a>
                    , <a className='port-links' href="https://pagina-quesos.vercel.app/" target="__blank">"Pagina"</a>&#93;<span className='key'></span></span>
                  </p>
                </span>
                <span className='value'>&#125;</span>,

                <p className='value'>&#123;</p>
                <span>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "titulo": <span className='value'>"Pokedéx",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "descripcion": <span className='value'>"Pokedex que devuelve un pokemón aleatorio con sus stats",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "herramientas": <span className='value'>&#91;"React", "PokeAPI"&#93;<span className='key'></span>,</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "sitios": <span className='value'>
                      &#91;
                      <a className='port-links' href="https://github.com/MatiasCordich/PokeApi" target="__blank">"Github"</a>
                    , <a className='port-links' href="https://poke-api-xi.vercel.app/" target="__blank">"Pagina"</a>&#93;<span className='key'></span></span>
                  </p>
                </span>
                <span className='value'>&#125;</span>,

                <p className='value'>&#123;</p>
                <span>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "titulo": <span className='value'>"News API",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "descripcion": <span className='value'>"SPA sobre un blog de noticias",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "herramientas": <span className='value'>&#91;"React", "Redux", "Firebase", "Currents API"&#93;<span className='key'></span>,</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "sitios": <span className='value'>
                      &#91;
                      <a className='port-links' href="https://github.com/MatiasCordich/Integrador-NUCBA" target="__blank">"Github"</a>
                    , <a className='port-links' href="https://integrador-nucba-five.vercel.app/login" target="__blank">"Pagina"</a>&#93;<span className='key'></span></span>
                  </p>
                </span>
                <span className='value'>&#125;</span>,

                <p className='value'>&#123;</p>
                <span>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "titulo": <span className='value'>"App del Clima",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "descripcion": <span className='value'>"Aplición simple sobre el clima de cualquier parte del mundo",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "herramientas": <span className='value'>&#91;"React", "Styled-Components", "WeatherAPI"&#93;<span className='key'></span>,</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "sitios": <span className='value'>
                      &#91;
                      <a className='port-links' href="https://github.com/MatiasCordich/react-weather-app" target="__blank">"Github"</a>
                    , <a className='port-links' href="https://react-weather-app-two-pi.vercel.app/" target="__blank">"Pagina"</a>&#93;<span className='key'></span></span>
                  </p>
                </span>
                <span className='value'>&#125;</span>,

                <p className='value'>&#123;</p>
                <span>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "titulo": <span className='value'>"Bloc de Notas",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "descripcion": <span className='value'>"Pagina que simula una aplicación de Bloc de Notas con registro y logueo de usuarios",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "herramientas": <span className='value'>&#91;"React", "Node.js" "Express", "MongoDB", "Heroku"&#93;<span className='key'></span>,</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "sitios": <span className='value'>
                      &#91;
                      <a className='port-links' href="https://github.com/MatiasCordich/Integrador-Final" target="__blank">"Github"</a>
                    , <a className='port-links' href="https://integrador-nucba-client.herokuapp.com/" target="__blank">"Pagina"</a>&#93;<span className='key'></span></span>
                  </p>
                </span>
                <span className='value'>&#125;</span>,

                <span>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "titulo": <span className='value'>"La Scaloneta",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "descripcion": <span className='value'>"Interfaz simple para visualizar los datos en archivo json de una API creada por mí sobre la lista de jugadores de la selección Argentina",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "herramientas": <span className='value'>&#91;"HTML", "CSS", "Node.js" "Express", "Vercel"&#93;<span className='key'></span>,</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "sitios": <span className='value'>
                      &#91;
                      <a className='port-links' href="https://github.com/MatiasCordich/La-Scaloneta" target="__blank">"Github"</a>,
                      <a className='port-links' href="https://github.com/MatiasCordich/SCALONETA-API" target="__blank">"Github de la API"</a>,
                      <a className='port-links' href="https://la-scaloneta-rho.vercel.app/" target="__blank">"Pagina"</a>&#93;<span className='key'></span></span>
                  </p>
                </span>
                <span className='value'>&#125;</span>,

                <span>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "titulo": <span className='value'>"Task API",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "descripcion": <span className='value'>"Una API de tareas que utiliza la metodología CRUD",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "herramientas": <span className='value'>&#91;"Node.js" "Express", "MongoDB", "Mongoose", "Vercel"&#93;<span className='key'></span>,</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "sitios": <span className='value'>
                      &#91;
                      <a className='port-links' href="https://github.com/MatiasCordich/Task-API" target="__blank">"Github"</a>
                    , <a className='port-links' href="https://task-api-uiit.vercel.app/" target="__blank">"Pagina",
                    </a>
                    <a className='port-links' href="https://documenter.getpostman.com/view/17280404/2s83S87AJM" target="__blank"> "Documentación"
                    </a>
                    &#93;<span className='key'></span></span>
                  </p>
                </span>
                <span className='value'>&#125;</span>,
                <span>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "titulo": <span className='value'>"Auth-API",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "descripcion": <span className='value'>"API de autentiación de usuarios",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "herramientas": <span className='value'>&#91;"Node.js" "Express", "MongoDB", "Mongoose", "JWT", "Bcrypt", "Vercel"&#93;<span className='key'></span>,</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "sitios": <span className='value'>
                      &#91;
                      <a className='port-links' href="https://github.com/MatiasCordich/Login-auth-jwt" target="__blank">"Github"</a>
                    , <a className='port-links' href="https://login-auth-jwt.vercel.app/" target="__blank">"Pagina"</a>&#93;<span className='key'></span></span>
                  </p>
                </span>
                <span className='value'>&#125;</span>,
                <span>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "titulo": <span className='value'>"REST-API (AUTH - CRUD)",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "descripcion": <span className='value'>"API de autenticación y de manejo de datos CRUD utilizando Typescript",</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "herramientas": <span className='value'>&#91; "Node.js", "Typescript", "Express", "MongoDB", "Mongoose", "JWT", "Bcrypt"&#93;<span className='key'></span>,</span>
                  </p>
                  <p style={{ 'marginLeft': '15px' }} className='key'>
                    "sitios": <span className='value'>
                      &#91;
                      <a className='port-links' href="https://github.com/MatiasCordich/Api-Typescript" target="__blank">"Github"</a>
                    , <a className='port-links' href="https://matitips.notion.site/matitips/REST-API-Typescript-8279fc69d04c4ac49bd8106d41eb491d" target="__blank">"Documentación"</a>&#93;<span className='key'></span></span>
                  </p>
                </span>
                <span className='value'>&#125;</span>,
              </div>
              <span style={{ 'marginLeft': '15px' }} className='value'>&#93;</span>
            </p>
            <span className='value'>&#125;</span>

            
          </div>


      </aside>
    </motion.section>
  )
}

export default Proyects