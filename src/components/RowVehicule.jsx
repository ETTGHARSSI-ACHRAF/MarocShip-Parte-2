import React, { useState } from 'react';
import { FaSave} from 'react-icons/fa';
import { AiFillCloseCircle, AiOutlineDelete } from "react-icons/ai";
import {GrUpdate } from "react-icons/gr";
import axios from 'axios';

const RowVehicule = (props) => {
    const [show, setShow] = useState(true);
  const [hiden, setHiden] = useState(false);

  const [type, setType] = useState(props.type);
  const [nom, setNom] = useState(props.nom);
  const [matricule, setMatricule] = useState(props.matricule);

  const update = (id) =>{
    axios.patch(`http://localhost:5000/vehiculeApi/${id}`,{
      "type_vehicule":type,
    "nom_vehicule":nom,
    "matricule":matricule
      })
      .then(res=>console.log(res))
  }

  const showInput = (e) => {
    setShow(false);
    setHiden(true);

  }
  const hidenInput = (e) => {
    setShow(true);
    setHiden(false);
  }

  const drop = (id) =>{
    axios.delete(`http://localhost:5000/vehiculeApi/${id}`)
  }
  return (
    <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3 text-sm w-1/4">
                      { show &&
                      <label id={`labelNom`}>{props.nom}</label>
                      }
                      { hiden &&
                        <input
                        onChange={(e)=>setNom(e.target.value)}
                        defaultValue={props.nom}
                      id={`inputNom`}
                        className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        required
                      />
                      }
                      
                    </td>
                    <td className="px-4 py-3 text-sm w-1/4">
                    { show &&
                    <label id={`labelPrenom`}>{props.type}</label>
                    }
                    { hiden &&
                    <input
                    onChange={(e) => setType(e.target.value)}
                    defaultValue={props.type}
                      id={`inputPrenom`}
                        className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        required
                      />
}
                      </td>
                    <td className="px-4 py-3 text-sm w-1/4">
                    { show &&
                    <label id={`labelEmail`}>{props.matricule}</label>
}
{ hiden &&
                    <input
                    onChange={(e)=>setMatricule(e.target.value)}
                    defaultValue={props.matricule}
                    id={`inputEmail`}
                        className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        required
                      />
}
                      </td>
                    <td className="px-4 py-3 text-sm w-1/4">
                      { show &&
                    <button type="submit" className="bg-red-600  text-white  py-2 px-4 rounded "  onClick={(e)=>drop(props.id)}><AiOutlineDelete/></button>
                      }
                       { show &&
                    <button type="submit" className=" bg-blue-600  text-white  py-2 px-4 rounded ml-1" id={`btneUpdate`} onClick={(e)=>showInput(e)}> <GrUpdate/></button>
                  }
                  { hiden &&
                    <button type="submit" className="  bg-blue-600  text-white  py-2 px-4 rounded " id={`btnSave`} onClick={(e)=>update(props.id)}><FaSave/></button>
                  }
                  { hiden &&
                    <button type="submit" className=" bg-yellow-400  text-white  py-2 px-4 rounded ml-1" id={`btneCansel`} onClick={(e)=>hidenInput(e)}> <AiFillCloseCircle/></button>
                  }
                    </td>
                  </tr>
  );
};

export default RowVehicule;
