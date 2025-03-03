import React from 'react'
import FAQ from './components/faq'
import About2 from './components/last_about'
import Contact from './contact'
import Footer from './components/fotter'
import "./App.css"; // Custom styles
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"; // Animation styles
import "owl.carousel/dist/assets/owl.carousel.css"; // Carousel styles
import "owl.carousel/dist/assets/owl.theme.default.css"; // Carousel theme
import Header from "./components/header";
// import HeroSection from "./components/hero_sec";
// import AboutUs from "./components/AboutUs";
import HeroSection from './components/hero_sec'
// src/index.js or in a specific component
import './assets/css/bootstrap.min.css';
import './assets/css/jquery-ui.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/bootstrap-datepicker.css';
import './assets/fonts/flaticon/font/flaticon.css';
import './assets/css/aos.css';
import './assets/css/style.css';

import img from './assets/images/mp.jpg'
const App = () => {
  return (
    <div>
<Header/>
<HeroSection/>
<FAQ/>
<About2/>
<Contact/>
<Footer/>

    </div>
  )
}

export default App