import React from 'react'
import Home from '../../Pages/Home/Home'
import About from '../../Pages/About/About'
import Skills from '../../Pages/Skills/Skills'
import Proyects from '../../Pages/Proyects/Proyects'
import Contact from '../../Pages/Contact/Contact'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/proyectos" element={<Proyects />} />
                <Route path="/contacto" element={<Contact />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes