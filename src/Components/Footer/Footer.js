import React from 'react'
import { NavLink} from 'react-router-dom'
// import { animateScroll as scroll} from 'react-scroll'
import ScrollToTop from "react-scroll-to-top";
import './FooterCSS.css'
import imageLogo from '../../image/FullLogoTransparent.png'

const Footer = () => {
    // const toggleHome = () => {
    //     scroll.scrollToTop();
    //   }
  return (
    <div className='footerCont'>
         <div className= 'footerContLinks'>
         <NavLink to='/' smooth={true} duration={500} className='footerNav'>
               <div >TEAMS </div> 
            </NavLink>
            <NavLink to={'/teams/allplayers'} smooth={true} duration={500} className='footerNav'>
               <div  >PLAYERS</div>
            </NavLink>
            <NavLink to={'/teams/allCoaches'} smooth={true} duration={500} className='footerNav'>
               <div >COACHES</div>
            </NavLink>
           <NavLink to={'/teams/Season'} smooth={true} duration={500} className='footerNav' >
               <div >SEASON</div>
           </NavLink>
           <NavLink to={'/teams/News/Regular'} smooth={true} duration={500} className='footerNav' >
               <div >NEWS</div>
           </NavLink>
           <NavLink to={'/teams/About'} smooth={true} duration={500} className='footerNav' >
               <div >About Us</div>
           </NavLink>
         </div>
         <div className='footerContPrivacy'>
             <div className='divLogo'>
                  <img src={imageLogo} alt="1" className='logo'/>
             </div>
             <div className='divLegalMain'>
                 <div className='legal-inner'>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Legal Notices</p>
                    <p>Contact Us</p>
                 </div>
                 <div className='legal-yearLogo'>
                     <p> {new Date().getFullYear()} Sport World</p>
                 </div>
                
             </div>
           
            <ScrollToTop smooth width='20' height='20' top={50} className='scroll'/>
        </div>
    </div>
  )
}

export default Footer