import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddChauffeur from '../components/AddChauffeur';
import { Dashbord } from '../components/Dashbord';
import TableChauffeur from '../components/TableChauffeur';

export const Chauffeurs = () => {
  const[data,seteData]=useState([]);
  const getv = async () =>{
    await axios.get('http://localhost:5000/chauffeurApi')
    .then((res)=>seteData(res.data.chauffeur))
  }
  useEffect(  () => {
   getv();
  }, []);
  return (
    <div className="h-full md:ml-64">
        <AddChauffeur seteData={seteData} getv={getv}/>
        <TableChauffeur getv={getv} data={data}/>      
      </div>
  );
};
