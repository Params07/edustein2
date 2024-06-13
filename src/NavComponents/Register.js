import React, { useContext } from "react";
import {  GlobalStateContext } from "../UseContextComponents/GlobalStateProvider";


const Register = () => {
    const { showRegisterForm, closeRegisterForm } = useContext( GlobalStateContext);

    return (
       
        showRegisterForm ?( <div className="fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white w-full h-max sm:w-[580px] sm:h-[518px] rounded-lg p-6 font-redhat flex flex-col space-y-4" >
         
         <span className="text-[#545454] font-semibold text-base">REGISTER FORM</span>
         <label className="relative">
             <input
                name="name"
                 type="text"
                 className=" w-full py-4 px-4 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500 transition-colors duration-200"
             />
             <span className="text-xl absolute text-gray-300 left-0
              top-4 mx-6 px-2 transition duration-200 name">
                 Name
             </span>
         </label>
         <label className="relative">
             <input
                name="name"
                 type="email"
                 className=" w-full py-4 px-4 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500 transition-colors duration-200"
             />
             <span className="text-xl absolute text-gray-300 left-0
              top-4 mx-6 px-2 transition duration-200 name">
                 Email
             </span>
         </label>
         <label className="relative">
             <input
                name="name"
                 type="number"
                 className=" w-full py-4 px-4 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500 transition-colors duration-200"
             />
             <span className="text-xl absolute text-gray-300 left-0
              top-4 mx-6 px-2 transition duration-200 name">
               Phone no
             </span>
         </label>
         <label className="relative">
             <input
                name="name"
                 type="number"
                 className=" w-full py-4 px-4 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500 transition-colors duration-200"
             />
             <span className="text-xl absolute text-gray-300 left-0
              top-4 mx-6 px-2 transition duration-200 name">
                 Phone no
             </span>
         </label>
         <label className="relative">
             <input
                name="name"
                 type="text"
                 className=" w-full py-4 px-4 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500 transition-colors duration-200"
             />
             <span className="text-xl absolute text-gray-300 left-0
              top-4 mx-6 px-2 transition duration-200 name">
                 Bootcamp Name
             </span>
         </label>
         <div className="flex space-x-4 font-semibold">
             <button onClick={()=>closeRegisterForm()} className="w-full py-4 bg-white text-gray-500 hover:bg-gray-100   border-2 border-gray-300 rounded-lg ">CANCEL</button>
             <button className="w-full py-4 bg-line text-white border-2 border-line hover:text-line hover:bg-white  rounded-lg ">REGISTER</button>
 
         </div>
        </div>
        </div>):""
       
    );
}

export default Register;