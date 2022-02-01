import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import AddLivraison from '../components/AddLivraison';
import TableLivraison from '../components/TableLivraison';

const Livraison = () => {
  const[data,seteData]=useState([]);
  const [cookies, setCookie] = useCookies();
  const getL = async () =>{
    await axios.get('http://localhost:5000/livraisonApi',{
      headers: {
        'Authorization': `Basic ${cookies.token}` 
      }
    })
    .then((res)=>seteData(res.data.livraison))
  }
  useEffect(  () => {
   getL();
  }, []);
  return (
    <div className="h-full md:ml-64">
        <AddLivraison getL={getL}/>
        <TableLivraison getL={getL} data={data}/>
  </div>
  );
};

export default Livraison;
