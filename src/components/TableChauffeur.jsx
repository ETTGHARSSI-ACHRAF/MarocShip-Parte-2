
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RowChauffeur from './RowChauffeur';


const TableChauffeur = () => {
  const[data,seteData]=useState([]);
  useEffect(async () => {
   await axios.get('http://localhost:5000/chauffeurApi')
    .then((res)=>seteData(res.data.chauffeur))
    
  }, [data]);
  return (
    <table className="w-full w-full">
      <thead >
        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
          <th className="px-4 py-3 w-1/4">Nom</th>
          <th className="px-4 py-3 w-1/4">Prenom</th>
          <th className="px-4 py-3 w-1/4">Email</th>
          <th className="px-4 py-3 w-1/4">Vehicule</th>
          <th className="px-4 py-3 w-1/4">Action</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            
        {data.map((row, index) => (
          <RowChauffeur key={row._id} id={row._id} nom={row.nom_chauffeur} prenom ={row.prenom_chauffeur} email={row.email_chauffeur} type={row.id_vehicule.nom_vehicule}/>   
        ))}
      </tbody>
    </table>
  );
};

export default TableChauffeur;
