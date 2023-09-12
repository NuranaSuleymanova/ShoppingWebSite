import React from 'react'
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {FaPinterestP} from 'react-icons/fa';
import {AiFillYoutube} from 'react-icons/ai'
const FooterBottom = () => {
  return (
    <div className='footer-bottom-container'>
          <div className="footer-bottom">
            <div className="footer-bottom-divider">
              <h2 className='footer-title'>HOW CAN WE HELP?</h2>
              <div className="footer-divider-div">
                   <ul className="footer-divider-ul">
                          <li className="footer-divider-li"><a href="#">Delivery</a></li>
                          <li className="footer-divider-li"><a href="#">Returns</a></li>
                          <li className="footer-divider-li"><a href="#">Gift Cards</a></li>
                          <li className="footer-divider-li"><a href="#">Size Guides</a></li>
                          <li className="footer-divider-li"><a href="#">Women's Plus Size Guide</a></li>
                          <li className="footer-divider-li"><a href="#">Product Recalls</a></li>
                   </ul>
                   <ul className="footer-divider-ul">
                          <li className="footer-divider-li"><a href="#">FAQ and Contact Us</a></li>
                          <li className="footer-divider-li"><a href="#">My Account</a></li>
                          <li className="footer-divider-li"><a href="#">Find A Store</a></li>
                          <li className="footer-divider-li"><a href="#">Student Discount</a></li>
                          <li className="footer-divider-li"><a href="#">Blue Light Card Discount</a></li>
                          <li className="footer-divider-li"><a href="#">Sitemap</a></li>
                   </ul>
              </div>
            </div>
            <div className="footer-bottom-divider">
              <h2 className='footer-title'>USEFUL INFO</h2>
              <div className="footer-divider-div">
                   <ul className="footer-divider-ul">
                          <li className="footer-divider-li"><a href="#">Terms & Conditions</a></li>
                          <li className="footer-divider-li"><a href="#">Promotion Terms & Conditions</a></li>
                          <li className="footer-divider-li"><a href="#">Privacy Notice & Cookies</a></li>
                          <li className="footer-divider-li"><a href="#">Security</a></li>
                          <li className="footer-divider-li"><a href="#">Accessibility</a></li>
                          <li className="footer-divider-li"><a href="#">User Generated Content Policy</a></li>
                   </ul>
              </div>
            </div>
            <div className="footer-bottom-divider">
              <h2 className='footer-title'>INSIDE RIVER ISLAND</h2>
              <div className="footer-divider-div">
                   <ul className="footer-divider-ul">
                          <li className="footer-divider-li"><a href="#">About Us</a></li>
                          <li className="footer-divider-li"><a href="#">Sustainability</a></li>
                          <li className="footer-divider-li"><a href="#">Careers At River Island</a></li>
                          <li className="footer-divider-li"><a href="#">Partner with Us</a></li>
                          <li className="footer-divider-li"><a href="#">Charity Donations</a></li>
                          <li className="footer-divider-li"><a href="#">Gender Pay Gap Report</a></li>
                          <li className="footer-divider-li"><a href="#">Westgate Pension Benefits</a></li>
                          <li className="footer-divider-li"><a href="#">Modern Slavery Statement</a></li>
                          <li className="footer-divider-li"><a href="#">Corporate Governance Statement</a></li>
                   </ul>
              </div>
            </div>
          </div>
          <div className="footer-social">
              <a className='social' href="#"><FaFacebookF size={20}/></a>
              <a className='social' href="#"> <BsTwitter size={20}/></a>
              <a className='social' href="#"><BsInstagram size={20}/></a>
              <a className='social' href="#"><FaPinterestP size={20}/></a>
              <a className='social' href="#"><AiFillYoutube size={20}/></a> 
            </div>

            <div className="copyright">
              <div className="content-wrap">
              <p className="copyright__paragraph">© 2023 River Island</p>
              </div>
            </div>
    </div>
  )
}

export default FooterBottom