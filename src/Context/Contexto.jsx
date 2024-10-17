import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const StateContext = createContext()
const Contexto = ({children}) => {

    const [produtosOnCart, setProdutosOnCart] = useState([])
    const [idOnCart, setIdOnCart] = useState(0)
    const [imageOnCart, setImageOnCart] = useState("")
    const [nomeOnCart, setNomeOnCart] = useState("")
    const [precoOnCart, setPrecoOnCart] = useState("")
    const [priceToPay, setPriceToPay] =useState (0)
    const [showNotification, setShowNotification] = useState(false)
    
    const produtoToCart = {
        id: idOnCart,
        image: imageOnCart,
        nome: nomeOnCart,
        preco: precoOnCart
    }

    // const addProductOnCart = ()=>{
    //     setProdutosOnCart((prevs)=> prevs + produtoToCart)
    //     console.log(produtosOnCart)
    // }
    const addProductOnCart = ()=>{
        setProdutosOnCart([...produtosOnCart,  produtoToCart])
        setIdOnCart(idOnCart + 1)
        setShowNotification(true)
        setTimeout(()=>{
            setShowNotification(false)
        }, 2000)
       
        console.log(produtosOnCart)

    }



  return (
    <div>
        <StateContext.Provider
        value={{ setProdutosOnCart, setIdOnCart, setImageOnCart, setNomeOnCart, setPrecoOnCart, addProductOnCart, produtosOnCart, priceToPay, setPriceToPay, showNotification, setShowNotification}}
        >
            {children}
        </StateContext.Provider>
      
    </div>
  )
}

export default Contexto
