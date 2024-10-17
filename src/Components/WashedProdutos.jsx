import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./NikeProdutos.css";
import Footer from "./Footer";
import Form from "./Form";
const WashedProdutos = () => {
    const [produtos, setProdutos] = useState([])


    const getProtudos = async()=>{

        try{
            const response = await axios.get("https://database-street-bs4k4ahqy-gabriels-projects-a6d7a34d.vercel.app/washed-produtos")
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
        <h1 className="title pirate-one">WASHED</h1>
      </div>
      <div className="products container">
        {produtos.map((produto) =>(
                  <div className="product-page" key={produto.id}>
                 <Link to={`/produto/${produto.id}`}> <img src={produto.image1} alt="imagem" /></Link>
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
export default WashedProdutos
