import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import {  FaUserPlus} from 'react-icons/fa';

const AddManager = ({getM}) => {
  const [cookies, setCookie] = useCookies();
    const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const add = () =>{
    axios.post('http://localhost:5000/managerApi',{
      "nom_manager":nom,
      "prenom_manager":prenom,
      "email_manager":email
    
    },{
      headers: {
        'Authorization': `Basic ${cookies.token}` 
      }
    })
    getM();
  }
  return (
    <div className=" w-full grid grid-cols-1 gap-4 place-content-center h-48">
      <div className="flex flex-wrap  ml-4">
        <div className="w-full md:w-1/5 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Nom
          </label>
          <input
          onChange={(e)=>setNom(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="nom"
            required
          />
        </div>
        <div className="w-full md:w-1/5 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Prenom
          </label>
          <input
          onChange={(e)=>setPrenom(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="prenom"
            required
          />
        </div>
        <div className="w-full md:w-1/5 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input
          onChange={(e)=>setEmail(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="Email"
            placeholder="email"
            required
          />
        </div>
        <div className="w-full md:w-1/5 px-3 mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded " onClick={()=>add()}>
           <FaUserPlus/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddManager;
