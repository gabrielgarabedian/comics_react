import { Link } from "react-router-dom";


const homePage =( )=>{
    return (
        <>
          <div>
              <h1>ESTE ES EL HOMEMMMMMMMMM</h1>
              <Link to="/">
                <button>Volver al HOME</button>
              </Link>
          </div>
        </>
    );
};

export default homePage;