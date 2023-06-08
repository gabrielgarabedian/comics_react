import  NavBar  from './component/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import ContactoPage from './pages/Contacto/ContactoPage';
import TiendaPage from './pages/Tienda/TiendaPage';
import  DetailPage  from './pages/DetailPages/DetailPage';
//import ItemListContainer from './component/ItemListContainer/ItemListContainer';
//import lista from './lista.json';
//import Contador from './component/Contador/Contador';
///import DatosPrueba from './component/PruebaCont/PruebaCont';
import "./App.css";
import Header from './component/Header/Header';
import { Footer } from './component/Footer/footer';


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
      <div className="App">
      <Header/>
      <NavBar/>
      
      <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="/contacto" element= {<ContactoPage/>}/>
        <Route path="/tienda" element= {<TiendaPage/>}/>
        <Route path="/detail/:id" element= {<DetailPage/>}/>
      </Routes>
      
      <Footer/>
      </div>
        
    </Router>
    </>
  )
}

export default App;
