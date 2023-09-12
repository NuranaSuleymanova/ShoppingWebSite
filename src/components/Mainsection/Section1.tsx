import React from 'react'

const Section1 = () => {
  return (
    <div className='landingPage'>
        <picture>
            <img src="https://images.riverisland.com/image/upload/f_auto,q_auto/114SER23_W28_ALL_DIVS_home_Page%202.jpg?ee&$retina$" alt="" />
        </picture>
        {/* <div className="langinPageOverlay"> */}
        {/* <a className="overlay-link" data-promo="HP" data-promo-name="Women" data-promo-creative="Model" data-promo-position="Hero" title="Women" href="/women"></a> */}
          <div className="overlayContent">
            <a href="#">Women</a>
            <a href="">Men</a>
            <a href="">Boys</a>
            <a href="">Girls</a>
          </div>
        {/* </div> */}
    </div>
  )
}

export default Section1