import  NavBar  from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import lista from './lista.json'
import Contador from './component/Contador/Contador';

const App = () => {

  const getLista = ()=> {
    return new Promise((resolve, reject) => {
        if (lista.length === 0){
            reject (new Error("No hay datos para mostrar"))
        }
        setTimeout(()=>{
            resolve (lista);
        }, 3000);
    })
  };

  async function fetchingLista (){
    try {
      const listaFetched = await getLista();
      console.log(listaFetched)
    }catch (error){
      console.log(error);
    }
  }

  fetchingLista();

  return(
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos a la tienda de comics más importante del multiverso"/>
    <Contador/>
    </>
  )
}

export default App;
