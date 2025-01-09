
import { Outlet } from "react-router"


function AppLayout() {
  return ( <div className=" flex flex-col justify-between min-h-screen bg-[#f4f7fa]">


<div className="flex-1">
    <Outlet/>
</div>



<div className="text-end text-[#153947] pointer-events-none p-2 ">
              <h1 className="text-2xl font-semibold">HIRE 2.0</h1>
              <p>Powered by Empleado</p>
    </div>
 

  </div>
    
  )
}

export default AppLayout