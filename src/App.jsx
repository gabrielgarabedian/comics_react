import  NavBar  from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
//import lista from './lista.json';
//import Contador from './component/Contador/Contador';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import homePage from './pages/homePage';
import contactoPage from './pages/contactoPage';
///import DatosPrueba from './component/PruebaCont/PruebaCont';


const App = () => {

  /*const getDatos = ()=> {
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
        console.log(datosCard);
    }catch (error){
        console.log(error);
    }
  }

  baseDatos();*/

  return(
    <>
    <Router> 
    
      <NavBar/>
      <div className='app1'>
      <Routes>
        <Route path="/" element= {<homePage/>}/>
        <Route path="/contactoPage" element= {<contactoPage/>}/>


      </Routes>
    
        
        <ItemListContainer greeting="Bienvenidos a la tienda de comics más importante del multiverso" />
        </div>
    
    </Router>
    </>
  )
}

export default App;
