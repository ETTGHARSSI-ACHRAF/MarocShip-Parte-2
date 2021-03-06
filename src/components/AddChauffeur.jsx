import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  FaUserPlus} from 'react-icons/fa';
const AddChauffeur = ({getv}) => {
    const [type , setType] = useState('Type')
    const[data,seteData]=useState([]);
    const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
    const getd = async () =>{
    await axios.get('http://localhost:5000/vehiculeApi')
     .then((res)=>seteData(res.data.vehicules))
     .catch(err=>(console.log(err)))
   }
   useEffect( () => {
    getd();
   }, []);

   const add = () =>{
    axios.post('http://localhost:5000/chauffeurApi',{
      "nom_chauffeur": nom,
      "prenom_chauffeur": prenom,
      "email_chauffeur": email,
        "id_vehicule": type
    
    })
    getv();
    
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
        <div className="w-full md:w-1/5 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Vehicule
          </label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value={'type'} >Type</option>
          {data.map((row, index) => (
          <option key={index} value={row._id}>{row.nom_vehicule}</option>
          ))} 
        </select>
        </div>
        <div className="w-full md:w-1/5 px-3 mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded " onClick={(e)=>add()}>
           <FaUserPlus/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddChauffeur;
