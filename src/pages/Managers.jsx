import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useCookies } from 'react-cookie';
import AddManager from '../components/AddManager';
import { Dashbord } from '../components/Dashbord';
import TableManager from '../components/TableManager';

export const Managers = () => {
  const [cookies, setCookie] = useCookies();
  const[data,seteData]=useState([]);
  const getM = () =>{
     axios.get('http://localhost:5000/managerApi',{
      headers: {
        'Authorization': `Basic ${cookies.token}` 
      }
     })
    .then((res)=>seteData(res.data.managers))
    
  }
  useEffect(  () => {
   getM();
  }, []);
  return (
    <div className="h-full md:ml-64">
          <AddManager getM={getM}/>
          <TableManager  getM={getM} data={data}/>
    </div>
  );
};
