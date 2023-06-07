import React from 'react';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"

//import "./ItemListContainer.css"

const estilos = {
  itemList:{
    textAlign: "center",
    fontSize: "45px",
    color: "crimson",
    marginTop: "45px",
  },
}

const ItemListContainer = () => {
  return (<>
     <div className='itemContenedor'>
      <ItemList />
     </div>
  </>
  ) 
};

export default ItemListContainer;