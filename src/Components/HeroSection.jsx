import React from 'react'
import '../Styles/HeroSection.css'
import home_image from '../images/home_image.png'

export default function Hero() {
  return (
    <>
        <div className='title'>MovieFlix</div>
        <div className='subtitle'>A plataforma para organizar</div>
        <div className='subtitle2'> sua vida de cinéfilo.</div>
        <img src={home_image} alt='MovieFlix'className='home_image'/>
    </>
  )
}
