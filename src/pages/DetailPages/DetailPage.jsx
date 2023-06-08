import React, {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Item from '../../component/Item/Item';
import "../DetailPages/detail.css"
import { Link } from 'react-router-dom';

const DetailPage = () => {
    let {id}= useParams();
    const [person, setPerson] =useState({});

    useEffect(()=>{
        axios.get(`https://thronesapi.com/api/v2/Characters/${id}`).then((res)=>setPerson(res.data))
      },[id]);
  return (
    <div className='itemDetalle'>
        <Link to="/tienda">
          <button className='boton'>Volver</button>
         </Link>
        {person && <Item data={person} />}
    </div>
  )
}

export default DetailPage
