import React, { useEffect, useState } from "react";

import ProgramHeader from "./Home";
import ProgramContents from "../ProgramComponents/ProgramContents";

const Program = () => {
    const [activeProgram,setActiveProgram] = useState(true)
    useEffect(()=>{
      setActiveProgram(true)
    },[])
  return (
   
   
   <ProgramContents activeProgram={activeProgram} setActiveProgram={setActiveProgram}/>
   
  );
}

export default Program;
