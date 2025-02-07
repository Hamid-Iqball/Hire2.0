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



  const [fileName, setFileName] = useState("");
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
      cv:null,
      applicant_img:"",


      questionnaire: {},
      resume: null

    })

      // // Handle country selection
      const handleCountryChange = (selected) => {
        if (selected && selected.id) {
          console.log("Country ID:", selected.id);
          getAllCities(selected.id); // Send the ID to the API
        } else {
          console.error("Selected object or ID is missing!");
        }
      console.log(selected)
      setFormData(prev => ({
      ...prev,
      country: selected // Store the entire selected option
      }));
      console.log(selected)
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
      setFormData(prev => {
        const prevValue = prev.questionnaire[questionId]?.value || [];
    
        return {
          ...prev,
          questionnaire: {
            ...prev.questionnaire,
            [questionId]: {
              type,
              value:
                type === 'Checkboxes'
                  ? prevValue.includes(value)
                    ? prevValue.filter(v => v !== value)
                    : [...prevValue, value] 
                  : value 
            }
          }
        };
      });
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


return {allStates, getAllStates,getAllCities , getVacancey ,vacanceyQuestions, sendApplication, fileName , formData , handleAnswerChange, handleInputChange, handleCountryChange, handleFileChange,isSubmitting , allCities}
}

