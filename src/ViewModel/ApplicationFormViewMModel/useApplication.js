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
      questionnaire: {},
     

    })

      // // Handle country selection
      const handleCountryChange = (selected) => {
        if (selected && selected.id) {
          getAllCities(selected.id);
        }
      // console.log(selected)
      setFormData(prev => ({
      ...prev,
      country: selected // Store the entire selected option
      }));
      // console.log(selected)
      };



      const handleChangeCity =(selectedCity)=>{


       if(!selectedCity) {
        setFormData((prev)=>({
          ...prev,
          country:"",
          city:"",

        }))
       }; 
      
       console.log(selectedCity)
        setFormData((prev)=>({
          ...prev,
          city:selectedCity
        }))
      }

      //Basic Info inputs
      const handleInputChange = (e, name) => {
        let fieldName, fieldValue;
      
        // Check if e is an event (for regular inputs) or a value (for Material Tailwind Select)
        if (e.target) {
          
          fieldName = e.target.name;
          fieldValue = e.target.value;
        } else {
          
          fieldName = name;
          fieldValue = e;
        }
      
        console.log(fieldName, fieldValue);
      
        setFormData((prev) => ({
          ...prev,
          [fieldName]: fieldValue,
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
    


    const handleFileChange = (e, fieldName) => {
      const file = e.target.files[0];
    
      // console.log(file); // Log file details
    
      setFormData(prev => ({
        ...prev,
        [fieldName]: file || null, // Store different files separately
      }));
    };
    


return {allStates, getAllStates,getAllCities , getVacancey ,vacanceyQuestions, sendApplication , formData , handleAnswerChange, handleInputChange, handleCountryChange, handleFileChange,isSubmitting , allCities , handleChangeCity, isLoadingCities}
}

