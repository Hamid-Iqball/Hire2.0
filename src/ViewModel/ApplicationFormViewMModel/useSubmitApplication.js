import toast from "react-hot-toast";
import { useApplication } from "./useApplication";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

export const useSubmitApplication = ({ orgId, org_name, jobTitle, jobId }) => {
  const navigate = useNavigate();
  const { formData: initialFormData, sendApplication } = useApplication();
  console.log(initialFormData)
  const [localFormData, setLocalFormData] = useState(initialFormData);

  useEffect(() => {
    setLocalFormData(initialFormData);
  }, [initialFormData]);


  const validateFn = (data) => {
    const errors = [];

    if (!data?.name?.trim()) errors.push("Name is required");
    if (!data?.email?.trim()) errors.push("Email is required");
    if (!data?.phone_no?.trim()) errors.push("Phone number is required");
    if (!data?.dob) errors.push("Date of Birth is required");
    if (!data?.state) errors.push("State is required");
    if (!data?.city) errors.push("City is required");
    if (!data?.cnic?.trim()) errors.push("CNIC is required");
    if (!data?.cv) errors.push("CV is required");
    if (!data?.applicant_img) errors.push("Applicant image is required");

    errors.forEach(error => toast.error(error));
    return errors.length === 0;
  };


  //Submit funciton
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateFn(localFormData);
    if (!isValid) return;

    const submitFormData = new FormData();


    // Append fields to FormData
    for (const key in localFormData) {
      if (localFormData[key] != null) {
        if (key === "cv" || key === "applicant_img") {
          if (localFormData[key] instanceof File) {
            submitFormData.append(key, localFormData[key]);
          }
        } else if (key === "questionnaire") {
          localFormData[key].forEach((q, index) => {
            submitFormData.append(`questionnaire[${index}][question]`, q.question);
            q.answers.forEach((answer, ansIndex) => {
              submitFormData.append(
                `questionnaire[${index}][answers][${ansIndex}]`,
                answer
              );
            });
          });
        } else {
          submitFormData.append(key, localFormData[key]);
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
    localFormData,
    setLocalFormData // Expose these so you can update the form data
  };
};