import React from 'react';

import RowVehicule from './RowVehicule';

const TableVehicule = ({data,getv}) => {



  return (<div>
       <table className="w-full w-full">
                <thead >
                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th className="px-4 py-3 w-1/4">Nom</th>
                    <th className="px-4 py-3 w-1/4">Type</th>
                    <th className="px-4 py-3 w-1/4">Matricule</th>
                    <th className="px-4 py-3 w-1/4">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {data?.map((row, index) => (
                  <RowVehicule  getv={getv} key={row._id} id={row._id} nom={row.nom_vehicule} type={row.type_vehicule} matricule={row.matricule}/>
                ))}

                </tbody>
              </table>

             
  </div>
  );
};

export default TableVehicule;
