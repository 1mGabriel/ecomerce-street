import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./NikeProdutos.css";
import Form from "./Form";
import Footer from "./Footer";

const AdidasProdutos = () => {
    const [produtos, setProdutos] = useState([])


    const getProtudos = async()=>{

        try{
            const response = await axios.get("https://database-street.vercel.app/adidas-produtos")
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
        <h1 className="title pirate-one">PRODUTOS ADIDAS</h1>
        {/*  */}
        <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.10582 30.0832L1.15582 28.4428L8.01166 24.4845L11.2464 30.0832H2.10582ZM24.0445 30.0832H14.9023L9.17224 20.1588L16.0281 16.2005L24.0445 30.0832ZM36.8426 30.0832H27.7004L17.1871 11.8748L24.0429 7.9165L36.8426 30.0832Z"
                fill="#F8F8F8"
              />
            </svg>
      </div>
      <div className="products container">
        {produtos.map((produto) =>(
                  <div className="product-page" key={produto.id}>
                 <img src={produto.image1} alt="imagem" />
                  <Link to={`/produto/${produto.id}`}><h3 className='title questrial'>{produto.name}</h3></Link> 
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

export default AdidasProdutos
