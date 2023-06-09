import React, { useState } from 'react'
import "./contador.css"

const Contador = () => {

    const [numero, setNumero] = useState(0);
    
    const sumar = ()=>{
        if (numero < 5){
            setNumero(numero +1)
        }
    }

    const restar =()=>{
        if (numero > 0){
            setNumero(numero -1)
        }       
    }
    
  return (
    
        <div className='itemContador'>
            <div className='botonera'>
                <button on onClick={restar} className='restar'>-</button>
            </div>
            <div className='botonera'>
                <p className='cantidad'>{numero}</p>
            </div>
            <div className='botonera'>
                <button on onClick={sumar} className='sumar'>+</button>
            </div>
        </div>
    
  )
}

export default Contador
