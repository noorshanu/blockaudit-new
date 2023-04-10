import React from 'react'
import './Footer.css'
import styles from "scss/layout/Hero.module.scss";
// import useMediaQuery from "hooks/useMediaQuery";
import { NavLink } from 'react-router-dom'
function Footer() {
  
  return (
    <div className='container-wrapper'>
      <div className='div-block-289'>
        <div className='div-block-290'>
        <div className="text-block-113">Secured by :  BlockAudit🔒</div>
        </div>
        <div className="text-block-114">
        Copyright © 2022 | All Right Reserved
                        </div>
                      
                        <div className="div-block-342">
                            <NavLink  to="/privacy-policy"  className="link-9" >Privacy Policy</NavLink>
                            <NavLink to="/cookies"  className="link-9 _2" >Cookies Policy</NavLink>
                            <NavLink to="/disclaimer" className="link-9 _2" >Disclaimer </NavLink>
                            <NavLink to="/terms-condition" className="link-9 _3" >Terms and Conditions </NavLink>
                        </div>
        </div>
        
        </div>
  )
}

export default Footer