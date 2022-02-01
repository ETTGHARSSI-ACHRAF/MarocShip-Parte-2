import React, { useEffect, useState } from 'react';
import { FaSave, FaUserEdit, FaUserTimes } from 'react-icons/fa';
import { AiFillCloseCircle } from "react-icons/ai";
import axios from 'axios';

const RowLivraison = (props) => {
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
         <td className="px-4 py-3 text-sm w-1/8">
          {show &&
            <label id='labelZone'>{props.data.zone}</label>
          }
          {hiden &&
            <input
            defaultValue={props.data.zone}
              id='zone'
              className ="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              required
            />
          }
        </td>
        <td className="px-4 py-3 text-sm w-1/8">
          {show &&
            <label id='labelVilleD'>{props.data.ville_d}</label>
          }
          {hiden &&
            <input
            defaultValue={props.data.ville_d}
              id='villeD'
              className ="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              required
            />
          }
        </td>
    
        <td className="px-4 py-3 text-sm w-1/8">
          {show &&
            <label id='labelVilleA'>{props.data.ville_a}</label>
          }
          {hiden &&
            <input
            defaultValue={props.data.ville_a}
              id='villeA'
              className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              required
            />
          }
        </td>
        <td className="px-4 py-3 text-sm w-1/8">
          {show &&
            <label id='labelPoid'>{props.data.poid}</label>
    
          }
          {hiden &&
            <input
            defaultValue={props.data.poid}
              id='piod'
              className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              required
            />
          }
        </td>
        <td className="px-4 py-3 text-sm w-1/8">
            <label id='labelKm'>{props.data.km}</label>
    

        </td>
        <td className="px-4 py-3 text-sm w-1/8">
          
            <label id='labelDate'>{new Date(props.data.date).toLocaleDateString()}</label>
    

        </td>
        <td className="px-4 py-3 text-sm w-1/8">
         
            <label id='labelPrix'>{props.data.prix}</label>
    

        </td>
        <td className="px-4 py-3 text-sm w-1/8">
            <label id="labelStatu">{props.data.statu}</label>
    

        </td>
        <td className="px-4 py-3 text-sm w-1/8">
          {show &&
            <button type="submit" className="bg-red-600  text-white  py-2 px-4 rounded " id={`btnDelete`}><FaUserTimes /></button>
          }
          {show &&
            <button type="submit" className=" bg-blue-600  text-white  py-2 px-4 rounded ml-1" id={`btneUpdate`} onClick={(e) => showInput(e)} > <FaUserEdit /></button>
          }
          {hiden &&
            <button type="submit" className="  bg-blue-600  text-white  py-2 px-4 rounded " id={`btnSave`} ><FaSave /></button>
          }
          {hiden &&
            <button type="submit" className=" bg-yellow-400  text-white  py-2 px-4 rounded ml-1" id={`btneCansel`} onClick={(e) => hidenInput(e)}> <AiFillCloseCircle /></button>
          }
        </td>
      </tr>
      );
};

export default RowLivraison;
