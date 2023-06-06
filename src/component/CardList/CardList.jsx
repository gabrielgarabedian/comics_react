import  React, {useState, useEffect} from "react";
import axios from "axios";

import "./cardList.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const CardList = () => {
    /*const getDatos = async () => {
      const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await respuesta.json();
      return data;
    };

    const [pokemon, setPokemon] = useState([]);
    console.log(pokemon)

    useEffect(()=>{
       axios("https://pokeapi.co/api/v2").then((respuesta)=> setNames(respuesta.data));
       //getDatos().then((pokemon)=> setPokemon(pokemon));
    },[]);

  return <div>axios pokemon</div>*/
  
  /*const [users, setUsers]= useState([]);
  console.log (users);
  
  useEffect(()=>{
    axios("https://api.github.com/users").then((res)=> console.log(res.data));    
 },[]);

 return (<div>
    <h1>tarjeta git</h1>
    {users.map((user)=>{
        return (
            <div key={user.id}>
                <Card data={user}/>
            </div>
        );
    })}
 </div>
 );*/


 const [personajes, setPersonajes] = useState ([])

 

 useEffect(()=>{
  const api = async ()=> {
    try{
      const data = await axios.get ('https://thronesapi.com/api/v2/Characters')
      /*console.log(data.data)*/
      setPersonajes(data.data)
    }catch(e){
      console.log(e)
    }
   }
  api();

 },[])

 return (<>
   <div>
    <ItemDetailContainer data={personajes}/>
   </div>
 </>)

}

export default CardList


