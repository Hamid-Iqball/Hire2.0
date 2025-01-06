

import { Button } from "@material-tailwind/react";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";
import { LuMapPinHouse } from "react-icons/lu";
import { MdDateRange, MdOutlinePersonPin } from "react-icons/md";
import { PiOfficeChairFill } from "react-icons/pi";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate, useParams } from "react-router-dom";

function JobDetails() {
const { id } = useParams();
const navigate = useNavigate()
  return (

    <div className="bg-white px-2 p-4 sm:p-6 sm:px-8 rounded-2xl border-[8px] border-[#606060] xs:px-4  ">
      <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">{id} <span  onClick={()=>navigate(-1)} className="cursor-pointer"><TiArrowBack color="#57A8FF" size='24px'/></span></h2>
      <div>

        {/* Section - 1 */}
        <div className="grid grid-cols-2 gap-x-1 lg:grid-cols-3 gap-y-6 sm:gap-y-10  border-b-2 border-dashed  px-2 md:px-4 py-6 flex-wrap  ">

        <div className="grid grid-cols-[0.3fr,1fr] gap-3">
            <div className="border border-blue-400 p-1 rounded-full flex justify-center items-center">
            <BsGenderAmbiguous size='26px' color="#57A8FF"/>
            </div>
            <div className="text-sm">
                <p>Gender</p>
                <strong>Both</strong>
            </div>
        </div>

        <div className="grid grid-cols-[0.3fr,1fr] gap-3">
        <div className="border border-blue-400  rounded-full flex justify-center items-center">
        <FaPeopleGroup size='26px' color="#57A8FF"/>
        </div>
        <div className="text-sm">
            <p>Age limit</p>
            <strong>25 - 30</strong>
        </div>
        </div>

        <div className="grid grid-cols-[0.3fr,1fr] gap-3">
        <div className="border border-blue-400  rounded-full flex justify-center items-center">
        <MdOutlinePersonPin size='26px' color="#57A8FF"/>
        </div>
        <div className="text-sm">
            <p>Job Type</p>
            <strong>Office job</strong>
        </div>
        </div>
        <div className="grid grid-cols-[0.3fr,1fr] gap-3">
            <div className="border border-blue-400 p-1 rounded-full flex justify-center items-center">
            <PiOfficeChairFill size='26px' color="#57A8FF"/>
            </div>
            <div className="text-sm">
                <p >Total Seats</p>
                <strong>5</strong>
            </div>
        </div>
  

        <div className="grid grid-cols-[0.153fr,1fr] col-span-2 xl:col-span-1 gap-2">
        <div className="border border-blue-400  rounded-full flex justify-center items-center">
        <MdDateRange size='26px' color="#57A8FF"/>
        </div>
        <div className="text-sm">
            <p >Deadline Date</p>
            <strong>Undisclosed</strong>
        </div>
        </div>


        <div className="grid grid-cols-[0.3fr,1fr] gap-2">
        <div className="border border-blue-400  rounded-full flex justify-center items-center">
        <FaCalendar size='24px' color="#57A8FF"/>
        </div>
        <div className="text-sm">
            <p>Experience</p>
            <strong>0 year(s)</strong>
        </div>
        </div>


        <div className="grid grid-cols-[0.12fr,1fr] col-span-2 gap-2">
            <div className="border border-blue-400 p-1 rounded-full flex justify-center items-center">
            <LuMapPinHouse size='22px' color="#57A8FF"/>
            </div>
            <div className="text-sm">
                <p>Location</p>
                <strong>Peshawar, Islamabad</strong>
            </div>
        </div>


            <div className="grid grid-cols-[0.13fr,1fr] col-span-2 xl:col-span-1 gap-2">
            <div className="border border-blue-400  rounded-full flex justify-center items-center">
            <GiGraduateCap size='26px' color="#57A8FF"/>
            </div>
            <div className="text-sm">
                <p className="text-sm">Required Eduaction</p>
                <strong>Any degree</strong>
            </div>
            </div>
        </div>

   

<div>

</div>
 


        {/*Description  */}
        <div className="grid grid-cols-1 px-2 sm:px-4 py-6 border-b-2 border-dashed">
        <div className="grid grid-cols-[0.1fr,1fr] gap-2">

        <div className="border border-blue-400  rounded-full flex justify-center items-center p-2 place-self-start">
        <GrDocumentText size='26px' color="#57A8FF"/>
        </div>
        <div className="text-sm">
            <strong>Description</strong>
            <p>If you are dreaming to be a part of visionary young people, if you are eager to join VT for making lives more technological, more easier with your efforts. 
            We respect your spirit, come join our journey! <br /> Our internships are 90% leading to permanent jobs.We are offering internships in multiple departments, including both technical & management/marketing.</p>
        </div>
        </div>
        </div>


         {/* Last div */}
         <div className=" px-4 py-6 ">
            <Button className="bg-[#57A8FF]" onClick={()=>navigate("/updateProfile")}>Login to Update</Button>
         </div>
      </div>
    </div>
  );
}

export default JobDetails;
