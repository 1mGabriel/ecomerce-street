import React from 'react'
import { useState, useEffect } from 'react'
import Banner_1 from "../assets/banner-1.png"
import BannerDk from "../assets/banner-dk.png"
import "./Banner.css"
const Banner = () => {

  const [windowD, setWindowD] = useState(false)

  const VerifyWindow = ()=>{
      const windowSize = window.innerWidth
      if(windowSize > 428){
          setWindowD(true)
      }
  }
useEffect(()=>{
  VerifyWindow()
},[])


  return (
    <div className='banner'>
      <img  src={!windowD ? Banner_1 : BannerDk} alt="" />
    </div>
  )
}

export default Banner
