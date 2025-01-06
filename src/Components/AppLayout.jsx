import { Button } from "@material-tailwind/react"
import { FiLogIn } from "react-icons/fi"
import { Outlet } from "react-router"


function AppLayout() {
  return ( <div className=" flex flex-col justify-between min-h-screen bg-[#f4f7fa]">
    {/* Header */}
    <header className="flex justify-between p-2  ">        
       <div className="p-2">
          <span>
            <img src="/Images/logo.png" alt="Logo" />
          </span>
        </div>


        <div className="p-2">
            <Button  className="p-2 bg-[#57A8FF] flex gap-2 "> <span><FiLogIn size='16px'/></span>login</Button>
          </div>
      </header>


{/* Main content */}

<div className="flex-1">
    <Outlet/>
</div>


{/* Footer */}

<div className="text-end text-[#153947] pointer-events-none p-2 ">
              <h1 className="text-2xl font-semibold">HIRE 2.0</h1>
              <p>Powered by Empleado</p>
    </div>
 

  </div>
    
  )
}

export default AppLayout