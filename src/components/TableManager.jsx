import React from 'react';
import RowManager from './RowManager';


const TableManager = ({data,getM}) => {
  
  return (
    <div>
        <table className="w-full w-full">
                 <thead >
                   <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                     <th className="px-4 py-3 w-1/4">Nom</th>
                     <th className="px-4 py-3 w-1/4">Prenom</th>
                     <th className="px-4 py-3 w-1/4">Email</th>
                     <th className="px-4 py-3 w-1/4">Action</th>
                   </tr>
                 </thead>
                 <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                 {data.map((row, index) => (
                  
          <RowManager getM={getM} key={row._id} id={row._id} nom={row.nom_manager} prenom ={row.prenom_manager} email={row.email_manager}/>
       ))}
                    
                 </tbody>
               </table>
 
              
   </div>
   );
};

export default TableManager;
