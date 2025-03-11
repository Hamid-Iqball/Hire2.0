
import { Button } from "@material-tailwind/react";
import React from "react";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";
import { MdDateRange, MdOutlinePersonPin } from "react-icons/md";
import { PiOfficeChairFill } from "react-icons/pi";
import { TiArrowBack } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";

function JobDetails() {

const navigate = useNavigate()
const location = useLocation()
const {jobDetails, orgDetails} = location.state


// const isApplied = jobDetails.applied.applied
// console.log(isApplied)
const handleApply = ()=>{
navigate("/applyform" , {
    state:{
        jobId:jobDetails.id,
        jobTitle:jobDetails.title,
        location:jobDetails.locations.map((el)=>el.city_name).join(',') || 'Location not specified',
        orgDetails:orgDetails
        
    }
})


}

  return (

    <div className=" px-2 p-4 sm:p-6 sm:px-8 rounded-2xl border-8 border-customGray-700 xs:px-4  ">
      <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">{jobDetails.title} <span  onClick={()=>navigate("/")} className="cursor-pointer"><TiArrowBack className="text-customBlue-400" size='24px'/></span></h2>
      <div>

        {/* Section - 1 */}
        <div className="grid grid-cols-2 gap-x-1 lg:grid-cols-3 gap-y-6 sm:gap-y-10  border-b-2 border-dashed  px-2 md:px-4 py-6 flex-wrap  ">
        <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3 border border-customBlue-400 rounded-full flex justify-center items-center self-start p-1.5">
            <BsGenderAmbiguous size='24px' className="text-customBlue-400"/>
        </div>
        <div className="col-span-9 text-sm">
            <p>Gender</p>
            <strong>{jobDetails.req_gender}</strong>
        </div>
        </div>

        <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3 border border-customBlue-400 rounded-full flex justify-center items-center self-start p-1.5">
        <FaPeopleGroup size='26px' className="text-customBlue-400"/>
        </div>
        <div className="text-sm col-span-9">
            <p>Age limit</p>
            <strong>{jobDetails.age_from
            } - {jobDetails.age_upto}</strong>
        </div>
        </div>

        <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3 border border-customBlue-400 rounded-full flex justify-center items-center self-start p-1.5">
        <MdOutlinePersonPin size='26px' className="text-customBlue-400"/>
        </div>
        <div className="col-span-9 text-sm">
            <p>Job Type</p>
            <strong>{jobDetails.vacancy_type}</strong>
        </div>
        </div>
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-3 border border-customBlue-400 rounded-full flex justify-center items-center self-start p-1.5">
            <PiOfficeChairFill size='24px' className="text-customBlue-400"/>
            </div>
            <div className="col-span-9 text-sm">
                <p >Total Seats</p>
                <strong>{jobDetails.total_seats}</strong>
            </div>
        </div>
  

        <div className="grid grid-cols-12 xl:col-span-1 gap-2">
        <div className="col-span-3 border border-customBlue-400 rounded-full flex justify-center items-center self-start p-1.5">
        <MdDateRange size='24px' className="text-customBlue-400"/>
        </div>
        <div className="col-span-9 text-sm">
            <p >Deadline Date</p>
        <strong>{jobDetails.end_date}</strong>
        </div>
        </div>


        <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3 border border-customBlue-400 rounded-full flex justify-center items-center self-start p-1.5">
        <FaCalendar size='24px' className="text-customBlue-400"/>
        </div>
        <div className="col-span-9 text-sm">
            <p>Experience</p>
            <strong>{jobDetails.req_experience} years</strong>
        </div>
        </div>


        <div className="grid grid-cols-12 col-span-2 gap-3">
            <div className="col-span-2 border border-customBlue-400 rounded-full flex justify-center items-center self-start p-2">
            <FaLocationDot size='22px' className="text-customBlue-400"/>
            </div>
            <div className="col-span-10 text-sm">
                <p>Location</p>
                <strong className="max-w-">{jobDetails.locations.map((el)=>el.city_name).join(',')}</strong>
            </div>
        </div>


                <div className="grid grid-cols-12 gap-3">
            <div className="col-span-3 border border-customBlue-400 rounded-full flex justify-center items-center self-start p-1.5">
                <GiGraduateCap size="24px" className="text-customBlue-400" />
            </div>
            <div className="col-span-9 text-sm">
                <p className="text-sm">Required Education</p>
                <strong>{jobDetails.min_qualification}</strong>
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
         <strong className="mb-1">Description</strong>
         <p>
           

        {jobDetails.description
            .replace(/<br\s*\/?>/g, '\n') // Replace <br /> or <br> with \n
            .split('\n') // Split on \n for line breaks
            .map((line, index) => (
                <React.Fragment key={index}>
                    {line.trim()} {/* Trim extra spaces */}
                    {line.trim() && <br />} {/* Add a line break only if the line is not empty */}
                </React.Fragment>
            ))}
           
            </p>
        </div>



        </div>
        </div>


         {/* Last div */}
         <div className=" px-4 py-6 ">
            <Button className="bg-[#57A8FF]" onClick={handleApply}>Apply</Button>
         </div>
      </div>
    </div>
  );
}

export default JobDetails;
