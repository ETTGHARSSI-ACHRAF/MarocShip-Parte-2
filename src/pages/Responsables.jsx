import React from 'react';
import AddResponsable from '../components/AddResponsable';
import { Dashbord } from '../components/Dashbord';
import { TableResponsable } from '../components/TableResponsable';
export const Responsables = () => {
    return (
        <div className="h-full md:ml-64">

            <AddResponsable/>
            <TableResponsable/>
          </div>
    );
};
