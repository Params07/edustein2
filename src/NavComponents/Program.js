import React, { useEffect, useState } from "react";

import ProgramHeader from "../ProgramComponents/ProgramHeader";
import ProgramContents from "../ProgramComponents/ProgramContents";

const Program = () => {
    const [activeProgram,setActiveProgram] = useState(true)
    useEffect(()=>{
      setActiveProgram(true)
    },[])
  return (
   <>
   {activeProgram?<ProgramHeader/>:""}
   <ProgramContents activeProgram={activeProgram} setActiveProgram={setActiveProgram}/>
   </>    
  );
}

export default Program;
