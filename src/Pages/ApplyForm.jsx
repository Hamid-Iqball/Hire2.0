import { Input, Option, Select } from "@material-tailwind/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import FloatingLabelSelect from "../Components/FloatingLabelSelect";
import { useApplication } from "../ViewModel/ApplicationFormViewMModel/useApplication";
import { useEffect, useState } from "react";

function ApplyForm() {
  const [fileName, setFileName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { jobTitle, location: JobLocation } = location.state || {};

  const { getAllStates, allStates, isLoading, getVacancey, vacanceyQuestions } = useApplication();

  useEffect(() => {
    getAllStates();
    getVacancey();
  }, [getAllStates, getVacancey]);

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  // Check if vacanceyQuestions is available and contains locations
  const locations = vacanceyQuestions?.locations || [];

  const optionCountries = allStates.map((country) => ({
    value: country.id,
    label: country.name,
  }));

  // Handle country selection
  const handleCountryChange = (selected) => {
    setSelectedCountry(selected);
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

        <form className="flex justify-center mx-auto flex-col items-center gap-8 w-3/5">
          <div className="flex flex-col gap-3 mt-3 w-full">
            <h1 className="font-bold">Basic Info</h1>
            <div className="grid grid-cols-1 md:grid-cols-[0.2fr,1fr] gap-2">
              <Input label="Title" color="blue" className="bg-white text-gray-700" />
              <Input label="First Name" color="blue" className="bg-white text-gray-700" />
            </div>
            <Input label="Last Name" color="blue" className="bg-white text-gray-700" />
            <Input label="Email Address" color="blue" className="bg-white text-gray-700" />

            <FloatingLabelSelect
              label="Select Country"
              options={optionCountries}
              onChange={handleCountryChange}
              isDisabled={isLoading}
              value={selectedCountry}
            />
          </div>

          <div className="flex flex-col gap-3 mt-3 w-full">
            <h1 className="font-bold">Questionnaire</h1>
            <p>Select Where you want to Apply</p>
            {locations.length > 0 ? (
              <Select label="Select Location" color="blue" className="bg-white text-gray-700">
                {locations.map((el) => (
                  <Option key={el.id} value={el.city_name}>
                    {el.city_name}
                  </Option>
                ))}
              </Select>
            ) : (
              <p className="text-red-500">No locations available</p>
            )}
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
                  <p className="font-semibold text-gray-700">
                    Selected File: {fileName}
                  </p>
                ) : (
                  <p className="font-semibold text-gray-500">No file selected</p>
                )}
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default ApplyForm;
