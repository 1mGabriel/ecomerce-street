
import './App.css'
import About from './Components/About'
import Banner from './Components/Banner'
import Brands from './Components/Brands'
import Carrousel from './Components/Carrousel'
import Collection from './Components/Collection'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import Novidades from './Components/Novidades'
import Slider from './Components/Slider'
import { useContext } from 'react'
import { StateContext } from './Context/Contexto'

function App() {

  const { setProdutosOnCart, setIdOnCart, setImageOnCart, setNomeOnCart, setPrecoOnCart, addProductOnCart} = useContext(StateContext)


  return (
<div>
<Navbar/>

<Slider/>
<Brands/>
<Novidades/>
<Carrousel title="Sneakers" url="https://database-street.vercel.app/sneakers-produtos" page="produto" produto="Tênis"/>
<Carrousel title="Bonés" url="https://database-street.vercel.app/bones-produtos" page="produto"  produto="Bonés" />
<Banner/>
<Collection/>
<Carrousel title="Produtos Street" url="https://database-street.vercel.app/street-produtos" page="produto"  produto="Produtos" />
<About/>
<Form/>
<Footer/>

</div>
  )
}

export default App
