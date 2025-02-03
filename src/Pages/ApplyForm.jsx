
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import {  Outlet, useNavigate } from "react-router";

function ApplyForm() {

const navigate = useNavigate()

  return (
    <>
    {/* bg-[#170909] */}
    <header className="flex justify-center items-center p-10 bg-[#170909] text-white">
    <div>
    <h1 className="text-3xl sm:text-4xl text-center font-[300] mb-2">Machine Learning Engineer</h1>
    <div className="flex gap-1 justify-center items-center text-xs">
        <MdLocationPin/> <p> Islamabad,Pakistan </p>
    </div>
    </div>
    </header>
    <section className="bg-[#f4f7fa] p-4 mx-6">

    <span className="flex justify-start items-center gap-2  my-4 w-48 cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out" onClick={()=>navigate("/")}> <FaArrowLeftLong size='20'/> <h1 className='font-bold'>All Jobs Openings</h1></span>

      <div className="flex justify-center items-center">
        <Outlet />
      </div>
    </section>
    </>
  );
}

export default ApplyForm;
