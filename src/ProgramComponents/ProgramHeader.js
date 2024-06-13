import { FaArrowRight } from "react-icons/fa";
function ProgramHeader (){
    return(
        <div id="program" className="grid sm:gap-0 gap-8  pb-8  pt-24 h-full md:pt-44 md:pl-16 bg-[#0c2543]  md:flex  md:space-x-10 md:h-screen w-full">
        <div className=" px-4 md:px-0 grid place-items-center md:place-items-baseline  gap-10 md:gap-6  md:w-[61%]">
          <div className="w-max h-8">
            <span className="pl-6 pb-3 pt-3 pr-6 text-xl sm:text-2xl bg-line text-white font-semibold rounded-l-full rounded-r-full">
              Craft Your Clarified Era..
            </span>
          </div>
          <div>
            <span className="text-white font-semibold font-redhat text-3xl md:text-4xl">
              Feeling confused about
              <br />
              your career path?
            </span>
          </div>
          <div className="text-white font-redhat font-normal text-xl md:text-2xl">
            <span>
              Our EduStein's Bootcamps provide clarity through engaging content.
              <br />
              Join us to navigate your future with confidence!
            </span>
          </div>
          <div className="p-2 bg-white max-w-96 md:max-w-80 min-w-max w-72 md:w-96 h-12 md:h-20 rounded-l-full rounded-r-full flex items-center">
            <div className="text-center space-x-6 w-full flex items-center">
              <span className="font-redhat font-semibold md:font-bold text-2xl text-navItems flex-grow text-center">
                Be an EduStein
              </span>
              <span className="ml-auto bg-line rounded-full h-10 w-10 md:h-14 md:w-14 text-2xl font-semibold grid place-items-center">
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[38%]  flex items-center  pl-4 pr-4 md:pl-0">
                <img className="sm:w-2/3 lg:w-4/5 md:w-3/4 h-full" src="/images/image3.png" alt="About Us Image" />
            </div>
      </div>
  
    );
}

export default ProgramHeader;