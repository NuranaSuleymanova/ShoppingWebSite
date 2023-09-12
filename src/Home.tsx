import React from 'react'
import Navbar from './components/navbar/Navbar';
import Section1 from './components/Mainsection/Section1';
import Section2 from './components/Mainsection/Section2';
import SaleOfSection from './components/Mainsection/SaleOfSection';
import SliderComponent from './components/Slider/SliderComponent';
import FooterTotal from './components/Footer/FooterTotal';
const Home = () => {
  return (
    <div>
         <Navbar />
        <Section1 />
        <Section2 />
        <SaleOfSection />
        <SliderComponent/>
        <FooterTotal/>
    </div>
  )
}

export default Home