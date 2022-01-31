import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddResponsable from '../components/AddResponsable';
import { Dashbord } from '../components/Dashbord';
import { TableResponsable } from '../components/TableResponsable';
export const Responsables = () => {
  const[data,seteData]=useState([]);
  const getv = async () =>{
    await axios.get('http://localhost:5000/responsableLivraisonApi')
    .then((res)=>seteData(res.data.responsablesLivraison))
    
  }
  useEffect(  () => {
   getv();
  }, []);
    return (
        
        
        <div className="h-full md:ml-64">

            <AddResponsable seteData={seteData} getv={getv}/>
            <TableResponsable data={data} getv={getv}/>
          </div>
         
    );
};
