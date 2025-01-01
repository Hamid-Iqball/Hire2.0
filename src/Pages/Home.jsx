import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate, Outlet } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-[0.8fr,1fr] gap-0 min-h-screen relative bg-[#f4f7fa]">
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
            <h2 className="text-lg font-semibold">Available Vacancies at Veevo Tech Official
            </h2>
            {/* <p className="text-sm">In-case of any issues, please email us at HR@veevotech.com</p> */}
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

      <div className="flex justify-center items-center overflow-y-hidden relative">
        {/* The Hero Image */}
        <motion.img
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src="Images/Group 707.png"
          alt="Hero Image"
          className="absolute "
        />
        
        {/* Outlet for Job Details */}
        <div className="absolute inset-12">
          <Outlet />
        </div>

        <div className="absolute right-4 bottom-4 text-end text-[#153947]">
          <h1 className="text-4xl font-semibold">HIRE 2.0</h1>
          <p className="text-lg font-semibold">Powered by Empleado</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
