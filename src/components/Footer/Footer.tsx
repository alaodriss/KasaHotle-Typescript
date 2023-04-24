import React from 'react'
import './Footer.scss'
import logo_footer from '../../assets/Logo_footer.png'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo_footer} alt="Logo _footer"/>
        <p className='titre_footer'> © 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer