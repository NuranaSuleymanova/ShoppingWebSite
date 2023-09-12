import React from 'react';
import {FaCheck} from 'react-icons/fa';

const FooterTop = () => {
  return (
    <div className='footerTopContainer'>
        <div className="newsLetter">
        <h3 className="newsletter__title">ARE YOU AN RI INSIDER YET?</h3>
        <h4 className="newsletter__subtitle">Sign up now and get 15% off* your first shop, and insider-only discounts all year round (you're welcome)</h4>
         <div className="newaletter-input">
            <input className="enter-email"type="text" placeholder='Enter your email' />
            <button className='sign-btn'>Sign Up Now</button>
         </div>
        
        <div className="newsletter-checkbox-container">
        <div className='newsletter-checkbox'>
            <FaCheck className='checkicon'/>
            <input className='ui-checkbox' type="checkbox" />
            <label className='ui-checkbox-label' htmlFor="">Women</label>
        </div>
        <div className='newsletter-checkbox'>
        <FaCheck className='checkicon'/>
        <input className='ui-checkbox' type="checkbox" />
      
            <label className='ui-checkbox-label'  htmlFor="">Men</label>
        </div>
        <div className='newsletter-checkbox'>
        <FaCheck className='checkicon'/>
        <input className='ui-checkbox' type="checkbox" />
       
            <label className='ui-checkbox-label'  htmlFor="">Kids</label>
        </div>
        <div className='newsletter-checkbox'>  
        <FaCheck className='checkicon'/>
        <input className='ui-checkbox' type="checkbox" />
      
            <label className='ui-checkbox-label' htmlFor="">Beauty</label></div>
          
        </div>
         
        <div className="privacy">
            <span>Your personal details are safe with us. For more info, read our <a href="#">Privacy Notice</a></span>
        </div>

        </div>
    </div>
  )
}

export default FooterTop