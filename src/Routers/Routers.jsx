import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import JobDetails from "../Pages/JobDetails";

import AppLayout from "../View/AppLayout"

import ApplyForm from "../Pages/ApplyForm";
import Success from "../Pages/Success";




function Routers() {
  return (
    <Routes>
      {/* Wrap routes with AppLayout to maintain a consistent layout */}
       <Route path="/" element={<AppLayout />}>
        {/* Home Page */}
        <Route path="/" element={<Home />} >
        <Route path="vacancy/:id" element={<JobDetails />} />
        </Route>
     
        <Route path="/applyform" element={<ApplyForm/>}>
   
        </Route>
     
    <Route path="/success" element={<Success/>} />
        
      </Route>
    </Routes>
  );
}

export default Routers;
