import toast from "react-hot-toast";
import { useApplication } from "./useApplication";
import { useNavigate } from "react-router";


export const useSubmitApplication = ({ orgId, org_name, jobTitle, jobId ,formData}) => {
  const navigate = useNavigate();
  

const {sendApplication}  = useApplication()



  const validateFn = (data) => {
    console.log(data)
    const errors = [];

    if (!data?.name?.trim()) errors.push("Name is required");
    if (!data?.father_name?.trim()) errors.push("Father Name is required");
    if (!data?.dob) errors.push("Date of Birth is required");
    if (!data?.gender?.trim()) errors.push("Please select your gender");
    if (!data?.cnic?.trim()) errors.push("CNIC is required");
    if (!data?.marital_status?.trim()) errors.push("Please select your Marital status");
    if (!data?.state) errors.push("Country is required");
    if (!data?.city) errors.push("City is required");
    if (!data?.phone_no?.trim()) errors.push("Phone number is required");
    if (!data?.email?.trim()) errors.push("Email is required");
    if(!data?.postal_add.trim()) errors.push("Please enter your postal address")
    if(!data?.permanent_add.trim()) errors.push("Please enter your permanent address")
      if(!data?.questionnaire.length) errors.push("Please Answer all questions")
    if (!data?.cv) errors.push("CV is required");
    if (!data?.applicant_img) errors.push("Applicant image is required");

    errors.forEach(error => toast.error(error));
    return errors.length === 0;
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