import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

import { useNavigate, Outlet, useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if the current route is for job details
  const isJobDetailsPage = location.pathname.startsWith("/vacancy");

  return (
    <div className="grid grid-cols-[0.8fr,1fr] gap-0 min-h-screen relative bg-[#f4f7fa]">
      {/* Sidebar */}
      <div className="flex flex-col gap-3">
        <div className="p-8">
          <span>
            <img src="/Images/logo.png" alt="Logo" />
          </span>
        </div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col gap-2 px-8 mb-10"
        >
          <span className="mb-4">
            <h2 className="text-lg font-semibold">Available Vacancies at Veevo Tech Official</h2>
          </span>

          <div
            onClick={() => navigate("/vacancy/ai-ml-rd-engineer")}
            className="flex justify-start items-center gap-2 rounded-xl p-2 max-w-[85%] mb-2 cursor-pointer bg-white hover:bg-[#57A8FF] hover:text-white active:bg-[#57A8FF] active:text-white duration-300 ease-in-out group"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <FaRegCheckCircle size={20} />
            </span>
            <p className="font-[500]">AI/ML R&D Engineer</p>
          </div>

     
      


        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center overflow-y-hidden justify-center">
          <div className=" absolute top-2 right-2 m-3">
            <Button  className="p-2 bg-[#57A8FF] flex gap-2 "> <span><FiLogIn size='16px'/></span>login</Button>
          </div>


        {!isJobDetailsPage ? (
          <>
            {/* Hero Image */}
            <motion.img
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              src="/Images/Group 707.png"
              alt="Hero Image"
              className="absolute"
            />

          </>
        ) : (
          <div className="w-full h-full flex justify-center items-center my-20 px-8  ">
            {/* Render Job Details */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full  bg-white shadow-lg rounded-2xl overflow-auto"
            >
              <Outlet />
            </motion.div>

          

          </div>
        )}

      <div className="absolute right-4 bottom-2 text-end text-[#153947] pointer-events-none ">
              <h1 className="text-2xl font-semibold">HIRE 2.0</h1>
              <p>Powered by Empleado</p>
            </div>
      </div>
    </div>
  );
}

export default Home;
