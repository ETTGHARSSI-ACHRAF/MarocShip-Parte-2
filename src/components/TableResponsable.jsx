import React from 'react';
import RowResponsable from './RowResponsable';


export const TableResponsable = () => {

  

  return (
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
        <RowResponsable nom="achraf" prenom ="ettgharssi" email="achraf.ettgharssi"/>
        <RowResponsable nom="achraf" prenom ="ettgharssi" email="achraf.ettgharssi"/>
      </tbody>
    </table>
  );
};
