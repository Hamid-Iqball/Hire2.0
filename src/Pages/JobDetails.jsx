import { Button } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";

function JobDetails() {
const { id } = useParams();
const navigate = useNavigate()
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">{id}</h2>
      <div className="flex flex-col justify-start items-center">

      </div>

      <Button onClick={()=>navigate(-1)}>Back</Button>
    </div>
  );
}

export default JobDetails;
