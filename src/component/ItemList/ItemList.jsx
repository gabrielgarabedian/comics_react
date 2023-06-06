import  React, {useState, useEffect} from "react";
import axios from "axios";
import Item from '../Item/Item';
import "./itemList.css"



const ItemList = () => {
  
 const [personajes, setPersonajes] = useState ([])
 
 useEffect(()=>{
  const api = async ()=> {
    try{
      const data = await axios.get ('https://thronesapi.com/api/v2/Characters')
      setTimeout(() => {
        //console.log(data.data)
        setPersonajes(data.data)
      },2000);
    }catch(e){
      console.log(e)
    }
   }
  api();

 },[])

 return (<>
   <div className="itemList"> 
    <Item data={personajes}/>
   </div>
 </>)

}

export default ItemList;