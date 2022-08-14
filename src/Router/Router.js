import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
import AnimatedRoutes from '../components/AnimatedRoutes/AnimatedRoutes'
import Footer from '../components/Footer/Footer';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AnimatedRoutes/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router