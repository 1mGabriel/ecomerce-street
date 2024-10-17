import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./NikeProdutos.css";
import Footer from "./Footer";
import Form from "./Form";


const NikeProdutos = () => {
    const [produtos, setProdutos] = useState([])


    const getProtudos = async()=>{

        try{
            const response = await axios.get("https://database-street.vercel.app/nike-produtos")
            const data = response.data
            setProdutos(data)
        }catch(error){
            console.log(error)
        }

    }

    useEffect(()=>{
            getProtudos()
    }, [])

  return (
    <>
    <div className="produtos-wraper">
      <Navbar />
      <div className="banner-brands container">
        <h1 className="title pirate-one">PRODUTOS NIKE</h1>
        {/*  */}
        <svg
          width="38"
          height="20"
          viewBox="0 0 38 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.9996 0.200195L10.1994 17.6442C7.89411 19.0831 5.95822 19.8025 4.39178 19.8025C2.61844 19.8025 1.33225 18.8871 0.533193 17.0562C0.0318045 15.8802 -0.115973 14.3884 0.0898601 12.5809C0.296749 10.7733 0.843527 8.84597 1.73019 6.79886C2.46908 5.1422 3.68139 2.96442 5.36711 0.265528C4.79459 1.59198 4.37513 3.04903 4.12578 4.57753C3.68244 7.36508 4.08144 9.41219 5.32278 10.7189C5.91389 11.3286 6.72667 11.6335 7.76111 11.6335C8.58761 11.6335 9.51861 11.4375 10.5541 11.0455L37.9996 0.200195Z"
            fill="#F8F8F8"
          />
        </svg>
      </div>
      <div className="products container">
        {produtos.map((produto) =>(
                  <div className="product-page" key={produto.id}>
               <Link to={`/produto/${produto.id}`}><img src={produto.image1} alt="imagem" /></Link>
               <Link to={`/produto/${produto.id}`}> <h3 className='title questrial'>{produto.name}</h3></Link>
                  <p className='price_2'>R$ {produto.price}</p>
                  <h2 className='pix'>R$ {produto.pix} Via PIX</h2>
                  <p className='parcelas'>{produto.parcelas}</p>
              </div>
        ))}
      </div>
     
    </div>
  <Form/>
    <Footer/>
    </>
  );
};

export default NikeProdutos;
