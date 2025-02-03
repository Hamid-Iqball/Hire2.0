import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import JobDetails from "../Pages/JobDetails";

import AppLayout from "../Components/AppLayout";
import PersonalInformation from "../Pages/PersonalInformation";
import ApplyForm from "../Pages/ApplyForm";



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
        <Route index element={<PersonalInformation/>}/>
        <Route path="personal" element={<PersonalInformation/>}  />
        </Route>

        
      </Route>
    </Routes>
  );
}

export default Routers;
