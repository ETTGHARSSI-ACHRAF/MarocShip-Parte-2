import React from 'react';
import AddVehicule from '../components/AddVehicule';
import TableVehicule from '../components/TableVehicule';

const Vehicules = () => {
  return (
    <div className="h-full md:ml-64">
    <AddVehicule/>
    <TableVehicule/>
  </div>
  );
};

export default Vehicules;
