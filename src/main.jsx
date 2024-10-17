import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,Router} from 'react-router-dom'
import NikeProdutos from './Components/NikeProdutos.jsx'
import AdidasProdutos from './Components/AdidasProdutos.jsx'
import JordanProdutos from './Components/JordanProdutos.jsx'
import PumaProdutos from './Components/PumaProdutos.jsx'
import Produto from './Components/Produto.jsx'
import MemorieProdutos from './Components/MemorieProdutos.jsx'
import WashedProdutos from './Components/WashedProdutos.jsx'
import HoodProdutos from './Components/HoodProdutos.jsx'
import AllProdutos from './Components/AllProdutos.jsx'
import Contexto, {StateContext} from './Context/Contexto.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path:'/nike/produtos',
    element: <NikeProdutos/>
  }
  ,
  {
    path:'/adidas/produtos',
    element: <AdidasProdutos/>
  },
  {
    path:"/jordan/produtos",
    element: <JordanProdutos/>
  }
  ,
  {
    path:"/puma/produtos",
    element:<PumaProdutos/>
  }
  ,{
    path:"/produto/:id",
    element:<Produto/>
  }
  ,
  {
    path:"/produtos/memories",
    element:<MemorieProdutos/>
  }
  ,
  {
    path:"/produtos/washed",
    element:<WashedProdutos/>
  }
  ,
  {
    path:"/produtos/hood",
    element:<HoodProdutos/>
  }
  ,
  {
    path:"/produtos/all",
    element:<AllProdutos/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contexto>
    <RouterProvider router={router}/>
    </Contexto>
  </StrictMode>,
)
