import { Button, Checkbox, Input, Option, Radio, Select, Textarea } from "@material-tailwind/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import FloatingLabelSelect from "../Components/FloatingLabelSelect";
import { useApplication } from "../ViewModel/ApplicationFormViewMModel/useApplication";
import { useEffect } from "react";


import CustomDatePicker from "../Components/customDatePicker";
import { useSubmitApplication } from "../ViewModel/ApplicationFormViewMModel/useSubmitApplication";
// import toast from "react-hot-toast";


function ApplyForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { jobId, jobTitle, location: JobLocation, orgDetails  } = location.state || {};
  const organaisation = orgDetails[0]
  const {org_name, id:orgId} = organaisation

  const {
    getAllStates,
    allStates,
    isLoading,
    getVacancey,
    handleChangeCity,
    vacanceyQuestions,
    allCities,
    formData,
    handleCountryChange,
    handleInputChange,
    handleFileChange,
    handleAnswerChange,
    isSubmitting,
    isLoadingCities,
    
  } = useApplication();
  const {handleSubmit} = useSubmitApplication({orgId,org_name, jobTitle , jobId})

  useEffect(() => {
    getAllStates();
    getVacancey(jobId);
  }, [getAllStates, getVacancey, jobId]);

 
  
  
  const locations = vacanceyQuestions?.locations || [];
  const questions = vacanceyQuestions?.questionnaire || [];

  const optionCountries = allStates.map((country) => ({
    value: country.id,
    label: country.name,
    id:country.value
  }
));



  const optionCities = allCities.map((city)=>({
    value:city.id,
    label: city.city_name,
    valueName:city.id
  }))




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
          {/* Form fields */}
          <div className="flex flex-col gap-3 mt-3 w-full">
            <h1 className="font-bold">Profile Info</h1>
              {/* Profile information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="relative">
                <Input 
                  label="Name" 
                  color="blue" 
                  type="text" 
                  name="name" 
                  onChange={handleInputChange} 
                  className='bg-white text-gray-700 focus:border-2 focus:border-blue-500'
             
          
                />
              
              </div>

            <div className="relative">
                <Input 
                  label="Father Name" 
                  name="father_name" 
                  color="blue" 
                  type="text" 
                  onChange={handleInputChange} 
                  className="bg-white text-gray-700 focus:border-2 focus:border-blue-500"
                            labelProps={{
                    
                  }}
                />
              </div>
            

              <CustomDatePicker 
                label="Date of Birth" 
                name="dob" 
                onChange={handleInputChange} 
                value={formData.dob}
       
              
              />
              

            <Select 
                  label="Gender" 
                  name="gender" 
                  onChange={(value) => handleInputChange(value,"gender")} 
                  className="bg-white text-gray-700"
         
                >
                  <Option value="1">Male</Option> 
                  <Option value="0">Female</Option> 
                  <Option value="2">Other</Option> 
                </Select>



            <Input label="National ID" type="number" name="cnic" onChange={handleInputChange}  color="blue" className="bg-white text-gray-700"/>

            <Select 
            label="marital_status"
            name="marital_status"
            onChange={(value)=>handleInputChange(value,"marital_status")}
            className="bg-white text-gray-700"
    
            >
              <Option value="single">Single</Option>
              <Option value="married">married</Option>
              <Option value="divorced">divorced</Option>
            </Select>
           
  
            <FloatingLabelSelect
              label="Select Country"
              options={optionCountries}
              onChange={handleCountryChange}
              isDisabled={isLoading}
              
              value={optionCountries.find(country=>country.value=== formData.state
              )}
              />

            <FloatingLabelSelect 
              label="Select City" 
              options={optionCities} 
              onChange={handleChangeCity} 
              isDisabled={isLoadingCities} 
              
              value={optionCities.find(city => city.value === formData.city) || null} // Convert city ID to object
            />


            <Input type="tel" label="Phone No" name="phone_no" color="blue" className="bg-white text-gray-700"  onChange={handleInputChange} />
            <Input type="email" label="Email" name="email" color="blue" className="bg-white text-gray-700"  onChange={handleInputChange} />
            <Textarea type="text" label=" Postal Address" name="postal_add" color="blue" className="bg-white text-gray-700"  onChange={handleInputChange}/>
            <Textarea type="text" label=" Permanent Address" name="permanent_add"  color="blue" className="bg-white text-gray-700" onChange={handleInputChange} />
            </div>
          </div>

        {/* Questionnaire  */}
     


{/* Replace the existing questionnaire section with this updated code */}
<div className="flex flex-col gap-3 mt-3 w-full">
  <h1 className="font-bold">Questionnaire</h1>
  
  {/* Location selection */}
  {locations && locations.length > 0 && (
    <div className="mb-4">
      <p>Select a location where you want to Apply</p>
      <Select
        label="Select Location"
        value={formData.selectedLocation}
        onChange={(value) => handleInputChange(value,'city_id')}
        
        color="blue"
        className="bg-white text-gray-700"
      >
        {locations.map((el) => (
          <Option key={el.id} value={el.id}>
            {el.city_name}
          </Option>
        ))}
      </Select>
    </div>
  )}

  {/* Questions section */}
  {questions.map((question, index) => {
  if (!question) return null;

  const { id: questionId, question: questionText, question_type, options } = question;
  const questionData = formData.questionnaire?.find((q) => q.question === questionId) || { answers: [] };

  switch (question_type) {
    case "Input Type":
      return (
        <div key={questionId} className="mb-4">
          <p className="mb-2">{`${index + 1}. ${questionText}`}</p>
          <Input
            color="blue"
            label="Answer"
            value={questionData.answers[0] || ""}
            onChange={(e) => handleAnswerChange(questionId, e.target.value, question_type)}
            
            className="bg-white text-gray-700"
          />
        </div>
      );

    case "Text Area":
      return (
        <div key={questionId} className="mb-4">
          <p className="mb-2">{`${index + 1}. ${questionText}`}</p>
          <Textarea
            color="blue"
            label="Answer"
            value={questionData.answers[0] || ""}
            
            onChange={(e) => handleAnswerChange(questionId, e.target.value, question_type)}
            className="bg-white text-gray-700 border-2"
          />
        </div>
      );

      case "Checkboxes":
        return (
          <div key={questionId} className="mb-4">
            <p className="mb-2">{`${index + 1}. ${questionText}`}</p>
            {options?.map((option) => (
              <div key={option.id} className="flex items-center gap-2 mb-2">
                <Checkbox
                  id={`${questionId}-${option.id}`}
                  checked={
                    formData.questionnaire
                      ?.find((q) => q.question === questionId)
                      ?.answers?.includes(option.id) || false
                  }
                  
                  onChange={() => handleAnswerChange(questionId, option.id, question_type)}
                  color="blue"
                />
                <label htmlFor={`${questionId}-${option.id}`}>{option.option_text}</label>
              </div>
            ))}
          </div>
        );
      

    case "Radio Buttons":
      return (
        <div key={questionId} className="mb-4">
          <p className="mb-2">{`${index + 1}. ${questionText}`}</p>
          {options?.map((option) => (
            <div key={option.id} className="flex items-center gap-2 mb-2">
              <Radio
                id={`${questionId}-${option.id}`}
                name={`question-${questionId}`}
                value={option.id}
                checked={questionData.answers[0] === option.id}
                onChange={() => handleAnswerChange(questionId, option.id, question_type)}
                color="blue"
              />
              <label htmlFor={`${questionId}-${option.id}`}>{option.option_text}</label>
            </div>
          ))}
        </div>
      );

    case "Dropdown List":
      return (
        <div key={questionId} className="mb-4">
          <p className="mb-2">{`${index + 1}. ${questionText}`}</p>
          <Select
            color="blue"
            value={questionData.answers[0] || ""}
            label="Select Option"
            onChange={(value) => handleAnswerChange(questionId, value, question_type)}
            className="bg-white text-gray-700 mt-1"
          >
            {options?.map((option) => (
              <Option key={option.id} value={option.id}>
                {option.option_text}
              </Option>
            ))}
          </Select>
        </div>
      );

    default:
      return null;
  }
})}





</div>

          <div className="place-self-start">
  <h3 className="font-bold mb-5">Attachment Info</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* Resume Upload */}
    <div className="flex justify-start gap-2 items-center">
      <div className="relative flex justify-between">
        <input
          type="file"
          id="cv"
          name="cv"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => handleFileChange(e, "cv")}
        />
        <label htmlFor="resumeInput" className="border border-dashed border-blue-500 rounded-md p-4 bg-white cursor-pointer">
          Browse Resume
        </label>
      </div>
      <div className="mt-2">
        {formData.cv ? (
          <p className="font-semibold text-gray-700">Selected File: {formData.cv.name}</p>
        ) : (
          <p className="font-semibold text-gray-500">No file selected</p>
        )}
      </div>
    </div>

    {/* Profile Image Upload */}
    <div className="flex justify-start gap-2 items-center">
      <div className="relative flex justify-between">
        <input
          type="file"
          id="applicant_img"
          name="applicant_img"
          accept=".pdf, .doc, .docx"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => handleFileChange(e, "applicant_img")}
        />
        <label htmlFor="profileImageInput" className="border border-dashed border-blue-500 rounded-md p-4 bg-white cursor-pointer">
          Upload Profile Image
        </label>
      </div>
      <div className="mt-2">
        {formData.applicant_img ? (
          <p className="font-semibold text-gray-700">Selected File: {formData.applicant_img.name}</p>
        ) : (
          <p className="font-semibold text-gray-500">No file selected</p>
        )}
      </div>
    </div>

  </div>
</div>




          <div className="flex justify-start items-center gap-3 mt-3 place-self-start">
            <Button type="reset" className="bg-white text-customBlue-700 p-4 px-8">
              Cancel
            </Button>
            <Button type="submit" loading={isSubmitting} className="bg-customBlue-400 p-4 px-12" disabled={isSubmitting}>
              Submit Application
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ApplyForm;