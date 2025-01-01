import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import JobDetails from "../Pages/JobDetails";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="vacancy/:id" element={<JobDetails />} />
      </Route>
    </Routes>
  );
}

export default Routers;
