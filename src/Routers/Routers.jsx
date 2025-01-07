import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import JobDetails from "../Pages/JobDetails";
import UpdateProfile from "../Pages/UpdateProfile";
import AppLayout from "../Components/AppLayout";
import PersonalInformation from "../Pages/PersonalInformation";
import EducationalInfo from "../Pages/EducationalInfo";
import WorkExperienceInfor from "../Pages/WorkExperienceInfor";


function Routers() {
  return (
    <Routes>
      {/* Wrap routes with AppLayout to maintain a consistent layout */}
      <Route path="/" element={<AppLayout />}>
        {/* Home Page */}
        <Route path="/" element={<Home />} >

        {/* Job Details Page */}
        <Route path="vacancy/:id" element={<JobDetails />} />
      </Route>
     
        <Route path="/updateProfile" element={<UpdateProfile />}>
        <Route index element={<PersonalInformation/>}/>
        <Route path="personal" element={<PersonalInformation/>}  />
        <Route path="educational" element={< EducationalInfo/>}
        />
        <Route path="experience" element={<WorkExperienceInfor/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Routers;
