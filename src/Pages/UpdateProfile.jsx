import { FaFileArchive, FaGraduationCap } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { NavLink, Outlet, useNavigate } from "react-router";
import {motion} from 'framer-motion'
function UpdateProfile() {

const navigate = useNavigate()

  return (
    <section className="bg-[#f4f7fa] p-4 mx-6">
      <motion.nav 
      initial={{y:-40, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="flex justify-start items-center gap-10 sm:gap-16 mb-4">

      <NavLink
            to="personal"
        className={({ isActive }) =>
            `flex flex-col items-center justify-center text-center gap-2 ${
            isActive ? "text-black" : "text-gray-500"
            }`
        }
        >
        {({ isActive }) => (
            <>
            <span
            className={`border rounded-full p-3 ${
            isActive
                ? "bg-blue-300 text-white border-blue-300" // Active styles
                : "bg-transparent text-blue-300 border-blue-300"       // Inactive styles
            }`}
        >
            <IoMdPerson size="32px" />
        </span>
        <p className="text-xs font-semibold text-black">
            Personal Information
        </p>
        </>
    )}
    </NavLink>

    <NavLink
            to="educational"
        className={({ isActive }) =>
            `flex flex-col items-center justify-start text-center gap-2 transition duration-300 ease-in-out ${
            isActive ? "text-black" : "text-gray-500"
            }`
        }
        >
        {({ isActive }) => (
            <>
            <span
            className={`border rounded-full p-3 ${
            isActive
                ? "bg-blue-300 text-white border-blue-300" // Active styles
                : "bg-transparent text-blue-300 border-blue-300"       // Inactive styles
            }`}
        >
            <FaGraduationCap size='32px'/>
        </span>
        <p className="text-xs font-semibold text-black">
           Eucational Information
        </p>
        </>
    )}
    </NavLink>

    <NavLink
            to="experience"
        className={({ isActive }) =>
            `flex flex-col items-center text-center justify-start gap-2 ${
            isActive ? "text-black" : "text-gray-500"
            }`
        }
        >
        {({ isActive }) => (
            <>
            <span
            className={`border rounded-full p-3 ${
            isActive
                ? "bg-blue-300 text-white border-blue-300" // Active styles
                : "bg-transparent text-blue-300 border-blue-300"       // Inactive styles
            }`}
        >
           
        <FaFileArchive size='32px'/>
        </span>
        <p className="text-xs font-semibold text-black">
            Work Experience
        </p>
        </>
    )}
    </NavLink>


      </motion.nav>

    <span className="flex justify-start items-center gap-2  my-4 w-48 cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out" onClick={()=>navigate("/")}> <FaArrowLeftLong size='20'/> <h1 className='font-bold'>All Jobs Openings</h1></span>

      <div>
        <Outlet />
      </div>
    </section>
  );
}

export default UpdateProfile;
