import React from 'react'

const DatosPrueba =() =>{
    const datos = [
      {id: 1, name:"Batman año uno"},
      {id: 2, name:"Flash año uno"},
      {id: 3, name:"Superman el reinado"},
    ];
  
    const getDatos = ()=> {
        return new Promise((resolve, reject) => {
            if (datos.length === 0){
                reject (new Error("No hay datos para mostrar"))
            }
            setTimeout(()=>{
                resolve (datos);
            }, 2000);
        })
    };
    
    getDatos()
    .then((datos)=>  console.log(datos))


    console.log(getDatos())
    
    return <div></div>;
  
  
}

export default DatosPrueba;