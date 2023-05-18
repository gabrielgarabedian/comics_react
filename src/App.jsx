import  NavBar  from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';

const App = () => {
  return(
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos a la tienda de comics más importante del multiverso"/>
    </>
  )
}

export default App;
