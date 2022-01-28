import React, { useState } from 'react';
import { FaSave, FaUserEdit, FaUserTimes } from 'react-icons/fa';
import { AiFillCloseCircle } from "react-icons/ai";

const RowChauffeur = (props) => {
    const [type , setType] = useState('Type')
    const [show, setShow] = useState(true);
    const [hiden, setHiden] = useState(false);
    const showInput = (e) => {
      setShow(false);
      setHiden(true);
  
    }
    const hidenInput = (e) => {
      setShow(true);
      setHiden(false);
    }
  
    return (
      <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
      <td className="px-2 py-3 text-sm w-1/5">
        {show &&
          <label id={`labelNom`}>{props.nom}</label>
        }
        {hiden &&
          <input
          defaultValue={props.nom}
            id={`inputNom`}
            className ="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            required
          />
        }
      </td>
  
      <td className="px-2 py-3 text-sm w-1/5">
        {show &&
          <label id={`labelPrenom`}>{props.prenom}</label>
        }
        {hiden &&
          <input
          defaultValue={props.prenom}
            id={`inputPrenom`}
            className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            required
          />
        }
      </td>
      <td className="px-2 py-3 text-sm w-1/5">
        {show &&
          <label id={`labelEmail`}>{props.email}</label>
  
        }
        {hiden &&
          <input
          defaultValue={props.email}
            id={`inputEmail`}
            className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            required
          />
        }
      </td>
      
      <td className="px-2 py-3 text-sm w-1/5">
        {show &&
          <label id={`labelEmail`}>{props.type}</label>
  
        }
        {hiden &&
          <select value={type} onChange={(e) => setType(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value={'type'} >Type</option>
          <option value={'voiture'}>voiture</option>
          <option value={'petit camion'}>petit camion</option>
          <option value={'grand camion'}>grand camion</option>
        </select>
        }
      </td>
      <td className="flex pr-8 py-3 text-sm w-1/5">
        {show &&
          <button type="submit" className="bg-red-600  text-white  py-2 px-4 rounded " id={`btnDelete`}><FaUserTimes /></button>
        }
        {show &&
          <button type="submit" className=" bg-blue-600  text-white  py-2 px-4 rounded ml-1" id={`btneUpdate`} onClick={(e) => showInput(e)}> <FaUserEdit /></button>
        }
        {hiden &&
          <button type="submit" className="  bg-blue-600  text-white  py-2 px-4 rounded " id={`btnSave`}><FaSave /></button>
        }
        {hiden &&
          <button type="submit" className=" bg-yellow-400  text-white  py-2 px-4 rounded ml-1" id={`btneCansel`} onClick={(e) => hidenInput(e)}> <AiFillCloseCircle /></button>
        }
      </td>
    </tr>
    );
};

export default RowChauffeur;
