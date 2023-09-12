import React, { useState } from 'react';
import {BsSearch} from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import WomenListCard from '../../Pages/WomenListCard';
import { Route, Routes,Navigate  } from "react-router-dom";
const NavbarBottom = () => {

  const [toggle,setToggle]=useState(false);

  const navigate=useNavigate();
  return (
    <div className='navbarBottomHome'>
      <section className='navbarContainer'>
        <div className='navbarInnner'>
        <a onClick={()=>navigate('/')}  href="">
      <svg width="164" height="48" viewBox="0 0 947 105" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.154 53.5737L29.3565 53.4262V52.5621H37.0065C53.7184 52.5621 64.087 43.6266 64.087 27.7788C64.087 11.6569 53.2758 2.00488 34.4143 2.00488H0V102.845H14.2673V58.189H29.2511C41.7903 58.189 46.237 63.5208 49.4192 83.3938C50.7048 91.0227 51.4424 97.9351 53.0229 102.845H68.8708C66.7002 97.0921 65.9836 94.0574 63.8341 81.9608C58.7552 55.0278 50.9787 54.3113 37.154 53.5737ZM14.2673 47.8204V12.542H31.4007C42.7808 12.542 49.1242 18.2953 49.1242 29.823C49.1242 41.3506 43.0759 47.8204 31.4007 47.8204H14.2673Z" fill="black"></path>
    <path d="M108.741 2.02417H94.4736V102.844H108.741V2.02417Z" fill="black"></path>
    <path d="M178.463 58.7758C174.859 71.1675 172.267 84.6972 172.414 91.1881H171.403C171.255 84.8447 168.516 71.1675 164.912 58.7758L148.348 2.02271H133.09L163.627 102.842H176.313L206.976 2.02271H195.027L178.463 58.7758Z" fill="black"></path>
    <path d="M244.423 56.0376H282.146V45.5215H244.423V12.5402H285.475V2.02417H230.155V102.844H286.339V92.3276H244.423V56.0376Z" fill="black"></path>
    <path d="M351.128 53.572L346.955 53.4245V52.5604H350.98C367.692 52.5604 378.061 43.6249 378.061 27.777C378.061 11.6552 367.249 2.00317 348.388 2.00317H313.974V102.844H328.241V58.1873H343.225C355.764 58.1873 360.211 63.5191 363.393 83.3921C364.678 91.021 365.416 97.9334 366.997 102.844H382.844C380.674 97.0904 379.957 94.0557 377.808 81.9591C372.729 55.0261 364.952 54.3096 351.128 53.572ZM328.22 47.8187V12.5403H345.353C356.733 12.5403 363.077 18.2936 363.077 29.8213C363.077 41.3489 357.028 47.8187 345.353 47.8187H328.22Z" fill="black"></path>
    <path d="M465.931 2.02417H451.664V102.844H465.931V2.02417Z" fill="black"></path>
    <path d="M540.804 48.1126L525.251 41.9168C516.611 38.3131 511.722 34.2879 511.722 25.2049C511.722 15.5528 518.339 10.9376 528.855 11.0851C539.519 11.0851 547 15.9743 548.012 31.1057L561.689 27.2069C560.825 8.64046 547.148 0 529.129 0C509.973 0 497.159 9.20947 497.159 26.6379C497.159 41.8957 506.095 49.8196 518.044 54.5824L534.461 61.1998C542.954 64.5084 547.422 69.4188 547.422 77.7642C547.422 88.5753 539.94 93.7596 528.834 93.7596C514.714 93.7596 508.097 84.9716 507.38 69.7138L493.408 73.739C493.83 93.4645 507.085 104.845 528.687 104.845C549.276 104.845 561.963 94.6236 561.963 76.0361C561.984 62.2324 554.334 53.5709 540.804 48.1126Z" fill="black"></path>
    <path d="M606.26 2.02271H591.992V102.842H646.301V91.4621H606.26V2.02271Z" fill="black"></path>
    <path d="M698.643 2.02271L666.821 102.842H679.213L687.853 74.1811H721.277L729.918 102.842H745.049L713.227 2.02271H698.643ZM690.867 63.9601L699.803 34.1399C702.395 25.7945 703.259 19.7462 703.828 11.9487H704.692C704.987 19.0086 706.567 25.921 709.16 34.1399L718.095 63.9601H690.867Z" fill="black"></path>
    <path d="M828.147 70.1348C828.147 77.3423 828.442 83.0956 830.022 93.0426H829.158C826.988 82.5265 823.826 75.3191 821.234 69.4183L789.686 2.02271H771.246V102.842H782.774V34.8565C782.774 27.6491 782.479 21.8958 780.898 11.9487H781.762C783.785 22.1697 787.094 29.7986 789.686 35.573L821.234 102.842H839.674V2.02271H828.147V70.1348Z" fill="black"></path>
    <path d="M903.9 2.02417H876.524V102.844H903.9C933.72 102.844 946.238 82.9706 946.238 52.4339C946.238 22.0448 933.72 2.02417 903.9 2.02417ZM902.614 92.3276H890.813V12.5402H902.614C924.932 12.5402 931.128 28.2406 931.128 52.4339C931.128 76.6272 924.932 92.3276 902.614 92.3276Z" fill="black"></path>
</svg>
      </a>

      <ul >

           {/* ---------------------------------Menu list for WOMEN --------------------------*/}
        <li >
          <a className='menu-bar-hover' href="#">WOMEN</a>
          <div className='womenContainer' >
             <div className="womenMenu">
              <ul className='womenSubMenu'>
                <li>
                  <p>NEW IN</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                     <Link className='list' to="/details">View all</Link>
                    </li>
                    <li> <a className='list' href="#">Clothing</a></li>
                    <li><a className='list'href="#">Shoes</a></li>
                    <li><a className='list'href="#">Bags & Accessories</a></li>
                    <li><a className='list' href="#">Bestsellers</a></li>
                    <li><a className='list'href="#">SALE</a></li>
                  </ul>
                </div>
                </li>
                <li>
                  <p>TRENDING</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a className='list' href="#">Barbiecore</a></li>
                    <li> <a className='list' href="#">BBQ & Garden Party Outfits</a></li>
                    <li><a className='list' href="#">Holiday Nights</a></li>
                    <li><a className='list' href="#">Linen</a></li>
                  </ul>
                </div>
                </li>
              </ul>

              <ul className='womenSubMenu'>
                <li >
                  <p>CLOTHING</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                      <a className='list' href="#">All Womenswear</a>
                    </li>
                    <li> <a className='list' href="#">Blazers</a></li>
                    <li><a className='list' href="#">Shoes</a></li>
                    <li><a className='list' href="#">Coats & Jackets</a></li>
                    <li><a  className='list'href="#">Co-ord Sets</a></li>
                    <li><a  className='list' href="#">Dresses</a></li>
                    <li><a className='list' href="#">Hoodies & Sweats</a></li>
                    <li><a className='list' href="#">Jeans</a></li>
                    <li><a className='list' href="#">Jumpers & Cardigans</a></li>
                    <li><a className='list' href="#">Jumpsuits & Playsuits</a></li>
                    <li><a className='list' href="#">Leggings & Joggers</a></li>
                    <li><a  className='list'href="#">Nightwear & Slippers</a></li>
                    <li><a className='list'href="">Shorts</a></li>
                    <li><a className='list' href="">Skirts</a></li>
                    <li><a className='list' href="">Suits & Tailoring</a></li>
                    <li><a className='list' href="">Swimwear & Beachwear</a></li>
                    <li><a className='list' href="">T-shirts & Vests</a></li>
                    <li><a className='list' href="">Tops</a></li>
                    <li><a className='list' href="">Trousers</a></li>
                    <li><a className='list' href="">Underwear</a></li>
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>SHOES & BOOTS</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                      <a className='list' href="#">View all</a>
                    </li>
                    <li> <a className='list' href="#">View All Shoes & Boots</a></li>
                    <li><a className='list' href="#">Boots</a></li>
                    <li><a  className='list' href="#">Heels</a></li>
                    <li><a className='list' href="#">Sandals</a></li>
                    <li><a className='list' href="#">Shoes</a></li>
                    <li><a className='list' href="#">Sliders</a></li>
                    <li><a className='list' href="#">Trainers</a></li>
                    
                  </ul>
                </div>
                </li>
                <li>
                  <p>BAGS & ACCESSORIES</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                      <a className='list' href="#">Barbiecore</a>
                    </li>
                    <li> <a className='list' href="#">Accessories</a></li>
                    <li><a  className='list'href="#">Bags, Purses & Luggage</a></li>
                    <li><a className='list' href="#">Beauty</a></li>
                    <li><a className='list' href="#">Jewellery</a></li>
                    <li><a  className='list'  href="#">Fragrance</a></li>
                    <li><a  className='list'href="#">Sunglasses</a></li>
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>SHOP BY FIT</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a  className='list' href="#">Plus</a></li>
                    <li> <a className='list' href="#">Petite</a></li>
                    <li><a className='list' href="#">Maternity</a></li>  
                  </ul>
                </div>
                </li>
                <li>
                  <p>COLLECTIONS & EDITS</p>
                  <div className="womenSubList">
                  <ul>
                    <li> <a className='list' href="#">Activewear</a></li>
                    <li><a className='list' href="#">Bridesmaid Outfits</a></li>
                    <li><a  className='list' href="#">Going Out</a></li>
                    <li><a className='list' href="#">Holiday Shop</a></li>
                    <li><a className='list' href="#">Gifts</a></li>
                    <li><a className='list' href="#">Modest Clothing</a></li>
                    <li><a  className='list'href="#">Occasionwear</a></li>
                    <li><a className='list'href="#">The Kind Society</a></li>
                    <li><a className='list'href="#">Twinning</a></li>
                    <li><a className='list'href="#">Wedding Guest Dresses</a></li>
                    <li><a className='list'href="#">Workwear</a></li>
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubImage'>
                <li>
                  <a href="">
                     <div className="womenimage">
                       <img src="https://images.riverisland.com/image/upload/f_auto,q_auto/0_20230213_ww_2_megamenu_desktop_416x776_DNT.jpg" alt="" />
                       <button>NEW ARRIVALS</button>
                     </div> 
                  </a>
                
                </li>
               
              </ul>  
              <ul className='womenSubMenu'>
                <li>
                
                </li>
                <li>
                 
                </li>
              </ul>
             </div>
          </div>
          </li>



             {/* ---------------------------------Menu list for MEN --------------------------*/}
        <li className='menu-bar-list'>

          <a className='menu-bar-hover'  href="#">MEN</a>
          <div className='womenContainer' >
             <div className="womenMenu" style={{ margin: 'auto 9%'}}>
              <ul className='womenSubMenu'>
                <li>
                  <p>NEW IN</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                     <a className='list' href="">View all</a>
                    </li>
                    <li> <a className='list' href="#">Clothing</a></li>
                    <li><a className='list'href="#">Shoes & Accessories</a></li>
                    <li><a className='list' href="#">Bestsellers</a></li>
                   
                  </ul>
                </div>
                </li>
                <li>
                  <p>TRENDING</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a className='list' href="#">Holiday Shop</a></li>
                    <li> <a className='list' href="#">Summer Graphicsp</a></li>
                    <li><a className='list' href="#">Matching Sets</a></li>
                    <li><a className='list' href="#">Summer Jackets</a></li>
                  </ul>
                </div>
                </li>
                <li >
                  <p>CLOTHING</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                      <a className='list' href="#">All Menswear</a>
                    </li>
                    <li> <a className='list' href="#">Blazers</a></li>
                    <li><a className='list' href="#">Cargo Trousers</a></li>
                    <li><a className='list' href="#">Coats & Jackets</a></li>
                    <li><a  className='list'href="#">Essentials from £8</a></li>
                    <li><a  className='list' href="#">Hoodies & Sweatshirts</a></li>
                    <li><a className='list' href="#">Jeans</a></li>
                    <li><a className='list' href="">Joggers</a></li>
                    
                  </ul>
                </div>
                </li>
              </ul>

              <ul className='womenSubMenu'>
                <li >
                <p style={{border:'none'}} >  </p>
                  <div className="womenSubList">
                  <ul>
                  
                    <li><a className='list' href="#">Jumpers & Cardigans</a></li>
                    <li><a className='list' href="#">Matching Sets</a></li>
                    <li><a className='list' href="#">Polo Shirts</a></li>
                    <li><a className='list' href="">Shirts</a></li>
                    <li><a className='list' href="">Shorts</a></li>
                    <li><a className='list' href="">Suits</a></li>
                    <li><a className='list' href="">Swim Shorts</a></li>
                    <li><a className='list' href="">Tops</a></li>
                    <li><a className='list' href="">T-shirts & Vests</a></li>
                    <li><a className='list' href="">Tracksuits</a></li>
                    <li><a className='list' href="">Trousers</a></li>
                    <li><a className='list' href="">Underwear & Socks</a></li>
                  </ul>
                </div>
                </li>
                <li >
                <p > SHOP BY FIT</p>
                  <div className="womenSubList">
                  <ul>
                  
                    <li><a className='list' href="#">Big & Tall</a></li>
                    <li><a className='list' href="#">Muscle Fit</a></li>
                    <li><a className='list' href="#">Skinny Fit</a></li>
                    <li><a className='list' href="">Slim Fit</a></li>
                    <li><a className='list' href="">Regular Fit</a></li>
                    <li><a className='list' href="">Oversized Fit</a></li>
                    
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>SHOES & BOOTS</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                      <a className='list' href="#">View all</a>
                    </li>
                    <li> <a className='list' href="#">View All Shoes & Boots</a></li>
                    <li><a className='list' href="#">Boots</a></li>
                    <li><a  className='list' href="#">Heels</a></li>
                    <li><a className='list' href="#">Sandals</a></li>
                    <li><a className='list' href="#">Shoes</a></li>
                    <li><a className='list' href="#">Sliders</a></li>
                    <li><a className='list' href="#">Trainers</a></li>
                    
                  </ul>
                </div>
                </li>
                <li>
                  <p>ACCESSORIES</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                      <a className='list' href="#">Barbiecore</a>
                    </li>
                    <li> <a className='list' href="#">Accessories</a></li>
                    <li><a  className='list'href="#">Bags, Purses & Luggage</a></li>
                    <li><a className='list' href="#">Beauty</a></li>
                    <li><a className='list' href="#">Jewellery</a></li>
                    <li><a  className='list'  href="#">Fragrance</a></li>
                    <li><a  className='list'href="#">Sunglasses</a></li>
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>COLLECTIONS</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a  className='list' href="#">RI Studio</a></li>
                    <li> <a className='list' href="#">The Kind Society</a></li>
                  </ul>
                </div>
                </li>
                <li>
                  <p>EDITS</p>
                  <div className="womenSubList">
                  <ul>
                    <li> <a className='list' href="#">Gifts</a></li>
                    <li><a className='list' href="#">Going Out</a></li>
                    <li><a  className='list' href="#">Holiday Shop</a></li>
                    <li><a className='list' href="#">Multipacks</a></li>
                    <li><a  className='list'href="#">Occasionwear</a></li>
                    <li><a className='list' href="#">Prom Suits</a></li>
                    <li><a className='list'href="#">Races</a></li>
                    <li><a className='list'href="#">Smartwear</a></li>
                    <li><a className='list'href="#">Teen Boys</a></li>
                    <li><a className='list'href="#">Varsity</a></li>
                    <li><a className='list' href="">Wedding Suits</a></li>
                    <li><a className='list' href="">Workwear</a></li>
                  </ul>
                </div>
                </li>
                <li>
                  <p>OFFERS & MULTIBUYS</p>
                  <div className="womenSubList">
                  <ul>
                    <li> <a className='list' href="#">Jeans & Chinos: 2 For £50</a></li>
                    <li><a className='list' href="#">T-shirts: 2 For £15 / 3 for £23 / 5 for £39</a></li>
                    <li><a  className='list' href="#">Shirts: 2 for £35</a></li>
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubImage'>
                <li>
                  <a href="">
                     <div className="womenimage">
                       <img src="https://images.riverisland.com/image/upload/f_auto,q_auto/0_20230213_mw_1_megamenu_desktop_416x776_DNT.jpg" alt="" />
                       <button>NEW ARRIVALS</button>
                     </div> 
                  </a>
                
                </li>
               
              </ul>  
              <ul className='womenSubMenu'>
                <li>
                
                </li>
                <li>
                 
                </li>
              </ul>
             </div>
          </div>
          </li>


          {/* ---------------------------------Menu list for girsl --------------------------*/}
        <li className='menu-bar-list'>
          <a className='menu-bar-hover'  href="#">GIRLS</a>
          <div className='womenContainer' >
             <div className="womenMenu" style={{margin: '0px 16%'}}>
              <ul className='womenSubMenu'>
                <li>
                  <p>NEW IN</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                     <a className='list' href="">View all</a>
                    </li>
                    <li> <a className='list' href="#">Clothing</a></li>
                    <li><a className='list'href="#">Shoes & Accessories</a></li>
                    <li><a className='list' href="#">Bestsellers</a></li>
                   
                  </ul>
                </div>
                </li>
                <li>
                  <p>SHOP BY AGE</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a className='list' href="#">Baby</a> </li>
                    <li> <a className='list' href="#">6 Mths - 2 Yrs</a></li>
                    <li><a className='list' href="#">3 - 5 Yrs</a></li>
                    <li><a className='list' href="#">5 - 8 Yrs</a></li>
                    <li><a className='list' href="">9 - 12 Yrs</a></li>
                    <li><a className='list' href="">13 - 16 Yrs</a></li>
                    <li><a className='list' href="">All Girlswear</a></li>
                  </ul>
                </div>
                </li>
                <li>
                  <p>TRENDING</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a className='list' href="#">Back To School</a></li>
                    <li> <a className='list' href="#">Holiday Shop</a></li>
                    <li><a className='list' href="#">Barbie</a></li>
                    
                  </ul>
                </div>
                </li>
              </ul>

              <ul className='womenSubMenu'>
                <li >
                <p > GIRLS 5-16 YEARS</p>
                  <div className="womenSubList">
                  <ul>
                  
                    <li><a className='list' href="#">All Older Girls</a></li>
                    <li><a className='list' href="#">Tops & T-shirts</a></li>
                    <li><a className='list' href="#">Accessories & Jewellery</a></li>
                    <li><a className='list' href="">Bags & Purses</a></li>
                    <li><a className='list' href="">Blouses & Shirts</a></li>
                    <li><a className='list' href="">Coats & Jackets</a></li>
                    <li><a className='list' href="">Co-ords</a></li>
                    <li><a className='list' href="">Dresses</a></li>
                    <li><a className='list' href="">Hoodies & Sweatshirts</a></li>
                    <li><a className='list' href="">Jeans</a></li>
                    <li><a className='list' href="">Pyjamas & Underwear</a></li>
                    <li><a className='list' href="">Playsuits & Jumpsuits</a></li>
                    <li><a className='list' href="">Sets & Outfits</a></li>
                    <li><a className='list' href="">Shoes & Boots</a></li>
                    <li><a className='list' href="">Shorts & Skirts</a></li>
                    <li><a className='list' href="">Swimwear & Beachwear</a></li>
                    <li><a className='list' href="">Tights & Socks</a></li>
                    <li><a className='list' href="">Trousers & Leggings</a></li>
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>MINI GIRLS 0-5 <br />YEARS</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                      <a className='list' href="#">All Mini Girls</a>
                    </li>
                    <li> <a className='list' href="#">Tops & T-shirts</a></li>
                    <li><a className='list' href="#">Accessories</a></li>
                    <li><a  className='list' href="#">Babygrows / All in Ones</a></li>
                    <li><a className='list' href="#">Coats & Jackets</a></li>
                    <li><a className='list' href="#">Dresses</a></li>
                    <li><a className='list' href="#">Hoodies & Sweatshirts</a></li>
                    <li><a className='list' href="#">Jeans</a></li>
                    <li><a className='list' href="#">Pyjamas & Underwear</a></li>
                    <li><a className='list' href="#">Playsuits & Jumpsuits</a></li>
                    <li><a className='list' href="#">Sets & Outfits</a></li>
                    <li><a className='list' href="#">Shoes & Boots</a></li>
                    <li><a className='list' href="#">Shorts & Skirts</a></li>
                    <li><a className='list' href="#">Swimwear & Beachwear</a></li>
                    <li><a className='list' href="#">Tights & Socks</a></li>
                    <li><a className='list' href="#">Trousers & Leggings</a></li>
                    
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>COLLECTIONS</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a  className='list' href="#">Back to School</a></li>
                    <li> <a className='list' href="#">Barbie</a></li>
                    <li> <a className='list' href="#">Brands</a></li>
                    <li> <a className='list' href="#">Essentials from £6</a></li>
                    <li> <a className='list' href="#">BBQ and Garden Party</a></li>
                    <li> <a className='list' href="#">Holiday Shop</a></li>
                    <li> <a className='list' href="#">Occasionwear</a></li>
                    <li> <a className='list' href="#">Partywear</a></li>
                    <li> <a className='list' href="#">Pastels</a></li>
                    <li> <a className='list' href="#">Spring Blues</a></li>
                    <li> <a className='list' href="#">The Kind Society</a></li>
                    <li> <a className='list' href="#">Utility</a></li>
                    <li> <a className='list' href="#">Twinning</a></li>
                  
                  </ul>
                </div>
                </li>
                <li>
                  <p>OFFERS</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a  className='list' href="#">Multipacks</a></li>
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubImage'>
                <li>
                  <a href="">
                     <div className="womenimage">
                       <img src="https://images.riverisland.com/image/upload/f_auto,q_auto/0_20230213_gw_megamenu_desktop_416x776_DNT.jpg" alt="" />
                       <button>ALL GIRLSWEAR</button>
                     </div> 
                  </a>
                
                </li>
               
              </ul>  
              <ul className='womenSubMenu'>
                <li>
                
                </li>
                <li>
                 
                </li>
              </ul>
             </div>
          </div>
          </li>


            {/* ---------------------------------Menu list for BOYS --------------------------*/}
        <li className='menu-bar-list'>
          <a className='menu-bar-hover'  href="#">BOYS</a>
          <div className='womenContainer' >
             <div className="womenMenu" style={{margin: '0px 15.8%'}}>
              <ul className='womenSubMenu'>
                <li>
                  <p>NEW IN</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                     <a className='list' href="">View all</a>
                    </li>
                    <li> <a className='list' href="#">Clothing</a></li>
                    <li><a className='list'href="#">Shoes & Accessories</a></li>
                    <li><a className='list' href="#">Bestsellers</a></li>
                   
                  </ul>
                </div>
                </li>
                <li>
                  <p>SHOP BY AGE</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a className='list' href="#">Baby</a> </li>
                    <li> <a className='list' href="#">6 Mths - 2 Yrs</a></li>
                    <li><a className='list' href="#">3 - 5 Yrs</a></li>
                    <li><a className='list' href="#">5 - 8 Yrs</a></li>
                    <li><a className='list' href="">9 - 12 Yrs</a></li>
                    <li><a className='list' href="">13 - 16 Yrs</a></li>
                    <li><a className='list' href="">All Girlswear</a></li>
                  </ul>
                </div>
                </li>
                <li>
                  <p>TRENDING</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a className='list' href="#">Back To School</a></li>
                    <li> <a className='list' href="#">Holiday Shop</a></li>
                    <li><a className='list' href="#">Barbie</a></li>
                    
                  </ul>
                </div>
                </li>
              </ul>

              <ul className='womenSubMenu'>
                <li >
                <p > BOYS 5-16 YEARS</p>
                  <div className="womenSubList">
                  <ul>
                  
                    <li><a className='list' href="#">All Older Girls</a></li>
                    <li><a className='list' href="#">Tops & T-shirts</a></li>
                    <li><a className='list' href="#">Accessories & Jewellery</a></li>
                    <li><a className='list' href="">Bags & Purses</a></li>
                    <li><a className='list' href="">Blouses & Shirts</a></li>
                    <li><a className='list' href="">Coats & Jackets</a></li>
                    <li><a className='list' href="">Co-ords</a></li>
                    <li><a className='list' href="">Dresses</a></li>
                    <li><a className='list' href="">Hoodies & Sweatshirts</a></li>
                    <li><a className='list' href="">Jeans</a></li>
                    <li><a className='list' href="">Pyjamas & Underwear</a></li>
                    <li><a className='list' href="">Playsuits & Jumpsuits</a></li>
                    <li><a className='list' href="">Sets & Outfits</a></li>
                    <li><a className='list' href="">Shoes & Boots</a></li>
                    <li><a className='list' href="">Shorts & Skirts</a></li>
                    <li><a className='list' href="">Swimwear & Beachwear</a></li>
                    <li><a className='list' href="">Tights & Socks</a></li>
                    <li><a className='list' href="">Trousers & Leggings</a></li>
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>MINI BOYS 0-5 <br />YEARS</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                      <a className='list' href="#">All Mini Girls</a>
                    </li>
                    <li> <a className='list' href="#">Tops & T-shirts</a></li>
                    <li><a className='list' href="#">Accessories</a></li>
                    <li><a  className='list' href="#">Babygrows / All in Ones</a></li>
                    <li><a className='list' href="#">Coats & Jackets</a></li>
                    <li><a className='list' href="#">Dresses</a></li>
                    <li><a className='list' href="#">Hoodies & Sweatshirts</a></li>
                    <li><a className='list' href="#">Jeans</a></li>
                    <li><a className='list' href="#">Pyjamas & Underwear</a></li>
                    <li><a className='list' href="#">Playsuits & Jumpsuits</a></li>
                    <li><a className='list' href="#">Sets & Outfits</a></li>
                    <li><a className='list' href="#">Shoes & Boots</a></li>
                    <li><a className='list' href="#">Shorts & Skirts</a></li>
                    <li><a className='list' href="#">Swimwear & Beachwear</a></li>
                    <li><a className='list' href="#">Tights & Socks</a></li>
                    <li><a className='list' href="#">Trousers & Leggings</a></li>
                    
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>COLLECTIONS</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a  className='list' href="#">Back to School</a></li>
                    <li> <a className='list' href="#">Barbie</a></li>
                    <li> <a className='list' href="#">Brands</a></li>
                    <li> <a className='list' href="#">Essentials from £6</a></li>
                    <li> <a className='list' href="#">BBQ and Garden Party</a></li>
                    <li> <a className='list' href="#">Holiday Shop</a></li>
                    <li> <a className='list' href="#">Occasionwear</a></li>
                    <li> <a className='list' href="#">Partywear</a></li>
                    <li> <a className='list' href="#">Pastels</a></li>
                    <li> <a className='list' href="#">Spring Blues</a></li>
                    <li> <a className='list' href="#">The Kind Society</a></li>
                    <li> <a className='list' href="#">Utility</a></li>
                    <li> <a className='list' href="#">Twinning</a></li>
                  
                  </ul>
                </div>
                </li>
                <li>
                  <p>OFFERS</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a  className='list' href="#">Multipacks</a></li>
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubImage'>
                <li>
                  <a href="">
                     <div className="womenimage">
                       <img src="https://images.riverisland.com/image/upload/f_auto,q_auto/0_20230213_bw_megamenu_desktop_416x776_DNT_%21.jpg" alt="" />
                       <button>ALL BOYSWEAR</button>
                     </div> 
                  </a>
                
                </li>
               
              </ul>  
              <ul className='womenSubMenu'>
                <li>
                
                </li>
                <li>
                 
                </li>
              </ul>
             </div>
          </div>
          </li>

            {/* ---------------------------------Menu list for holiday shops --------------------------*/}
        <li className='menu-bar-list '>
          <a className='menu-bar-hover'  href="#">HOLIDAY SHOP</a>
          <div className='womenContainer' >
             <div className="womenMenu" style={{margin: '0px 11%'}}>
              <ul className='womenSubMenu'>
                <li>
                  <p>WOMEN</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                     <a className='list' href="">Shop All</a>
                    </li>
                    <li> <a className='list' href="#">Swimwear & Beachwear</a></li>
                    <li><a className='list'href="#">Sandals</a></li>
                    <li><a className='list' href="#">Dresses</a></li>
                    <li><a className='list' href="#">Sunglasses</a></li>
                    <li><a className='list' href="#">Travel Bags</a></li>
                    <li><a className='list' href="#">Playsuits & Jumpsuits</a></li>
                    <li><a className='list' href="#">Holiday Shop Guide</a></li>
                   
                  </ul>
                </div>
                </li>
              </ul>

              <ul className='womenSubMenu'>
                <li >
                <p > MEN</p>
                  <div className="womenSubList">
                  <ul>
                  
                    <li><a className='list' href="#">Shop All</a></li>
                    <li><a className='list' href="#">Swim Shorts</a></li>
                    <li><a className='list' href="#">T-shirts & Vests</a></li>
                    <li><a className='list' href="">Shorts</a></li>
                    <li><a className='list' href="">Shirts</a></li>
                    <li><a className='list' href="">Sunglasses</a></li>
                    <li><a className='list' href="">Travel Bags</a></li>
                    <li><a className='list' href="">Sandals & Sliders</a></li>
                    
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>GIRLS</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                      <a className='list' href="#">Shop All</a>
                    </li>
                    <li> <a className='list' href="#">Tops & T-shirts</a></li>
                    <li><a className='list' href="#">Sets & Outfits</a></li>
                    <li><a  className='list' href="#">Dresses</a></li>
                    <li><a className='list' href="#">Swimwear & Beachwear</a></li>
                    <li><a className='list' href="#">Shorts</a></li>
                    <li><a className='list' href="#">Sandals</a></li>  
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>BOYS</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a  className='list' href="#">Shop All</a></li>
                    <li> <a className='list' href="#">Tops & T-shirts</a></li>
                    <li> <a className='list' href="#">Sets & Outfits</a></li>
                    <li> <a className='list' href="#">Shorts & Swim Shorts</a></li>
                    <li> <a className='list' href="#">Shirts</a></li>
                    <li> <a className='list' href="#">Sandals</a></li>
                  </ul>
                </div>
                </li>
              </ul>
             
              <ul className='womenSubMenu'>
                <li>
                
                </li>
                <li>
                 
                </li>
              </ul>
             </div>
          </div>
          </li>

           {/* ---------------------------------Menu list for holiday SALE --------------------------*/}
        <li className='menu-bar-list'>
          <a  className='menu-bar-hover' href="#">SALE</a>
          <div className='womenContainer' >
             <div className="womenMenu" style={{margin: '0px 13%'}}>
              <ul className='womenSubMenu'>
                <li>
                  <p>WOMEN</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                     <a className='list' href="">Shop All</a>
                    </li>
                    <li> <a className='list' href="#">Swimwear & Beachwear</a></li>
                    <li><a className='list'href="#">Sandals</a></li>
                    <li><a className='list' href="#">Dresses</a></li>
                    <li><a className='list' href="#">Sunglasses</a></li>
                    <li><a className='list' href="#">Travel Bags</a></li>
                    <li><a className='list' href="#">Playsuits & Jumpsuits</a></li>
                    <li><a className='list' href="#">Holiday Shop Guide</a></li>
                   
                  </ul>
                </div>
                </li>
              </ul>

              <ul className='womenSubMenu'>
                <li >
                <p > MEN</p>
                  <div className="womenSubList">
                  <ul>
                  
                    <li><a className='list' href="#">Shop All</a></li>
                    <li><a className='list' href="#">Swim Shorts</a></li>
                    <li><a className='list' href="#">T-shirts & Vests</a></li>
                    <li><a className='list' href="">Shorts</a></li>
                    <li><a className='list' href="">Shirts</a></li>
                    <li><a className='list' href="">Sunglasses</a></li>
                    <li><a className='list' href="">Travel Bags</a></li>
                    <li><a className='list' href="">Sandals & Sliders</a></li>
                    
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>GIRLS</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                      <a className='list' href="#">Shop All</a>
                    </li>
                    <li> <a className='list' href="#">Tops & T-shirts</a></li>
                    <li><a className='list' href="#">Sets & Outfits</a></li>
                    <li><a  className='list' href="#">Dresses</a></li>
                    <li><a className='list' href="#">Swimwear & Beachwear</a></li>
                    <li><a className='list' href="#">Shorts</a></li>
                    <li><a className='list' href="#">Sandals</a></li>  
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>BOYS</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a  className='list' href="#">Shop All</a></li>
                    <li> <a className='list' href="#">Tops & T-shirts</a></li>
                    <li> <a className='list' href="#">Sets & Outfits</a></li>
                    <li> <a className='list' href="#">Shorts & Swim Shorts</a></li>
                    <li> <a className='list' href="#">Shirts</a></li>
                    <li> <a className='list' href="#">Sandals</a></li>
                  </ul>
                </div>
                </li>
              </ul>
             
              
              <ul className='womenSubMenu' style={{width:'150px'}}>
                   
                   </ul>
            
             </div>
          </div>
          </li>

       {/* ---------------------------------Menu list for holiday BEAUTY --------------------------*/}
        <li className='menu-bar-list active'>
          <a className='menu-bar-hover'  href="#">BEAUTY</a>
          <div className='womenContainer' >
             <div className="womenMenu" style={{margin: '0px 14%'}}>
              <ul className='womenSubMenu'>
                <li>
                  <p>NEW IN</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                     <a className='list' href="">View all</a>
                    </li>
                  </ul>
                </div>
                </li>
                <li >
                <p > BRANDS</p>
                  <div className="womenSubList">
                  <ul>
                  
                    <li><a className='list' href="#">Ardell</a></li>
                    <li><a className='list' href="#">Bondi Sands</a></li>
                    <li><a className='list' href="#">Revolution</a></li>
                    <li><a className='list' href="">Easilocks</a></li>
                    <li><a className='list' href="">ICONIC London</a></li>
                    <li><a className='list' href="">Wet Brush</a></li>
                    <li><a className='list' href="">A-Z of Brands</a></li>
 
                  </ul>
                </div>
                </li>
              </ul>

              <ul className='womenSubMenu'>
                <li >
                <p > MAKEUP</p>
                  <div className="womenSubList">
                  <ul>
                  
                    <li><a className='list' href="#">View all Makeup</a></li>
                    <li><a className='list' href="#">Brows</a></li>
                    <li><a className='list' href="#">Complexion</a></li>
                    <li><a className='list' href="">Eyes</a></li>
                    <li><a className='list' href="">Lips</a></li>
                    <li><a className='list' href="">Makeup Tools & Accessories</a></li>
                    
 
                  </ul>
                </div>
                </li>
                <li >
                <p > FRAGRANCE</p>
                  <div className="womenSubList">
                  <ul>
                  
                    <li><a className='list' href="#">View all Fragrance</a></li>
                    <li><a className='list' href="#">Candles & Diffusers</a></li>
                    <li><a className='list' href="#">Mens Fragrance</a></li>
                    <li><a className='list' href="">Womens Fragrance</a></li>
                  </ul>
                </div>
                </li>
                <li >
                <p > SUNCARE & TANNING</p>
                  <div className="womenSubList">
                  <ul>
                  
                    <li><a className='list' href="#">View all Suncare & Tanning</a></li>
                    <li><a className='list' href="#">SPF Skincare</a></li>
                    <li><a className='list' href="#">Tanning & Applicators</a></li>
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>SKINCARE</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                      <a className='list' href="#">View all Skincare</a>
                    </li>
                    <li> <a className='list' href="#">Cleansers, Toners & Mists</a></li>
                    <li><a className='list' href="#">Moisturisers & Serums</a></li>
                    <li><a  className='list' href="#">Eyes & Lips</a></li>
                    <li><a className='list' href="#">Masks & Exfoliators</a></li>
                    <li><a className='list' href="#">Skincare Tools</a></li>
                  </ul>
                </div>
                </li>
                <li>
                  <p>BATH & BODY</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                      <a className='list' href="#">View all Bath & Body</a>
                    </li>
                    <li> <a className='list' href="#">Body Moisturisers</a></li>
                    <li><a  className='list' href="#">Body Wash</a></li>
                    <li><a className='list' href="#">Scrubs & Exfoliators</a></li>
                  </ul>
                </div>
                </li>
              </ul>
              <ul className='womenSubMenu'>
                <li>
                  <p>HAIR</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a  className='list' href="#">View all Hair</a></li>
                    <li> <a className='list' href="#">Hair Care Products</a></li>
                    <li> <a className='list' href="#">Hair Extensions</a></li>
                    <li> <a className='list' href="#">Hair Styling Tools</a></li>
                    <li> <a className='list' href="#">Hair Treatments</a></li>
                    <li> <a className='list' href="#">Electricals</a></li>
                  </ul>
                </div>
                </li>
                <li>
                  <p>EDITS</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a  className='list' href="#">Vegan</a></li>
                    <li> <a className='list' href="#">Beauty Steals</a></li>
                    <li> <a className='list' href="#">Travel Size Essentials</a></li>
                    <li> <a className='list' href="#">Holiday Essentials</a></li>
                  </ul>
                </div>
                </li>
                <li>
                  <p>GIFTS</p>
                  <div className="womenSubList">
                  <ul>
                    <li><a  className='list' href="#">View all Gifts</a></li>
                    <li> <a className='list' href="#">Electrical Gifts</a></li>
                    <li> <a className='list' href="#">Gift Sets</a></li>
                  </ul>
                </div>
                </li>
              </ul>
             
              <ul className='womenSubMenu' style={{width:'150px'}}>
                   
              </ul>
             </div>
          </div>
          </li>





        <li className='menu-bar-list'>
          <a  className='menu-bar-hover' href="#">EDITORIAL</a>
          <div className='womenContainer' >
             <div className="womenMenu"style={{margin: '0px 15%'}}>
              <ul className='womenSubMenu'>
                <li>
                  <p>EDITORIAL</p>
                  <div className="womenSubList">
                  <ul>
                    <li>
                     <a className='list' href="">The Feed</a>
                    </li>
                    <li><a className='list' href="">Fashion</a></li>
                    <li><a className='list' href="">Lifestyle</a></li>
                    <li><a className='list' href="">Culture</a></li>
                    <li><a className='list' href="">#ImWearingRI</a></li>
                  </ul>
                </div>
                </li>
              </ul>

              <ul className='womenSubImage'>
                <li>
                  <a href="">
                     <div className="womenimage">
                       <img src="https://images.riverisland.com/image/upload/f_auto,q_auto/0_20230213_ww_2_megamenu_desktop_416x776_DNT.jpg" alt="" />
                       <button>NEW ARRIVALS</button>
                     </div> 
                  </a>
                
                </li>
               
              </ul>  
              <ul className='womenSubImage'>
                <li>
                  <a href="">
                     <div className="womenimage">
                       <img src="https://images.riverisland.com/image/upload/f_auto,q_auto/0_070723_WK27_megamenu_ww_desktop_DNT.jpg" alt="" />
                       <button>Jean Fit Guide</button>
                     </div> 
                  </a>
                
                </li>
               
              </ul>  
              <ul className='womenSubImage'>
                <li>
                  <a href="">
                     <div className="womenimage">
                       <img src="https://images.riverisland.com/is/image/RiverIsland/c20220301_imwearinRI_wk10_megamenu_DNT" alt="" />
                       <button>#ImWearingRI</button>
                     </div> 
                  </a>
                
                </li>
               
              </ul>  
             
              <ul className='womenSubMenu' style={{width:'150px'}}>
                   
              </ul>
             </div>
          </div>
          </li>
      </ul>
     
    <div className="containerSearch">
       <div className="search">
        <button type="button" className='search-dropdown' onClick={()=>setToggle(!toggle)}><BsSearch />
        <span>SEARCH</span>
        </button>
      </div>
    </div>
     
        </div>
      </section>

      {
        toggle && (
           <div className="popup-container" style={{display:'flex'}}>
                <div className="popup-div">
               <input className='search-input' type="text" placeholder='Search River Island.com' />
               <button className='search-btn' >Search</button>
               <button className='cancel' onClick={()=>setToggle(!toggle)}>Cancel</button>
             </div> 
             </div> 
        )
      }
     
    </div>
  )
}

export default NavbarBottom