import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { AiFillFolderAdd } from 'react-icons/ai';

const AddLivraison = ({getL}) => {
  const [cookies, setCookie] = useCookies();
  const [villeD, setVilleD] = useState('');
  const [villeA, setVilleA] = useState('');
  const [poid, setPoid] = useState('');
  const [zone, setZone] = useState('');
  const add = () =>{

    axios.post('http://localhost:5000/livraisonApi',{
      "ville_d":villeD,
      "ville_a":villeA,
      "poid":poid,
      "zone": zone,
    },{
      headers: {
        'Authorization': `Basic ${cookies.token}` 
      }
    })
    getL();
    
  }
    return (
        <div className=" w-full grid grid-cols-1 gap-4 place-content-center h-48">
              <div className="flex flex-wrap  ml-4">
                <div className="w-full md:w-1/5 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Zone
                  </label>
                  <select onChange={(e)=>setZone(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option >Zone</option>
                  <option value={'Maroc'} >Maroc</option>
                  <option value={'Europe'} >Europe</option>
                  <option value={'Amerique'} >Amérique</option>
                  <option value={'Asie'} >Asie</option>
                  <option value={'Australie'} >Australie </option>
                </select>
                </div>
                <div className="w-full md:w-1/5 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Ville Depart
                  </label>
                  <input
                  onChange={(e)=>setVilleD(e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Depart"
                    required
                  />
                </div>
                <div className="w-full md:w-1/5 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Ville Arriver
                  </label>
                  <input
                  onChange={(e)=>setVilleA(e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Arriver"
                    required
                  />
                </div>
                <div className="w-full md:w-1/5 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Poid
                  </label>
                  <input
                  onChange={(e)=>setPoid(e.target.value)}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="number"
                  placeholder="Poid"
                  required
                />
                </div>
                <div className="w-full md:w-1/5 px-3 mt-6">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded " onClick={()=>add()}>
                  <AiFillFolderAdd/>
                  </button>
                </div>
              </div>
            </div>
          );
};

export default AddLivraison;
