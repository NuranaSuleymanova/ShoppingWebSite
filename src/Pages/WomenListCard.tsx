import React, { useState } from 'react'
import NavbarTop from '../components/navbar/NavbarTop'
import NavbarBottom from '../components/navbar/NavbarBottom'
import PageName from './WomenListCardAllSection/PageName'
import CategoryList from './WomenListCardAllSection/CategoryList'
import CategorySlider from './WomenListCardAllSection/CategorySlider'
import ProductCard from './WomenListCardAllSection/ProductCard'
import { CardList } from '../redux/cardSlice'
import DetailsProduct from './WomenListCardAllSection/DetailsProduct'
import FooterTotal from '../components/Footer/FooterTotal'
// import PopupImage from './WomenListCardAllSection/PopupImage'
const WomenListCard = ({}) => {
  const [product,setProduct]=useState('');

  return (
    <div>
        <NavbarTop />
        <NavbarBottom />
        <PageName />
        <CategoryList />
        <CategorySlider />
        <ProductCard />
        <FooterTotal/>
        {/* <PopupImage /> */}
        {/* <DetailsProduct /> */}
    </div>
  )
}

export default WomenListCard