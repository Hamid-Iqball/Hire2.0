import { format, parse } from "date-fns";
import { useState } from "react"
import useStore from "../../Store/Store"



export const useApplication = ()=>{
  const allStates = useStore((state)=>state.allStates)
  const getAllStates = useStore((state)=>state.getAllStates)
  const getAllCities = useStore((state)=>state.getAllCities)
  const allCities = useStore((state)=>state.allCities)
  const getVacancey = useStore((state)=>state.getVacancey)
  const vacanceyQuestions = useStore((state)=>state.vacanceyQuestions)
  const sendApplication = useStore((state)=>state.sendApplication)
  const isSubmitting = useStore((state)=>state.isSubmitting)
  const isLoadingCities = useStore((state)=>state.isLoadingCities)



  const [formData, setFormData] = useState({
      name: "",
      father_name: "",
      dob: "",
      gender: "",
      cnic: "",
      marital_status: "",
      state:"",
      city:"",
      phone_no:"",
      email:"",
      postal_add:"",
      permanent_add:"",
      user_id:15192,
      oneid:10395472,
      cv:null,
      applicant_img:null,
      city_id:"",
      questionnaire: [],
    })

  

    const handleCountryChange = (selected) => {
      if (selected?.id) {
        console.log(selected); // Keep only necessary logs
        getAllCities(selected.id);
        
        setFormData((prev) => ({
          ...prev,
          state: selected.id, // Store country ID
        }));
      }
    };
    
    const handleChangeCity = (selectedOption) => {
      setFormData((prev) => ({
        ...prev,
        city: selectedOption?.value || "", // Ensure it resets properly if no selection
      }));
    };
    

  
    //1

    

      const handleInputChange = (e, name) => {
        let fieldName, fieldValue;
      
        if (e?.target) {
          fieldName = e.target.name;
          fieldValue = e.target.value;
        } else {
          fieldName = name;
          fieldValue = e; // This handles custom components like Select or DatePickers
        }
      
        // Handle date formatting for "dob"
        if (fieldName === "dob" && fieldValue) {
          try {
            if (fieldValue instanceof Date) {
              // If value is already a Date object, format it directly
              fieldValue = format(fieldValue, "yyyy-MM-dd");
            } else if (typeof fieldValue === "string") {
              // If value is a string, try parsing it
              const parsedDate = parse(fieldValue, "yyyy-MM-dd", new Date());
              fieldValue = format(parsedDate, "yyyy-MM-dd");
            }
          } catch (error) {
            console.error("Error formatting date:", error);
          }
        }
      
        console.log(fieldName, fieldValue);
      
        setFormData((prev) => ({
          ...prev,
          [fieldName]: fieldValue,
        }));
      };
      
      
      
      


      const handleAnswerChange = (questionId, value, questionType) => {
        setFormData((prevFormData) => {
          const updatedQuestionnaire = prevFormData.questionnaire ? [...prevFormData.questionnaire] : [];
      
          // Find the index of the question
          const questionIndex = updatedQuestionnaire.findIndex((q) => q.question === questionId);
      
          if (questionType === "Checkboxes") {
            if (questionIndex === -1) {
              // If the question doesn't exist, create it with the first selected value
              updatedQuestionnaire.push({ question: questionId, answers: [value] });
            } else {
              // Toggle the value in the answers array
              const existingAnswers = updatedQuestionnaire[questionIndex].answers || [];
              const updatedAnswers = existingAnswers.includes(value)
                ? existingAnswers.filter((ans) => ans !== value) // Remove if already selected
                : [...existingAnswers, value]; // Add if not selected
      
              updatedQuestionnaire[questionIndex] = {
                ...updatedQuestionnaire[questionIndex],
                answers: updatedAnswers,
              };
            }
          } else {
            
            if (questionIndex === -1) {
              updatedQuestionnaire.push({ question: questionId, answers: [value] });
            } else {
              updatedQuestionnaire[questionIndex] = {
                ...updatedQuestionnaire[questionIndex],
                answers: [value],
              };
            }
          }
      

          
          
          return { ...prevFormData, questionnaire: updatedQuestionnaire };
        });
      };
      
      console.log(formData)

      const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        
      
        
        setFormData(prev => ({
        ...prev,
        [fieldName]: file || null, // Store different files separately
      }));
    };


    
   

    
return {allStates, getAllStates,getAllCities , getVacancey ,vacanceyQuestions, sendApplication , formData , handleAnswerChange, handleInputChange, handleCountryChange, handleFileChange,isSubmitting , allCities , handleChangeCity, isLoadingCities , setFormData }    
}


