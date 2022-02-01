import { Button } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import '../style/Login.css';
const Aut = ({role}) => {
  const [api,setApi] = useState('');
  const [cookies, setCookie] = useCookies();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const login = () =>{
    console.log(email);
    console.log(password);
    console.log(api);
      axios.post(api,{
        "email":email,
        "password":password
      })
      .then(res=>{
        setCookie('role',res.data.role,{ httpOnly: false });
        setCookie('token',res.data.token,{ httpOnly: false });
        window.location=`/${res.data.role}`
    })
    .catch(err=>alert(err))
  }
  useEffect(() => {
    if( role === 'Manager'){
      setApi('http://localhost:5000/managerApi/login');
    }else if (role === 'Admin'){
      setApi('http://localhost:5000/adminApi/login');
    }else if (role === 'Responsable'){
      setApi('http://localhost:5000/responsableLivraisonApi/login');
    }else if (role === 'Chauffeur'){
      setApi('http://localhost:5000/chauffeurApi/login');
    }
    
  },[]);
  
    return (
        <div className="bg-no-repeat bg-cover bg-center relative back"><div className=""></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col  text-white">
              <h1 className="mb-3 font-bold text-5xl">Hi 👋 Welcome Back {role} </h1>
            </div>
          </div>
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                <div className="mb-4">
                  <h3 className="font-semibold text-2xl text-gray-800">Login </h3>
                </div>
                <div className="space-y-5">
                            <div className="space-y-2">
                                  <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                  <input onChange={(e)=>setEmail(e.target.value)} className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="" placeholder="mail@gmail.com"/>
                  </div>
                              <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input onChange={(e)=>setPassword(e.target.value)} className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="" placeholder="Enter your password"/>
                </div>
                <div>
                  <button type="submit" onClick={(e)=>login()} className="w-full flex justify-center bg-blue-400  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    Sign in
                  </button>
                </div>
                </div>
                <div className="pt-5 text-center text-gray-400 text-xs">
                  <span>
                    Copyright © 2021-2022
                  </span>
                </div>
            </div>
          </div>
      </div>
    </div>
      );
};

export default Aut;
