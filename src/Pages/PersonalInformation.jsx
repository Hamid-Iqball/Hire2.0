import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";


function PersonalInformation() {
  const [files, setFiles] = useState([]);

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const uploadedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  // Handle file selection via input
  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  return (
    <section className="min-w-[60%] flex flex-col justify-start my-4 items-start p-6">
      <h1 className="font-bold">
        Autofill Application <span className="text-xs font-[500]">(optional)</span>
      </h1>
      <p>Upload your resume/cv in seconds with the autofill option.</p>

      <form className="w-full flex flex-col gap-4">
    
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          className="mt-4 min-w-full  p-6 py-14 border border-dashed border-gray-700 rounded-lg bg-white text-center text-gray-500"
        >
          <p className="mb-2">Drag and drop your file here, or</p>
          <label
            htmlFor="file-upload"
            className="inline-block  text-blue-500 rounded cursor-pointer font-semibold "
          >
           Upload your resume <span className="text-black font-normal">or Drag and drop it here</span>
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Display Uploaded Files */}
        {files.length > 0 && (
          <div className="mt-4 w-full  bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Uploaded Files</h2>
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li key={index} className="text-gray-600">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-3 mt-3">

        <h1 className="font-bold">Basic Info</h1>
        <div className="grid grid-cols-[0.2fr,1fr] gap-2">

        <Input label="Title" color="blue" className="bg-white"/>
        <Input label="first Name" color='blue' className="bg-white"/>
        </div>
        <Input label="Last Name" color="blue" className="bg-white"/>
        <Input label="Email address" color="blue" className="bg-white"/>
        <div className="grid grid-cols-[0.2fr, 1fr]">
        <Input label="Country code" color="blue" className="bg-white"/>
        </div>
        </div>



        <div className="mt-3">
        <h1 className="font-bold">Attachment Information</h1>
    <div className="w-48 p-4 border border-dashed border-gray-700 rounded-lg bg-white flex justify-center items-center text-gray-500">
      <label
        htmlFor="file-upload"
        className="cursor-pointer"
      >
        <span className="text-blue-500 mr-1 font-semibold">
          Browse
          </span>
           Resume
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={(e) => {
          const uploadedFile = e.target.files[0]; // Get the single selected file
          if (uploadedFile) {
            setFiles([uploadedFile]); // Replace the existing file with the new one
          }
        }}
      />
    </div>
  {/* Display Uploaded File Name */}
      {files.length > 0 && (
        <div className="mt-4 w-full bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Uploaded File</h2>
          <ul className="space-y-2">
            <li className="text-gray-600">{files[0].name}</li>
          </ul>
          <button
            onClick={() => setFiles([])} // Clear the file
            className="text-red-500 hover:underline mt-2"
          >
            Remove File
          </button>
        </div>
      )}
    </div>


        <div className="mt-2 flex justify-start items-center flex-wrap gap-2"> 
          <Button className="mr-2 bg-white text-black border-black border ">
            Cancel
          </Button>
          <Button className="bg-blue-500 text-white" >
            Submit Application
            </Button>
        </div>
      </form>
    </section>
  );
}

export default PersonalInformation;
