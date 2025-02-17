import toast from "react-hot-toast";
import { useApplication } from "./useApplication";
import { useNavigate } from "react-router";

export const useSubmitApplication = ({orgId,org_name, jobTitle,jobId})=>{
    const navigate = useNavigate()
   const {
    formData,
    sendApplication,

   } = useApplication()
    const handleSubmit = async (e) => {
        e.preventDefault();
     
        const submitFormData = new FormData();
      
        // Append fields to FormData
        for (const key in formData) {
          if (formData[key] != null) {
            if (key === "cv" || key === "applicant_img") {
              if (formData[key] instanceof File) {
                submitFormData.append(key, formData[key]);
              }
            } else if (key === "questionnaire") {
              // ✅ Append the questionnaire array directly without converting to JSON string
              formData[key].forEach((q, index) => {
                submitFormData.append(`questionnaire[${index}][question]`, q.question);
                q.answers.forEach((answer, ansIndex) => {
                  submitFormData.append(`questionnaire[${index}][answers][${ansIndex}]`, answer);
                });
              });
            } else {
              submitFormData.append(key, formData[key]);
            }
          }
        }
      
        submitFormData.append("operation", "apply_profile_vacancy");
        submitFormData.append("org_id", orgId);
        submitFormData.append("org_name", org_name);
        submitFormData.append("v_name", jobTitle);
        submitFormData.append("id", jobId);
      
        try {
          toast.loading("Submitting application...", { id: "submitStatus" });
          await sendApplication(submitFormData);
    
          toast.success("Application submitted successfully!", { id: "submitStatus" });
          navigate("/");
        } catch (error) {
          toast.error(
            error.response?.ERROR_DESCRIPTION || "Failed to submit application. Please try again.",
            { id: "submitStatus" }
          );
          console.error("Application submission error:", error);
        }
      };
    

      return {handleSubmit}
}
