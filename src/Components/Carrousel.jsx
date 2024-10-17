import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Carrousel.css'
import{Link, useNavigate} from 'react-router-dom'
const Carrousel = ({title, url, page,produto}) => {
  
    const [product, setProduct] = useState([])

  const navigate = useNavigate()
    const getData = async(url)=>{
      try{
        const response = await axios.get(url)
        const data = response.data;
        setProduct(data)
      }catch(error){
        console.log(error)
      }
    }

    useEffect(()=>{
        getData(url)
    }, [])

    return (
    <div className='carousel-wraper'>
      <div className="carrousel-content container">
        <h2 className='title questrial'>{title}</h2>
        <div className="carrousel-row">
            {product.map((item)=>(
                <div className="product-card" key={item.id}>
                    <Link to={`/${page}/${item.id}`} onClick={(e)=>navigate(`/${page}/${item.id}`)}><img src={item.image1} alt="imagem" /></Link>
                    <h3 className='title questrial'>{item.name}</h3>
                    <p className='price_2'>R$ {item.price}</p>
                    <h2 className='pix'>R$ {item.pix} Via PIX</h2>
                    <p className='parcelas'>{item.parcelas}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Carrousel
