import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import "./Produto.css"
import Navbar from './Navbar'
import Form from './Form'
import Footer from './Footer'
    // swipper
    import "swiper/css";
    // import "swiper/css/navigation";
    // import "swiper/css/pagination";
    import "swiper/css/scrollbar";
    register()
// Swipers
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide} from "swiper/react";
import { useContext } from 'react'
import { StateContext } from '../Context/Contexto'
import Carrousel from './Carrousel'
import { Link } from 'react-router-dom'

const Produto = () => {

    const { setProdutosOnCart, setIdOnCart, setImageOnCart, setNomeOnCart, setPrecoOnCart, addProductOnCart,showNotification} = useContext(StateContext)



const {id} = useParams()
const [data, setData] = useState([])


const getData = async()=>{
   try{
    const response = await axios.get(`https://database-street.vercel.app/all-produtos/${id}`)
    const data = response.data
    setData(data)
    setIdOnCart(data.id)
    setImageOnCart(data.image1)
    setNomeOnCart(data.name)
    setPrecoOnCart(data.price)


}catch(error){
    console.log(error)
}


}
useEffect(()=>{
    getData()

},[])

const images = [
    {
        id:"1",
        image: data.image1
    },
    {
        id:"1",
        image: data.image2
    }
]


  return (
    <>
    <Navbar/>
    <div className='produto container'>
      <h2 className='title questrial'>{data.name}</h2>
    <div className="produto-content">
<div className="slider">
<Swiper
      autoplay
      slidesPerView={1}
      pagination={{clickable:true}}>
        {images.map((item)=>(
            <SwiperSlide key={item.id}>
  <img src={item.image} alt="produto" />
            </SwiperSlide>
        ))}
      </Swiper>
</div>
        <div className="contents">
            <p>{data.slogan}</p>
            <h3>R$ {data.price}</h3>
            <h2>R$ {data.pix} via PIX</h2>
            <h3>{data.parcelas}</h3>
            <button onClick={(e)=>addProductOnCart(e)}>ADICIONAR A SACOLA</button>
        </div>
    </div>
    </div>
    <Carrousel title='Mais produtos' url='https://database-street.vercel.app/all-produtos' page="produto"  produto="Produtos"/>
    <Form/>
    <Footer/>
    <div className={!showNotification ? "notification-container hide" :  "notification-container show"}>
  <h2 className='title questrial'>Produto adiconado</h2>
</div>
    </>
  )
}

export default Produto
