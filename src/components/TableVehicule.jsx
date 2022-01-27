import React from 'react';
import {  FaSave, FaUserEdit, FaUserTimes } from 'react-icons/fa';
import { AiFillCloseCircle } from "react-icons/ai";

const TableVehicule = () => {

      
  let i=0;
  const update = (i) =>{
  document.getElementById(`labelNom${i}`).style.display="none";
  document.getElementById(`inputNom${i}`).style.display="block";
  document.getElementById(`labelPrenom${i}`).style.display="none";
  document.getElementById(`inputPrenom${i}`).style.display="block";
  document.getElementById(`labelEmail${i}`).style.display="none";
  document.getElementById(`inputEmail${i}`).style.display="block";
  document.getElementById(`btnSave${i}`).style.display="inline-block";
  document.getElementById(`btneCansel${i}`).style.display="inline-block";
  document.getElementById(`btnDelete${i}`).style.display="none";
  document.getElementById(`btneUpdate${i}`).style.display="none";
  }
  const cansel = (i) =>{
    document.getElementById(`labelNom${i}`).style.display="inline-block";
  document.getElementById(`inputNom${i}`).style.display="none";
  document.getElementById(`labelPrenom${i}`).style.display="inline-block";
  document.getElementById(`inputPrenom${i}`).style.display="none";
  document.getElementById(`labelEmail${i}`).style.display="inline-block";
  document.getElementById(`inputEmail${i}`).style.display="none";
  document.getElementById(`btnSave${i}`).style.display="none";
  document.getElementById(`btneCansel${i}`).style.display="none";
  document.getElementById(`btnDelete${i}`).style.display="inline-block";
  document.getElementById(`btneUpdate${i}`).style.display="inline-block";
  }
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
                  <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3 text-sm w-1/4">
                      <label id={`labelNom${i}`}>Achraf</label>
                      <input
                      id={`inputNom${i}`}
                        className="hidden appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        required
                      />
                    </td>
                    <td className="px-4 py-3 text-sm w-1/4">
                    <label id={`labelPrenom${i}`}>Ettgharssi</label>
                    <input
                      id={`inputPrenom${i}`}
                        className="hidden appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        required
                      />
                      </td>
                    <td className="px-4 py-3 text-sm w-1/4">
                    <label id={`labelEmail${i}`}>achraf.ettgharssi@gmail.com</label>
                    <input
                    id={`inputEmail${i}`}
                        className="hidden appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        required
                      />
                      </td>
                    <td className="px-4 py-3 text-sm w-1/4">
                    <button type="submit" className="bg-red-600  text-white  py-2 px-4 rounded " id={`btnDelete${i}`}><FaUserTimes/></button>
                    <button type="submit" className=" bg-blue-600  text-white  py-2 px-4 rounded ml-1" id={`btneUpdate${i}`} onClick={(e)=>update(i)}> <FaUserEdit/></button>
                    <button type="submit" className=" hidden bg-blue-600  text-white  py-2 px-4 rounded " id={`btnSave${i}`}><FaSave/></button>
                    <button type="submit" className="hidden bg-yellow-400  text-white  py-2 px-4 rounded ml-1" id={`btneCansel${i}`} onClick={(e)=>cansel(i)}> <AiFillCloseCircle/></button>
                    </td>
                  </tr>
                  
                </tbody>
              </table>

             
  </div>
  );
};

export default TableVehicule;
