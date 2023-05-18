import React from 'react';
//import "./ItemListContainer.css"

const estilos = {
  itemList:{
    textAlign: "center",
    fontSize: "45px",
    color: "crimson",
    marginTop: "45px",
  },
}

const ItemListContainer = ({greeting}) => {
  return <div className='itemList' style={estilos.itemList}>{greeting}</div>;
};

export default ItemListContainer;