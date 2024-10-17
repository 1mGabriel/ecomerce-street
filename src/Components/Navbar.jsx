import React, { useState, useContext } from 'react'
import { FiAlignLeft } from "react-icons/fi";
import { BiBasket } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

import logo from "../assets/logo.png"
//CSS
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {StateContext} from "../Context/Contexto"


const Navbar = () => {

  const {produtosOnCart,priceToPay, setPriceToPay,setProdutosOnCart} = useContext(StateContext)

const[showMenu, setShowMenu] = useState(false)
const[showCart, setShowCart] = useState(false)


const renderMenu = (e)=>{
  if(showMenu == false){
    setShowMenu(true)
  }
}
const hideMenu = (e)=>{
  if(showMenu == true){
    setShowMenu(false)
  }
}
const renderCart = (e)=>{
  if(showCart == false){
    setShowCart(true)
  }
}
const hideCart = (e)=>{
  if(showCart == true){
    setShowCart(false)
  }
}

const deleteItemOnCart = (index)=>{
  setProdutosOnCart((prevs) => prevs.filter((produto) => produto.id !== index))
}



const total = produtosOnCart.reduce((acc, produto)=> acc + produto.preco, 0)

  return (
    <div className='nav-bar wrapper' >
     <div className="nav-content container">
     <FiAlignLeft onClick={(e)=>renderMenu(e)} />
    <Link to="/"><img src={logo} alt="Logo" /></Link>
    <BiBasket onClick={(e)=>renderCart(e)} />
   
     </div>
     
     {/* Menu */}
     <div className={!showMenu ? "menu-section hide" : "menu-section show"}>
      <div className="close-button">
        <span onClick={(e)=>hideMenu(e)}>X</span>
      </div>
      <div className="options">
        <ul>
          <li><Link>NOVIDADES</Link></li>
          <li><Link to={'/produtos/all'} >PRODUTOS</Link></li>
          <li><Link to={'/nike/produtos'}>NIKE</Link></li>
          <li><Link to={'/adidas/produtos'}>ADIDAS</Link></li>
          <li><Link to={'/jordan/produtos'}>JORDAN</Link></li>
          <li><Link to={'/puma/produtos'}>PUMA</Link></li>
        </ul>
      </div>
     </div>
     {/* CARRINHO */}
     <div className={!showCart ? "cart-section hide" : "cart-section show"}>
      <div className="close-button">
        <span onClick={(e)=>hideCart(e)}>X</span>
      </div>
      <div className="products-cart">
<div className="produto-cart-section">
{produtosOnCart.map((produto, index)=>(
        <div key={index} className="produto-cart">
          <img src={produto.image} alt="" />
          <h2 className='title questrial'>{produto.nome}</h2>
          <div className='produto-cart-end'>
            <p>R${produto.preco}</p>
            <MdDeleteOutline onClick={(e)=>deleteItemOnCart(produto.id)} />
          </div>
        </div>
        ))}
</div>
<div className="total-section">
  <div className="total-container container">
        <div>
        <h2 className='title questrial'>Total</h2>
        <p>R$ {total.toFixed(2)}</p>
        </div>
        <button>CONCLUIR PEDIDO</button>
  </div>

</div>

      </div>
     </div>
    </div>
  )
}

export default Navbar
