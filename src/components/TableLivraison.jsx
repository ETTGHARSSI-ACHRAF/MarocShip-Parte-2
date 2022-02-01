import React from 'react';
import RowLivraison from './RowLivraison';

const TableLivraison = ({getL,data}) => {
    return (
        <table className="w-full w-full">
          <thead >
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th className="px-4 py-3 w-1/8">Zone</th>
              <th className="px-4 py-3 w-1/8">Depart</th>
              <th className="px-4 py-3 w-1/8">Arriver</th>
              <th className="px-4 py-3 w-1/8">POID</th>
              <th className="px-4 py-3 w-1/8">KM</th>
              <th className="px-4 py-3 w-1/8">DATE</th>
              <th className="px-4 py-3 w-1/8">PRIX</th>
              <th className="px-4 py-3 w-1/8">STAUS</th>
              <th className="px-4 py-3 w-1/8">ACTION</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">        
          {data?.map((row, index) => (
          <RowLivraison key={index} data={row}/>
        ))}
          </tbody>
        </table>
      );
};

export default TableLivraison;
