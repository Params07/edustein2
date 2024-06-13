function ProgramsList({ programs, handleProgram,setId }){
    return (
        
       
        <div className={`bg-[#0c2543] w-full p-0 sm:p-8  md:p-16 ` }>
            <div className="bg-[#2E3B4E] py-6 rounded-md">
                <div className="text-center font-redhat">
                    <span className="text-white font-bold text-3xl">Our Programs</span>
                </div>
                <div className=" p-4 md:p-6  xl:p-16 grid gap-8 lg:grid-cols-2 place-items-center font-redhat ">
                    {programs.map((program, index) => (
                        <div key={index} className="w-full  md:w-3/5 lg:w-full h-[28rem] min-h-max sm:h-[30rem] xl:h-[34.875rem] bg-white rounded-md md:rounded-xl p-3  md:p-4 xl:p-8">
                            <div>
                                <span className=" font-redhat font-semibold text-xl xl:text-2xl">{program.title}</span>
                            </div>
                            <div className="w-full h-[48%] sm:h-[58%] md:h-[51%] 2xl:h-2/3 xl:h-3/5 text-center">
                                <img src={program.src} className="mx-auto h-full w-2/3" alt={program.title} />
                            </div>
                            <div className="my-4 font-redhat font-normal md:font-semibold text-base">
                                <span>{program.content}</span>
                            </div>
                            <div className="w-full h-8 mt-4 font-redhat">
                            <button onClick={() => {handleProgram(); setId(index);console.log(index)}} className="bg-line   border-2 border-line hover:text-line hover:bg-white text-white w-full py-2 rounded">
    Explore
</button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProgramsList;