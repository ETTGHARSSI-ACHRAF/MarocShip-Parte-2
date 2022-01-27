import React, {useState} from 'react';
import { AiFillFolderAdd } from "react-icons/ai";

const AddVehicule = () => {
  const [type , setType] = useState('Type')
  // const [show , setShow] = useState(false)
  // const handleSelect = (e) => {
  //   setValue(e.target.value)
  // }

  return (

    <form className=" w-full grid grid-cols-1 gap-4 place-content-center h-48">
      {/* <div onClick={() => setShow(!show)}>show</div> */}
    <div className="flex flex-wrap  ml-4">
      <div className="w-full md:w-1/4 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Nom
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="nom"
          required
        />
      </div>
      <div className="w-full md:w-1/4 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Type
        </label>
       
        <select value={type} onChange={(e) => setType(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value={type} >Type</option>
          <option value={'voiture'}>voiture</option>
          <option value={'petit camion'}>petit camion</option>
          <option value={'grand camion'}>grand camion</option>
        </select>
        
      </div>
      <div className="w-full md:w-1/4 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Matricule
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="matricule"
          required
        />
      </div>
      <div className="w-full md:w-1/4 px-3 mt-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded ">
         <AiFillFolderAdd/>
        </button>
      </div>
    </div>
  </form>
  );
};

export default AddVehicule;
