
import { Input } from "@material-tailwind/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import FloatingLabelSelect from "../Components/FloatingLabelSelect";
import { useApplication } from "../ViewModel/ApplicationFormViewMModel/useApplication";
import { useEffect } from "react";


function ApplyForm() {
const location =  useLocation()

const navigate = useNavigate()
const {jobTitle, location:JobLocation} = location.state||{}

const  {getAllStates, allStates} =useApplication()
useEffect(function(){
  getAllStates()
  console.log(allStates)
},[])
  return (
    <>
    {/* bg-[#170909] */}
    <header className="flex justify-center items-center p-10 bg-[#170909] text-white">
    <div>
    <h1 className="text-3xl sm:text-4xl text-center font-[300] mb-2">{jobTitle}</h1>
    <div className="flex gap-1 justify-center items-center ">
        <MdLocationPin size={18}/> <p> {JobLocation}</p>
    </div>
    </div>
    </header>
    <section className="bg-[#f4f7fa] p-4 mx-6">

    <span className="flex justify-start items-center gap-2  my-4 w-48 cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out" onClick={()=>navigate("/")}> <FaArrowLeftLong size='20'/> <h1 className='font-bold'>All Jobs Openings</h1></span>

      <div className="flex justify-center items-center w-full">
         <div className="flex flex-col gap-3 mt-3 w-3/5">
                <h1 className="font-bold">Basic Info</h1>
                <div className="grid grid-cols-1 md:grid-cols-[0.2fr,1fr] gap-2">
                  <Input
                    label="Title"
                    color="blue"
                    className="bg-white"
        
                  />
                  <Input
                    label="First Name"
                    color="blue"
                    className="bg-white"
                 
                  />
                </div>
                <Input
                  label="Last Name"
                  color="blue"
                  className="bg-white"
            
                />
                <Input
                  label="Email Address"
                  color="blue"
                  className="bg-white"
            />

              <FloatingLabelSelect label='Country Code' options={allStates} />
             
            

           
              </div>
      </div>
    </section>
    </>
  );
}

export default ApplyForm;
