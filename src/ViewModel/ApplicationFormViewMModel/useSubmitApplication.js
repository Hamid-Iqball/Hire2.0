import toast from "react-hot-toast";
import { useApplication } from "./useApplication";
import { useNavigate } from "react-router";


export const useSubmitApplication = ({ orgId, org_name, jobTitle, jobId ,formData}) => {
  const navigate = useNavigate();
  

  const {sendApplication, vacanceyQuestions}  = useApplication()

  const questions = vacanceyQuestions?.questionnaire || [];
 
  const validateFn = (data) => {
    if (!data?.name?.trim()) {
      toast.error("Name is required");
      return false;
    }
  
    if (!data?.father_name?.trim()) {
      toast.error("Father Name is required");
      return false;
    }
  
    if (!data?.dob) {
      toast.error("Date of Birth is required");
      return false;
    }
  
    if (!data?.gender?.trim()) {
      toast.error("Please select your gender");
      return false;
    }
  
    if (!data?.cnic?.trim()) {
      toast.error("CNIC is required");
      return false;
    }
  
    if (!data?.marital_status?.trim()) {
      toast.error("Please select your Marital status");
      return false;
    }
  
    if (!data?.state) {
      toast.error("Country is required");
      return false;
    }
  
    if (!data?.city) {
      toast.error("City is required");
      return false;
    }
  
    if (!data?.phone_no?.trim()) {
      toast.error("Phone number is required");
      return false;
    }
  
    if (!data?.email?.trim()) {
      toast.error("Email is required");
      return false;
    }
  
    if (!data?.postal_add?.trim()) {
      toast.error("Please enter your postal address");
      return false;
    }
  
    if (!data?.permanent_add?.trim()) {
      toast.error("Please enter your permanent address");
      return false;
    }
  
    if (data?.questionnaire?.length !== questions.length) {
      toast.error("Please answer all questions");
      return false;
    }
  
    if (!data?.cv) {
      toast.error("CV is required");
      return false;
    }
  
    if (!data?.applicant_img) {
      toast.error("Applicant image is required");
      return false;
    }
  
    return true; // all validations passed
  };
  


  //Submit funciton
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateFn(formData);
    if (!isValid) return;

    const submitFormData = new FormData();


    // Append fields to FormData
    for (const key in formData) {
      if (formData[key] != null) {
        if (key === "cv" || key === "applicant_img") {
          if (formData[key] instanceof File) {
            submitFormData.append(key, formData[key]);
          }
        } else if (key === "questionnaire") {
          formData[key].forEach((q, index) => {
            submitFormData.append(`questionnaire[${index}][question]`, q.question);
            q.answers.forEach((answer, ansIndex) => {
              submitFormData.append(
                `questionnaire[${index}][answers][${ansIndex}]`,
                answer
              );
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

  return {
    handleSubmit,
     // Expose these so you can update the form data
  };
};