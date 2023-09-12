import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/cardSlice';
import { BsSuitHeart } from 'react-icons/bs';
import {GoPlus} from 'react-icons/go';
import {TbTruckDelivery} from 'react-icons/tb';
import {PiMapPinLight} from 'react-icons/pi'
import { addToCart,addtoWishlist,getCartTotal, getListTotal } from '../../redux/addToCardSlice';
import { removeFromWishlist } from '../../redux/WishList';
import { count } from 'console';
import { AsyncThunkAction, Dispatch, AnyAction } from '@reduxjs/toolkit';



const DetailsProduct = () => {
   
    const dispatch=useDispatch<AppDispatch>();
    const {productDetails}=useSelector((state:RootState)=>state.categories);

  useEffect(()=>
  {
      dispatch(getCartTotal())
  },[dispatch])


    const {id}=useParams();

    useEffect(()=>
    {
        dispatch(getProductDetails(Number(id)));
       
    },[dispatch,id])
  
   
    const addBasket=()=>
    {
      dispatch(addToCart({id:productDetails?.id, title:productDetails?.title, image:productDetails?.image,price:productDetails?.price,quantity:1}));
      dispatch(getCartTotal());
    }
   
    const addWishList =()=>
    {
      dispatch (addtoWishlist({id:productDetails?.id}));
      dispatch(getListTotal());
    }
    
   
   
  

  return (
    <div className='all-details-page-container'>

      <section className='image-details-container'>
         <div className="image-container">
              {
                productDetails?.images.map((images,i)=>
                (  <div className="image-c">
                  <img className='image-d'src={images} alt="" />
                </div>
                ))

              }
         </div>
           <div className="image-details-content">
                <div className="details-content">
                    <div className="path">
                      <span className='path-span'>Home / Women / Tops</span>
                    </div>
                    <div className="title-price">
                        <h1>{productDetails?.title}</h1> 
                        <span>£{productDetails?.price}</span> 
                    </div>
                    <ul className='size-ul'>
                      <li className='size-li'>
                        <button className='size-btn'>6</button>
                        </li>
                        <li className='size-li'>
                        <button className='size-btn'>8</button>
                        </li>
                        <li className='size-li'>
                        <button className='size-btn'>10</button>
                        </li>
                        <li className='size-li'>
                        <button className='size-btn'>12</button>
                        </li>
                        <li className='size-li'>
                        <button className='size-btn'>14</button>
                        </li>
                        <li className='size-li'>
                        <button className='size-btn'>16</button>
                        </li>
                        <li className='size-li'>
                        <button className='size-btn'>18</button>
                        </li>
                    </ul>
                    <button className='size-chart'>Size Chart</button>
{/* 
                    <div>
                      <div onClick={decrement}>-</div>
                     <input type="text" value={quantityList} />
                      <div onClick={increment}>+</div>
                    </div>  
                      */}

                    <p className='product-detail'>Our model wears a UK 8 and is 175cm/5'9'' tall</p>
                     <div className="add-to-card-heart-btn">
                      <button onClick={addBasket} type='submit' className='add-to-card-btn'>Add to Card</button>
                      <button onClick={addWishList} type='submit' className='heart-icon-btn'><BsSuitHeart size={20}/></button>
                     </div>
                     <div className="product-details__klarna__wp1vz">
                      <svg width="36" height="24" viewBox="0 0 99 23" fill="#0A0B09" className="product-details__klarna--icon__KYLDp" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1959 12.302C15.4251 9.05747 17.2373 4.69239 17.2373 5.23611e-05L17.2373 0H12.4146C12.4146 3.9886 10.5971 7.64959 7.4285 10.0447L5.51782 11.4886L12.9211 21.6754H19.0081L12.1959 12.302ZM0 21.6746H4.92822V1.67954e-05H0V21.6746ZM25.0988 21.6687H20.4446V0.00409108H25.0988V21.6687ZM43.6131 6.68235H39.1663V7.64101C37.9102 6.77626 36.3939 6.2681 34.7586 6.2681C30.4304 6.2681 26.9217 9.80823 26.9217 14.1757C26.9217 18.5431 30.4304 22.0835 34.7586 22.0835C36.3938 22.0835 37.9102 21.5753 39.1663 20.7108V21.6686H43.6131V6.68235ZM86.0766 6.68235H90.5231V21.6686H86.0766V20.7108C84.8204 21.5753 83.3041 22.0835 81.6686 22.0835C77.3407 22.0835 73.8319 18.5431 73.8319 14.1757C73.8319 9.80823 77.3407 6.2681 81.6686 6.2681C83.3041 6.2681 84.8204 6.77626 86.0766 7.64101V6.68235ZM82.0327 10.3204C84.2579 10.3204 86.0616 12.0462 86.0616 14.1757C86.0616 16.3052 84.2581 18.0316 82.0327 18.0316C79.8073 18.0316 78.0035 16.3052 78.0035 14.1757C78.0035 12.0463 79.8075 10.3204 82.0327 10.3204ZM92.4531 19.1693C92.4531 17.6139 93.7025 16.3531 95.2439 16.3531C96.7853 16.3531 98.035 17.6138 98.035 19.1693C98.035 20.7245 96.7853 21.9856 95.2439 21.9856C93.7025 21.9856 92.4531 20.7244 92.4531 19.1693ZM50.492 6.68254V8.6344L50.492 8.63469C51.3834 7.4639 53.0442 6.68372 54.85 6.68372V11.0444C54.8416 11.0442 54.8334 11.0438 54.8253 11.0434C54.816 11.0429 54.8067 11.0424 54.7971 11.0424C53.0378 11.0424 50.5022 12.3112 50.5022 14.6718V21.6685H45.9395V6.68254H50.492ZM39.1516 14.1758C39.1516 12.0463 37.3477 10.3205 35.1224 10.3205C32.8973 10.3205 31.0933 12.0464 31.0933 14.1758C31.0933 16.3053 32.8972 18.0317 35.1224 18.0317C37.3477 18.0317 39.1516 16.3053 39.1516 14.1758ZM65.9307 6.27933C64.1544 6.27933 62.4733 6.83579 61.3494 8.37102V6.68329H56.922V21.6688H61.4038V13.7934C61.4038 11.5145 62.9183 10.3986 64.7418 10.3986C66.6961 10.3986 67.8196 11.5766 67.8196 13.7625V21.6688H72.2609V12.1388C72.2609 8.65128 69.513 6.27959 65.9307 6.27959V6.27933Z" fill="#0A0B09">
                          </path>
                          </svg>
                          <p className="product-details__klarna--text__pR_6I" data-qa="klarna-banner">Pay in 3 payments of £11.67 </p>
                          <a href="/klarna" className="product-details__klarna--link__81aR5">Learn more.</a>
                          </div>
                        <hr className='line'/>
                      <div className="product-details-div">
                        <button className='product-details'>
                          <div className='icon-border'> <GoPlus /></div>
                          <h3>Product Details</h3>
                        </button>
                        <button className='product-details'>
                          <div className='icon-border'><GoPlus /></div>
                          <h3>Returns</h3>
                        </button>
                      
                      </div>
                      <div className="delivery-details-div">
                        <button className='delivery-details'>
                          <div className='icon-border'> <TbTruckDelivery /></div>
                          <div className='delivery-container-div'>
                            <p className='delivery-container'>
                              <span className='delivery-content'>Delivery</span>
                              <span className='delivery-p'>Order by 1am for next day delivery</span>
                            </p>
                            <span style={{marginLeft:'15px',border:'1px solid #eee',borderRadius:'4px',fontWeight:'400',lineHeight:'14px', fontFamily:'union,Arial,Helvetica,sans-serif',color: '#242420', fontSize:'12px',padding:'4px 8px'}} className="delivery-countdown__gbtOq product-details-toolbar__delivery-countdown__3qzUT" data-qa="deliveryCountdown">
                              <span className="countdown__unit">04:</span>
                              <span className="countdown__unit">37:</span>
                              <span className="countdown__unit">42</span>
                              </span>
                          </div>
                        </button>
                      </div>

                      <div className="delivery-details-div">
                        <button className='delivery-details'>
                          <div className='icon-border'> <PiMapPinLight /></div>
                          <div className='delivery-container-div'>
                            <p className='delivery-container'>
                              <span className='delivery-content'>Find In Store</span>
                              <span className='delivery-p'>Check stock in your local stores</span>
                            </p>
                           
                          </div>
                        </button>
                      </div>
                </div>
           </div>
      </section>
                 
        {/* {
           <img style={{width:'400px',height:'400px' ,objectFit:'cover'}} src={productDetails?.image} alt="" />
        } */}
    </div>
  )
}

export default DetailsProduct



