import React from 'react'
import NavbarBottom from './NavbarBottom'
import NavbarTop from './NavbarTop'
import { Route, Routes,Navigate  } from "react-router-dom";
import WomenListCard from '../../Pages/WomenListCard';
const Navbar = () => {
  return (
    <div>
        <NavbarTop/>
        <NavbarBottom />   
    </div>
  )
}

export default Navbar