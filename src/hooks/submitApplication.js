import { useState } from "react"

export const useSubmitApplication = ()=>{
    const [fileName, setFileName] = useState("");
      const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        country: null,
        selectedLocation: "",
        answers: {},
        resume: null
    
      })

      // // Handle country selection
  const handleCountryChange = (selected) => {
  
    setFormData(prev => ({
      ...prev,
      country: selected // Store the entire selected option
    }));
  };

  //Basic Info inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  //Questionniers inputs
  const handleAnswerChange = (questionId, value, type) => {
    setFormData(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: {
          questionId,
          value,
          type
        }
      }
    }));
  };


  //Resume File input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      setFileName("");
      setFormData(prev => ({
        ...prev,
        resume: null
      }));
    }
  };

return {formData, handleCountryChange , handleInputChange, handleFileChange, handleAnswerChange , fileName}
}