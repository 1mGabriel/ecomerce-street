import React, { useEffect, useState } from 'react'
import logoMb from "../assets/logo.png"
import logoDk from "../assets/logo-dk.png"
import "./About.css"
const About = () => {

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
    <div className='about container'>
      <img src={!windowD ? logoMb : logoDk} alt="Logo da loja" />
        <p className="paragraph questrial">A maior e mais conceituada rede de lojas de “lifestyle urbano” do país, presente em todas as regiões nas melhores redes de shopping centers.Desenvolvendo estratégias inovadoras que agreguem valor a nossa cadeia de relacionamento para atrair novas parcerias e negócios.</p>
    </div>
  )
}

export default About
