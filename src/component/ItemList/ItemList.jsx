import  React, {useState, useEffect} from "react";
import axios from "axios";
import Item from '../Item/Item';
import "./itemList.css"
import { Link } from "react-router-dom";


const ItemList = () => {
  
  const [personajes, setPersonajes] = useState ([])
  
  useEffect(()=>{
    axios.get('https://thronesapi.com/api/v2/Characters').then((res)=>setPersonajes(res.data))
  },[]);

  return(
    
      <div className="itemList">
        {personajes.map((person)=>{
          return(
            <div key={person.id}>
              <Link to={`/detail/${person.id}`}>
                <Item data={person}/>
              </Link>
            </div>
          )
        })}
      </div>
    
  );
};

export default ItemList;


/*const ItemList = () => {
  
 const [personajes, setPersonajes] = useState ([])
 
 useEffect(()=>{
  const api = async ()=> {
    try{
      const data = await axios.get ('https://thronesapi.com/api/v2/Characters')
      setTimeout(() => {
        console.log(data.data)
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

    <Link to={`/detail/${per.id}`}>
    
      <Item data={personajes}/>
    
    </Link>
   </div>
 </>)

}*/
