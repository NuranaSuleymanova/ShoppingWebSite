import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { useSelector } from 'react-redux/es/exports'
import { CardList, getCategories } from '../../redux/cardSlice'
import {BsCurrencyPound} from 'react-icons/bs';
import {BsSuitHeart} from 'react-icons/bs';
import {BsEye} from 'react-icons/bs';
import { closeModal, openModal } from '../../redux/modalSlice'
import SliderComponent from '../../components/Slider/SliderComponent'
import { useNavigate } from 'react-router-dom'
import Details from './Details'
import DetailsProduct from './DetailsProduct'

// interface productProps
// {
//   product:CardList
// }
// const {productDetails}=useSelector((state:RootState)=>state.categories);

const ProductCard = () => {
   
   
    const dispatch =useDispatch<AppDispatch>();
    const {categories}=useSelector((state:RootState)=>state.categories);
   
    useEffect (()=>
    {
        dispatch(getCategories())
    },[dispatch]);

    console.log(categories)
  return (
    <div className='card-container'>
       <div className="image-container">
        
            {
               categories.map((items,i)=>
               (
                <Details key={i} items={items}/>
               ))
            }
              
            
       </div>

    </div>
  )
}

export default ProductCard
