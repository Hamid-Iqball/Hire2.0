import { Button, Checkbox, Input, Option, Radio, Select, Textarea } from "@material-tailwind/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import FloatingLabelSelect from "../Components/FloatingLabelSelect";
import { useApplication } from "../ViewModel/ApplicationFormViewMModel/useApplication";
import { useEffect } from "react";
// import toast from "react-hot-toast";


function ApplyForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { jobId, jobTitle, location: JobLocation, orgDetails  } = location.state || {};


  const organaisation = orgDetails[0]
  const {org_name, id:orgId} = organaisation

// console.log(org_name, orgId)
  const {
    getAllStates,
    allStates,
    isLoading,
    getVacancey,
    // getAllCities,
    handleChangeCity,
    vacanceyQuestions,
    allCities,
    formData,
    handleCountryChange,
    handleInputChange,
    handleFileChange,
    handleAnswerChange,
 
    isSubmitting,
    sendApplication,
    isLoadingCities
  } = useApplication();

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
    label: city.city_name
  }))

 console.log('cvvvvvvv' ,formData.questionnaire)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Required fields validation
    // const requiredFields = {
    //   name: "Name",
    //   father_name: "Father's Name",
    //   dob: "Date of Birth",
    //   gender: "Gender",
    //   cnic: "National ID",
    //   marital_status: "marital_status",
    //   country: "Country",
    //   city: "City",
    //   phone_no: "Phone Number",
    //   email: "Email",
    //   postal_add: "Postal Address",
    //   permanent_add: "Permanent Address"
    // };
  
    // // Check required fields
    // const missingFields = Object.entries(requiredFields)
    //   .filter(([key]) => !formData[key])
    //   .map(([_, label]) => label);
  
    // if (missingFields.length > 0) {
    //   toast.error(`Please fill in the following required fields: ${missingFields.join(", ")}`);
    //   return;
    // }
  
    // // Validate file uploads
    // if (!formData.resume) {
    //   toast.error("Please upload your resume");
    //   return;
    // }
  
    // if (!formData.profileImage) {
    //   toast.error("Please upload your profile image");
    //   return;
    // }
  
    // // Validate questionnaire
    // if (locations.length > 0 && !formData.selectedLocation) {
    //   toast.error("Please select a location where you want to apply");
    //   return;
    // }
  
    // // Check if all required questions are answered
    // const unansweredQuestions = questions
    //   .filter(question => !formData.questionnaire[question.id])
    //   .map(question => question.question);
  
    // if (unansweredQuestions.length > 0) {
    //   toast.error("Please answer all questions in the questionnaire");
    //   return;
    // }
  
    // // Prepare form data for submission
    // const submitFormData = new FormData();
  
    // // Add basic info
    // Object.keys(requiredFields).forEach(field => {
    //   if (field === 'country') {
    //     submitFormData.append('country', formData.country.id);
    //   } else if (field === 'city') {
    //     submitFormData.append('city', formData.city.value);
    //   } else {
    //     submitFormData.append(field, formData[field]);
    //   }
    // });
  
    // // Add job specific info
    // submitFormData.append('jobId', jobId);
    // submitFormData.append('jobTitle', jobTitle);
  
    // // Add location preference if exists
    // if (formData.selectedLocation) {
    //   submitFormData.append('preferredLocation', formData.selectedLocation);
    // }
  
    // // Add questionnaire responses
    // const questionnaireResponses = questions.map(question => ({
    //   questionId: question.id,
    //   type: question.question_type,
    //   answer: formData.questionnaire[question.id]?.value || "",
    // }));
  
    // submitFormData.append('questionnaire', JSON.stringify(questionnaireResponses));
  
    // // Add files
    // submitFormData.append('resume', formData.resume);
    // submitFormData.append('profileImage', formData.profileImage);
  
    // try {
    //   // Show loading state
    //   toast.loading("Submitting your application...", {
    //     id: "applicationSubmission",
    //   });
  
    //   // Send the application
    //   await sendApplication(submitFormData);
  
    //   // Show success message
    //   toast.success("Your application has been submitted successfully", {
    //     id: "applicationSubmission",
    //   });
  
    //   // Navigate back to jobs page
    //   navigate("/");
    // } catch (error) {
    //   // Handle specific error cases
    //   let errorMessage = "Failed to submit application. Please try again.";
  
    //   if (error.response) {
    //     switch (error.response.status) {
    //       case 413:
    //         errorMessage = "Files are too large. Please upload smaller files.";
    //         break;
    //       case 415:
    //         errorMessage = "Invalid file format. Please upload supported file types.";
    //         break;
    //       case 429:
    //         errorMessage = "Too many attempts. Please try again later.";
    //         break;
    //       default:
    //         if (error.response.data?.message) {
    //           errorMessage = error.response.data.message;
    //         }
    //     }
    //   }
  
    //   toast.error(errorMessage, {
    //     id: "applicationSubmission",
    //   });
    //   console.error("Application submission error:", error);
    // }
  };
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
              <Input label="Name" color="blue" type="text" name="name" onChange={handleInputChange} className="bg-white text-gray-700" />
              <Input label="Father Name" name="father_name" color="blue" type="text" onChange={handleInputChange} className="bg-white text-gray-700" />
               <Input label="Date of Birth" name="dob" color="blue" type='text' onChange={handleInputChange} className="bg-white text-gray-700" />


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



            <Input label="National ID" type="number" name="cnic" onChange={handleInputChange} color="blue" className="bg-white text-gray-700"/>

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
              value={formData.country}
              />

            <FloatingLabelSelect 
            label="Select City" 
            options={optionCities}
             onChange={handleChangeCity} 
             value={formData.city} 
             disabled={isLoadingCities}
             />

            <Input type="tel" label="Phone No" name="phone_no" color="blue" className="bg-white text-gray-700" onChange={handleInputChange} />
            <Input type="email" label="Email" name="email" color="blue" className="bg-white text-gray-700" onChange={handleInputChange} />
            <Textarea type="text" label=" Postal Address" name="postal_add" color="blue" className="bg-white text-gray-700" onChange={handleInputChange}/>
            <Textarea type="text" label=" Permanent Address" name="permanent_add" color="blue" className="bg-white text-gray-700" onChange={handleInputChange} />
            </div>
          </div>

        {/* Questionnaire  */}
          <div className="flex flex-col gap-3 mt-3 w-full">
            <h1 className="font-bold">Questionnaire</h1>
            {locations.length > 0 ? (
              <>
                <p>Select a location where you want to Apply</p>
                <Select
                  label="Select Location"
                  value={formData.selectedLocation}
                  onChange={(value) => handleAnswerChange('location', value, 'location')}
                  color="blue"
                  className="bg-white text-gray-700"
                >
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
            {questions.map((question, index) => {
              const { id:questionId, question: questionText, question_type, options } = question;
              switch (question_type) {
                case "Input Type":
                  return (
                    <div key={questionId} className="mb-2">
                      <p>{`${index + 1}. ${questionText}`}</p>
                      <Input color="blue" label="Answer" onChange={(e) => handleAnswerChange(questionId, e.target.value, question_type)} className="bg-white text-gray-700" />
                    </div>
                  );
                case "Text Area":
                  return (
                    <div key={questionId} className="mb-2">
                      <p>{`${index + 1}. ${questionText}`}</p>
                      <Textarea color="blue" label="Answer" onChange={(e) => handleAnswerChange(questionId, e.target.value, question_type)} className="bg-white text-gray-700 border-2" />
                    </div>
                  );
                case "Checkboxes":
                  return (
                    <div key={questionId} className="mb-2">
                      <p>{`${index + 1}. ${questionText}`}</p>
                      {options.map((option) => (
                        <div key={option.id} className="flex items-center gap-2">
                          <Checkbox
                            type="checkbox"
                            id={option.id}
                            name={option.id}
                            value={option.id}
                            onChange={(e) => handleAnswerChange(questionId, e.target.value, question_type)}
                            color="blue"
                          />
                          <label htmlFor={option.id}>{option.option_text}</label>
                        </div>
                      ))}
                    </div>
                  );
                case "Radio Buttons":
                  return (
                    <div key={questionId} className="mb-2">
                      <p>{`${index + 1}. ${questionText}`}</p>
                      {options.map((option) => (
                        <div key={option.id} className="flex items-center gap-2">
                          <Radio id={option.id} name={questionId} value={option.question_id} onChange={(e) => handleAnswerChange(questionId, e.target.value, question_type)} color="blue" />
                          <label htmlFor={option.id}>{option.option_text}</label>
                        </div>
                      ))}
                    </div>
                  );
                case "Dropdown List":
                  // Here in the dropDown list i am passing value instead of "e" in onChange handler this is because of the Material tailwind css and some other UI libraries in custom dropdown does not have "e".
                  return (
                    <div key={questionId} className="mb-2">
                      <p>{`${index + 1}. ${questionText}`}</p>
                      <Select color="blue" value={formData.questionnaire[questionId]?.value || ""} label="Location" onChange={(value) => handleAnswerChange(questionId, value, question_type)} className="bg-white text-gray-700 mt-1">
                        {options.map((option) => (
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