import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddVehicule from '../components/AddVehicule';
import { Dashbord } from '../components/Dashbord';
import TableVehicule from '../components/TableVehicule';

const Vehicules = () => {
  const[data,seteData]=useState([]);
   const getv = async () =>{
   await axios.get('http://localhost:5000/vehiculeApi')
    .then((res)=>seteData(res.data.vehicules))
    .catch(err=>(console.log(err)))
  }
  useEffect( () => {
   getv();
  }, []);
  return (
    <div className="h-full md:ml-64">
    <AddVehicule seteData={seteData} getv={getv}/>
    <TableVehicule getv={getv} data={data}/>
  </div>
  );
};

export default Vehicules;
