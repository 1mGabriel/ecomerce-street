import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <form>
        <div className="form container">
            <h1 className='title questrial'>Assine nossa Newsletter</h1>
            <input  className='questrial' type="text" placeholder='Nome' />
            <input className='questrial'  type="text" placeholder='E-mail' />
            <div className="action">
                <input type="checkbox" name="accept" id="accept" />
                <p className='questrial'>Aceito receber novidades e promoções por e-mail</p>
            </div>
            <input className='questrial' type="submit" id='submit' value="ASSINAR" />
        </div>
      
    </form>
  )
}

export default Form
