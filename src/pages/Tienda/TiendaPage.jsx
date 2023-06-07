import React from "react";
import { Link } from "react-router-dom";
import ItemListContainer from '../../component/ItemListContainer/ItemListContainer';

const TiendaPage =( )=>{
    return (
        <>
          <div>
               
               <Link to="/">
                  <button>Volver al HOME</button>
               </Link>
               <Link to="/contacto">
                  <button>Ir a contacto</button>
               </Link>
               <ItemListContainer/>
          </div>
        </>
    );
};

export default TiendaPage;