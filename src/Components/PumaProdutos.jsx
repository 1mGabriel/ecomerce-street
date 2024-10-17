import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./NikeProdutos.css";
import Form from "./Form";
import Footer from "./Footer";

const PumaProdutos = () => {
    const [produtos, setProdutos] = useState([])


    const getProtudos = async()=>{

        try{
            const response = await axios.get("https://database-street.vercel.app/puma-produtos")
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
        <h1 className="title pirate-one">PRODUTOS PUMA</h1>
        {/*  */}
        <svg
              width="44"
              height="30"
              viewBox="0 0 44 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.7164 0.417318C42.9519 -0.443364 41.6154 0.24615 41.0269 0.546501C36.8395 2.72001 36.2217 6.54705 34.7623 8.74478C33.6147 10.5049 31.7337 11.7967 30.0323 11.8968C28.7746 11.976 27.4106 11.7612 26.0576 11.2429C22.7448 9.98171 20.9609 8.34916 20.5264 8.06172C19.6336 7.46425 12.7713 1.57835 7.17964 1.33775C7.17964 1.33775 6.49764 0.126656 6.32714 0.105664C5.92013 0.0652943 5.50213 0.833933 5.19779 0.914672C4.92279 1.00026 4.44062 0.0879012 4.16195 0.128271C3.88145 0.160567 3.60828 1.07454 3.06195 1.54444C2.65861 1.88839 2.17094 1.8674 1.8941 2.29209C1.79877 2.44711 1.83177 2.72001 1.7236 2.9703C1.49077 3.48703 0.71343 3.54193 0.706097 4.0958C0.706097 4.71104 1.3606 4.82892 1.93261 5.25845C2.38728 5.60079 2.41844 5.843 2.94828 6.00287C3.42128 6.14497 4.10695 5.7009 4.71562 5.86077C5.22346 5.99157 5.71113 6.08684 5.8193 6.54382C5.9183 6.95721 5.8193 7.60635 5.19596 7.53369C4.99063 7.50947 4.09962 7.25271 2.99961 7.35606C1.67044 7.4804 0.152426 7.85503 0.00392493 9.14848C-0.0712423 9.87029 0.946265 10.7148 1.93811 10.5469C2.61828 10.4322 2.29744 9.7298 2.66961 9.39069C3.15911 8.9547 5.9183 10.9151 8.48498 10.9151C9.57216 10.9151 10.3752 10.6728 11.1745 9.93811C11.2478 9.89128 11.345 9.7734 11.4587 9.76048C11.5865 9.7886 11.7076 9.83673 11.8162 9.90258C13.8897 11.351 15.4535 14.2625 23.0546 14.2964C24.1216 14.3077 25.3463 14.7469 26.3473 15.5511C27.2273 16.2503 27.748 17.3677 28.2485 18.4981C29.0148 20.1985 30.377 21.8391 32.4505 23.6703C32.5605 23.7801 34.2655 24.9298 34.3938 25.0154C34.4158 25.0315 34.5478 25.285 34.491 25.4272C34.4543 26.5414 34.2655 29.7386 36.9935 29.8727C37.6645 29.905 37.4977 29.4996 37.4977 29.2106C37.4885 28.66 37.3785 28.1045 37.7049 27.5312C38.1687 26.7593 36.7405 26.3863 36.7717 24.6957C36.8065 23.4297 35.5892 23.6444 34.9677 22.6772C34.6193 22.1233 34.293 21.8181 34.326 21.1496C34.4598 17.3064 33.3782 14.7744 32.8502 14.1624C32.434 13.6876 32.0747 13.5116 32.4707 13.2904C34.744 11.9744 35.2665 10.7487 35.2665 10.7487C36.4765 8.26034 37.5692 5.99318 39.0707 4.98394C39.375 4.79016 40.1505 4.27343 40.6327 4.07966C42.0316 3.4951 42.7832 3.14631 43.1774 2.8072C43.8301 2.26302 44.3416 1.10683 43.7164 0.417318Z"
                fill="#F8F8F8"
              />
            </svg>
      </div>
      <div className="products container">
        {produtos.map((produto) =>(
                  <div className="product-page" key={produto.id}>
                 <Link to={`/produto/${produto.id}`}><img src={produto.image1} alt="imagem" /></Link> 
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

export default PumaProdutos