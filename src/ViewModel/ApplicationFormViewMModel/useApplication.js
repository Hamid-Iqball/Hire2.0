import { format, parseISO, isValid } from "date-fns";
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
      v_name:"",
      org_name:"",
      org_id:""
    })

      // // Handle country selection
      const handleCountryChange = (selected) => {
        console.log(selected)
        if (selected && selected.id) {
          getAllCities(selected.id);
        }
      // console.log(selected)
      setFormData(prev => ({
      ...prev,
      state: selected.id // Store the entire selected option
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
    


return {allStates, getAllStates,getAllCities , getVacancey ,vacanceyQuestions, sendApplication , formData , handleAnswerChange, handleInputChange, handleCountryChange, handleFileChange,isSubmitting , allCities , handleChangeCity, isLoadingCities , setFormData}
}

