import React, { useState } from 'react';
import { FaSave, FaUserEdit, FaUserTimes } from 'react-icons/fa';
import { AiFillCloseCircle } from "react-icons/ai";

const RowResponsable = (props) => {
    const [show, setShow] = useState(true);
    const [hiden, setHiden] = useState(false);
    const showInput = (e) => {
      setShow(false);
      setHiden(true);
  
    }
    console.log(hiden);
    const hidenInput = (e) => {
      setShow(true);
      setHiden(false);
    }
  
    return (
      <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
      <td className="px-4 py-3 text-sm w-1/4">
        {show &&
          <label id={`labelNom`}>{props.nom}</label>
        }
        {hiden &&
          <input
          defaultValue={props.nom}
            id={`inputNom`}
            className ="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            required
          />
        }
      </td>
  
      <td className="px-4 py-3 text-sm w-1/4">
        {show &&
          <label id={`labelPrenom`}>{props.prenom}</label>
        }
        {hiden &&
          <input
          defaultValue={props.prenom}
            id={`inputPrenom`}
            className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            required
          />
        }
      </td>
      <td className="px-4 py-3 text-sm w-1/4">
        {show &&
          <label id={`labelEmail`}>{props.email}</label>
  
        }
        {hiden &&
          <input
          defaultValue={props.email}
            id={`inputEmail`}
            className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            required
          />
        }
      </td>
      
      <td className="px-4 py-3 text-sm w-1/4">
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

export default RowResponsable;
