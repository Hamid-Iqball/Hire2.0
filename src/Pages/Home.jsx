
import { FaRegCheckCircle } from "react-icons/fa"


function Home() {
  return (
    <div className="grid grid-cols-2 gap-0 h-screen relative bg-[#f4f7fa]">

        <div className="flex flex-col gap-3">
            <div className="p-8">
                <span><img src="/Images/logo.png" alt="" /></span>
            </div>
            <div className="flex flex-col ga-2 px-8">
            <span className="mb-4">
             <h2 className="text-lg font-bold">Available Vacancies at Veevo Tech Official </h2>
             <p className="text-sm font-[500]">In-case of any issues, please email us at HR@veevotech.com</p>
            </span>

            <div className="flex justify-start items-center gap-2 rounded-xl p-2 max-w-[50%] mb-2 cursor-pointer bg-white hover:bg-[#57A8FF] hover:text-white duration-300 ease-in-out group">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <FaRegCheckCircle size={20} />
            </span>
            <p>AI/ML R&D Engineer</p>
            </div>



            </div>

        </div>
        <div className="flex justify-center items-center">
           <img src="Images/Group 707.png" alt="hero image" className=""/>
            <div className="absolute right-4 bottom-4 text-end text-[#153947]">
                <h1 className="text-4xl font-semibold">HIRE 2.0</h1>
                <p className="text-lg font-semibold">Powered by Empleado</p>
            </div>
        </div>
    </div>
  )
}

export default Home