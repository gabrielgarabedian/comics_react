import React from 'react';
import lista from '../../lista.json';

const DatosPrueba =() =>{

    const getDatos = ()=> {
        return new Promise((resolve, reject) => {
            if (lista.length === 0){
                reject (new Error("No hay datos para mostrar"))
            }
            setTimeout(()=>{
                resolve (lista);
            }, 2000);
        })
    };

    async function baseDatos (){
        try{
            const datosCard = await getDatos()
            console.log(datosCard());
        }catch (error){
            console.log(error);
        }
    }

    
    console.log(baseDatos());
    return (
        <>
           
        </>
    )
  
  
}

export default DatosPrueba;