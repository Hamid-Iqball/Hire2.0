import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useEffect} from "react";
import { FiLogIn } from "react-icons/fi";
import { PiBagSimpleFill } from "react-icons/pi";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useHomePage } from "../ViewModel/HomePageViewModal/userHomeServie";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const {allJobs,getAllJobs,orgDetails} = useHomePage()
  console.log(orgDetails)
    useEffect(function(){
     getAllJobs()
    },[])
 
  const isJobDetailsPage = location.pathname.startsWith("/vacancy");

  function handleClick(job){
    navigate(`/vacancy/${job.id}`, {state:{jobDetails:job}});
   
  }
  return (
<>
    <header className="flex justify-between p-2  ">  

       <div className="p-2 w-52">
       {  orgDetails.map((orgLogo)=>(
         <span key={orgLogo.id}>
            <img src={orgLogo.logo} alt="Logo" className="w-full" />
          </span>
          ))
       }
        </div>

        <div className="p-2 flex justify-between items-center gap-6">
            {/* <span className=" border border-gray-800 rounded-full"><img src="/Images/hamid.jfif" alt="" className="w-12 h-12 object-cover rounded-full" /> </span> */}
            <Button  className="p-2 bg-[#57A8FF] flex gap-2 "> <span><FiLogIn size='16px'/></span>login</Button>
          </div>
      </header>


    <div className=" flex flex-col justify-between bg-[#f4f7fa] "> 


     <section className="grid md:grid-cols-[0.8fr,1fr] sm:grid-cols-1 gap-0 h-auto relative">
  {/* Sidebar */}
  <div className="flex flex-col gap-3 order-2 mt-10 md:my-0 md:order-1">
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="flex flex-col gap-2 px-8 mb-10"
    >
  { orgDetails.map((org,i)=>(

    <span className="mb-4" key={i}>
        <h2 className="text-lg font-semibold">Available Vacancies at {org.org_name}</h2>
        </span>  ))}
      {allJobs.map((job) => (
        <Button
          key={job.id}
          onClick={()=>handleClick(job)}
          className="flex justify-start items-center gap-2 rounded-xl p-2 sm:min-w-full mb-2 text-blue-gray-900 cursor-pointer bg-white hover:bg-[#57A8FF] hover:text-white active:bg-[#57A8FF] active:text-white duration-300 ease-in-out group"
        >
          <span>
            <PiBagSimpleFill size={20} />
          </span>
          <p className="font-[500] text-[14px]">{job.title}</p>
        </Button>
      ))}

      {/* Repeat similar Button components as needed */}
    </motion.div>
  </div>

  {/* Main Content */}
  <div className="flex flex-col items-center overflow-y-hidden justify-center my-8 md:my-0 order-1 md:order-2">
    {!isJobDetailsPage ? (
      <>
        {/* Hero Image */}
        <div className="h-full w-full mb-0">
          <motion.img
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src="/Images/Group 707.png"
            alt="Hero Image"
          />
        </div>
      </>
    ) : (
      <div className="w-full h-full flex justify-start items-start mt-8 mb-10 px-8">
        {/* Render Job Details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full  bg-white shadow-lg rounded-2xl"
        >
          <Outlet />
        </motion.div>
      </div>
    )}
  </div>
</section>
 
</div>
            </>
  );
}

export default Home;
