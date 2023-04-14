import React from 'react'
import { NavLink} from 'react-router-dom'
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
           <NavLink to={'/teams/News'} smooth={true} duration={500} className='footerNav' >
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
                    <NavLink to={'/teams/TermofUse'}  className='legal-innerAll'> <p>Terms of Use</p> </NavLink>
                    <NavLink to={'/teams/PrivacyPolicy'}  className='legal-innerAll' > <p>Privacy Policy</p> </NavLink>
                    <NavLink to={'/teams/LegalNotices'}  className='legal-innerAll'  >  <p>Legal Notices</p> </NavLink>
                    <NavLink to={'/teams/About'}  className='legal-innerAll'  > <p>Contact Us</p> </NavLink>
                 </div>
                 <div className='legal-yearLogo'>
                     <p> &copy; {new Date().getFullYear()} Sport World. All rights reserved.</p>
                     <p > <a href='https://www.linkedin.com/in/alexander-la-rosa-p%C3%A9rez-2b36a085/' className='bycreator'
                    >&copy;byAlexWeb</a></p>
                 </div>
                
             </div>
           
            <ScrollToTop smooth width='20' height='20' top={50} className='scroll'/>
        </div>
    </div>
  )
}

export default Footer