import React from "react";
import { Link } from "react-router-dom";

const contactoPage =( )=>{
    return (
        <>
          <div>
               <h1>Muestra los contactos</h1>
               <Link to="/">
                  <button>Volver al HOME</button>
               </Link>
          </div>
        </>
    );
};

export default contactoPage;