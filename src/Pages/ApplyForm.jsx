import { Button, Checkbox, Input, Option, Radio, Select, Textarea } from "@material-tailwind/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import FloatingLabelSelect from "../Components/FloatingLabelSelect";
import { useApplication } from "../ViewModel/ApplicationFormViewMModel/useApplication";
import { useEffect, useState } from "react";


function ApplyForm() {
  const [fileName, setFileName] = useState("");
  // const [selectedCountry, setSelectedCountry] = useState(null);
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
  const location = useLocation();
  const navigate = useNavigate();
  const {jobId, jobTitle, location: JobLocation } = location.state || {};

  const { getAllStates, allStates, isLoading, getVacancey, vacanceyQuestions } = useApplication();

  useEffect(() => {
    getAllStates();
    getVacancey(jobId);
  }, [getAllStates, getVacancey,jobId]);



  // Check if vacancyQuestions is available and contains locations
  const locations = vacanceyQuestions?.locations || [];
  const questions = vacanceyQuestions?.questionnaire || [];

  console.log('questions', questions)

  const optionCountries = allStates.map((country) => ({
    value: country.id,
    label: country.name,
  }));

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
  const handleSubmit =()=>{

  }

  return (
    <>
      <header className="flex justify-center items-center p-10 bg-[#170909] text-white">
        <div>
          <h1 className="text-3xl sm:text-4xl text-center font-[300] mb-2">{jobTitle}</h1>
          <div className="flex gap-1 justify-center items-center">
            <MdLocationPin size={18} /> <p>{JobLocation}</p>
          </div>
        </div>
      </header>
      <section className="bg-[#f4f7fa] p-4 mx-6">
        <span
          className="flex justify-start items-center gap-2 my-4 w-48 cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out"
          onClick={() => navigate("/")}
        >
          <FaArrowLeftLong size="20" />{" "}
          <h1 className="font-bold">All Jobs Openings</h1>
        </span>

        <form className="flex justify-center mx-auto flex-col items-center gap-8 w-[90%] md:w-3/5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 mt-3 w-full">
            <h1 className="font-bold">Basic Info</h1>
            <div className="grid grid-cols-1 md:grid-cols-[0.2fr,1fr] gap-2">
              <Input label="Title" color="blue"
               name="title"
               onChange={handleInputChange}
               className="bg-white text-gray-700" />
              <Input label="First Name" name='firstName' 
              color="blue"
              onChange={handleInputChange}
              className="bg-white text-gray-700" />
            </div>
            <Input label="Last Name" name="lastName" 
            color="blue" 
            onChange={handleInputChange}
            className="bg-white text-gray-700" />
            <Input label="Email Address"  name="email" 
            onChange={handleInputChange}
            color="blue" className="bg-white text-gray-700" />

          <FloatingLabelSelect
                label="Select Country"
                options={optionCountries}
                onChange={handleCountryChange}
                isDisabled={isLoading}
                value={formData.country} // Pass the selected value from formData
              />
          </div>

          <div className="flex flex-col gap-3 mt-3 w-full">
            <h1 className="font-bold">Questionnaire</h1>
            
            {locations.length > 0 ? (

              <>
              <p>Select a location where you want to Apply</p>
              <Select label="Select Location" value={formData.selectedLocation} color="blue" className="bg-white text-gray-700">
                {locations.map((el) => (
                  <Option key={el.id} value={el.city_name}>
                    {el.city_name}
                  </Option>
                ))}
              </Select>
                </>
            ) : (
              <></>
            )}

            <p>Please fill the questionnaire below</p>
            {questions.map((question,index) => {
              const { id,  question: questionText, question_type, options } = question;
              switch (question_type) {
                case "Input Type":
                  return (
                    <div key={id} className="mb-2">
                      <p>{`${index+1 }. ${questionText}`}</p>
                      <Input color="blue" label="Answer" 
                      onChange={(e)=>handleAnswerChange(id,e.target.value, question_type)}
                      className="bg-white text-gray-700"/>
                    </div>
                  );
                case "Text Area":
                  return (
                    <div key={id} className="mb-2">
                    <p>{`${index+1 }. ${questionText}`}</p>
                      <Textarea color="blue" label="Answer" 
                      onChange={(e)=>handleAnswerChange(id,e.target.value, question_type)}
                      className="bg-white text-gray-700 border-2" />
                    </div>
                  );
                case "Checkboxes":
                  return (
                    <div key={id} className="mb-2">
                      <p>{`${index+1 }. ${questionText}`}</p>
                      {options.map((option) => (
                        <div key={option.id} className="flex items-center gap-2">
                          <Checkbox
                            type="checkbox"
                            id={option.id}
                            name={option.id}
                            value={option.question_idid}
                            onChange={(e)=>handleAnswerChange(id,e.target.value,question_type)}
                            color="blue"
                          />
                          <label htmlFor={option.id}>{option.option_text}</label>
                        </div>
                      ))}
                    </div>
                  );

                  case "Radio Buttons":
                    return (
                      <div key={id} className="mb-2">
                       <p>{`${index+1 }. ${questionText}`}</p>
                        {options.map((option) => (
                          <div key={option.id} className="flex items-center gap-2">
                            
                            <Radio id={option.id} name={id} value={option.id} 
                            onChange={(e)=>handleAnswerChange(id,e.target.value,question_type)}
                            color="blue" />
                            <label htmlFor={option.id}>{option.option_text}</label>
                          </div>
                        ))}
                      </div>
                    );
                  

                    case "Dropdown List":
                      return(
                        <div key={id} className="mb-2">
                         <p >{`${index+1 }. ${questionText}`}</p>
                          <Select color="blue" label="Location"
                          onChange={(e)=>handleAnswerChange(id,e.target.value,question_type)}
                          className="bg-white text-gray-700 mt-1" >
                        {options.map((option)=>(
                          <Option key={option.id} value={option.option_text} >
                              {option.option_text}
                          </Option>

                        ))}

                          </Select>
                           </div>
                      )
                default:
                  return null;
              }
            })}
          </div>

          <div className="place-self-start">
            <h3 className="font-bold mb-5">Attachment Info</h3>

            <div className="flex justify-between gap-2 items-center">
              <div className="relative flex justify-between">
                <input
                  type="file"
                  id="fileInput"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  placeholder="Browse Resume"
                  onChange={handleFileChange}
                />

                <label
                  htmlFor="fileInput"
                  className="border border-dashed border-blue-500 rounded-md p-4 bg-white cursor-pointer"
                >
                  Browse Resume
                </label>
              </div>

              <div className="mt-2">
                {fileName ? (
                  <p className="font-semibold text-gray-700">Selected File: {fileName}</p>
                ) : (
                  <p className="font-semibold text-gray-500">No file selected</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-3 mt-3 place-self-start">
                <Button type= "reset"
                className="bg-white text-customBlue-700 p-4 px-8">
                  canel
                </Button>
                <Button type='submit' className="bg-customBlue-400 text p-4 px-12"> Submit Application </Button>
          </div>

        </form>
      </section>
    </>
  );
}

export default ApplyForm;
