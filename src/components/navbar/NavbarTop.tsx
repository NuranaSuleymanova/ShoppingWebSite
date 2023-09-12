import React, { useEffect } from 'react';
import {BiPound} from "react-icons/bi"
import {FaRegUserCircle} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"
import {BiShoppingBag} from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'
import {  getCartTotal, getListTotal } from '../../redux/addToCardSlice'
import { AppDispatch, RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { addtoWishlist } from '../../redux/WishList';
import { count } from 'console';

const NavbarTop = () => {

  const dispatch=useDispatch<AppDispatch>();
  const { carts ,totalAmount,itemCount} = useSelector((state: RootState) => state.cart);

  console.log('carts',carts);
  // console.log(items)
  useEffect(()=>
  {
      dispatch(getCartTotal());
      dispatch(getListTotal())
   
  },[dispatch])

  const navigate=useNavigate();
  return (
    <div  className='navbarTop'>
       <div className='navbarTopContent'>
          <div className='exchange'>
               <BiPound color='white' size={18} />
               <img src="https://www.riverisland.com/Assets/RiverIsland/Core/images/_responsive/site/flags/new-flag-uk.png" alt="" />
          </div>

         <a href="">Free standard delivery | Find out more</a>
         <a href="">Gift great taste | Gift cards</a>
         <a href="">Shop now & Pay in 3 with Klarna</a>

         <div className="account">

            <FaRegUserCircle style={{margin:'0'}}  color='white' size={18} className='user'/>
           <div className='heart-list'onClick={()=>navigate('/heartlist')} style={{display:'flex',alignItems:'center',margin:'10px',padding:'0'}}>
            <AiOutlineHeart color='white' style={{margin:'3px'}} size={20} className='heart'/>
            <span style={{color:'white'}}>{itemCount}</span>
            </div>
            <div onClick={()=>navigate('/basketpage')}className='totalprice'>
             <BiShoppingBag size={18} />
             <BiPound  size={15} fontFamily='Arial, Helvetica, sans-serif'  fontWeight={800} />
              <span>{totalAmount}</span>
            </div>
         </div>
       </div>
    </div>
  )
}

export default NavbarTop

function getWishlistTotal(): any {
  throw new Error('Function not implemented.');
}
