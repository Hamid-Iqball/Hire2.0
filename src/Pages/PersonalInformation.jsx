import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

function PersonalInformation() {
  const [files, setFiles] = useState([]);
  const [basicInfo, setBasicInfo] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const extractTextFromPdf = (text) => {
    try {
      // Extract email using regex
      const emailRegex = /[\w.-]+@[\w.-]+\.\w+/;
      const emailMatch = text.match(emailRegex);
      const email = emailMatch ? emailMatch[0] : "";
  
      // Extract name (handle simple formats like FirstName LastName)
      const nameRegex = /\b([A-Za-z]+)\s+([A-Za-z]+)\b/;
      const nameMatch = text.match(nameRegex);
  
      let firstName = "";
      let lastName = "";
  
      if (nameMatch) {
        firstName = nameMatch[1]; // First name
        lastName = nameMatch[2]; // Last name
      }
  
     
      // Update the form with extracted information
      setBasicInfo({
        title: "", // Leave title blank as it's not being used
        firstName,
        lastName,
        email,

      });
    } catch (error) {
      console.error("Error extracting information:", error);
      setError("Failed to extract information from PDF");
    }
  };
  
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setIsProcessing(true);
    setError("");

    if (!file) {
      setError("No file selected");
      setIsProcessing(false);
      return;
    }

    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file");
      setIsProcessing(false);
      return;
    }

    setFiles([file]);

   
    // Create a new FileReader instance
    const reader = new FileReader();

    // Set up the FileReader onload event handler
    reader.onload = async (e) => {
      try {
        const text = e.target.result;
        extractTextFromPdf(text);
        setIsProcessing(false);
      } catch (error) {
        console.error('Error reading PDF:', error);
        setError('Error reading PDF file');
        setIsProcessing(false);
        setFiles([]);
      }
    };

    // Set up the FileReader onerror event handler
    reader.onerror = () => {
      setError('Error reading file');
      setIsProcessing(false);
      setFiles([]);
    };

    // Read the file as text
    reader.readAsText(file);
  };

  
  // Handle drag and drop
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file) => {
    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file");
      return;
    }
    
    const input = document.getElementById('file-upload');
    if (input) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      input.files = dataTransfer.files;
      handleFileChange({ target: input });
    }
  };

  return (
    <section className="min-w-full sm:min-w-[70%] flex flex-col justify-start my-4 items-start p-6">
      <h1 className="font-bold">Autofill Application</h1>
      <p>Upload your resume/CV in seconds with the autofill option.</p>
      
      <form className="w-full flex flex-col gap-4">
        <div 
          className="mt-4 min-w-full p-6 py-14 border border-dashed border-gray-700 rounded-lg bg-white text-center text-gray-500"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <label
            htmlFor="file-upload"
            className="inline-block text-blue-500 rounded cursor-pointer font-semibold"
          >
            Upload your resume{" "}
            <span className="text-black font-normal">
              or Drag and drop it here
            </span>
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            accept="application/pdf"
            className="hidden"
            disabled={files.length>0}
          />
        </div>

        {error && (
          <div className="text-red-500 mt-2 p-2 bg-red-50 rounded">
            {error}
          </div>
        )}

        {isProcessing && (
          <div className="text-blue-500 mt-2 p-2 bg-blue-50 rounded">
            Processing PDF... Please wait.
          </div>
        )}

        {files.length > 0 && (
          <div className="mt-4 w-full bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Uploaded Files</h2>
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li key={index} className="text-gray-600">
                  {file.name}
                </li>
              ))}
            </ul>
            <button
              
              onClick={() => {
                setFiles([]);
                setBasicInfo({
                  title: "",
                  firstName: "",
                  lastName: "",
                  email: "",
                });
              }}
              className="text-red-400 mt-2"
            >
              Remove Resume
            </button>
          </div>
        )}

        <div className="flex flex-col gap-3 mt-3">
          <h1 className="font-bold">Basic Info</h1>
          <div className="grid grid-cols-1 sm:grid-cols-[0.2fr,1fr] gap-2">
            <Input
              label="Title"
              color="blue"
              className="bg-white"
              value={basicInfo.title}
              onChange={(e) => setBasicInfo({ ...basicInfo, title: e.target.value })}
            />
            <Input
              label="First Name"
              color="blue"
              className="bg-white"
              value={basicInfo.firstName}
              onChange={(e) => setBasicInfo({ ...basicInfo, firstName: e.target.value })}
            />
          </div>
          <Input
            label="Last Name"
            color="blue"
            className="bg-white"
            value={basicInfo.lastName}
            onChange={(e) => setBasicInfo({ ...basicInfo, lastName: e.target.value })}
          />
          <Input
            label="Email Address"
            color="blue"
            className="bg-white"
            value={basicInfo.email}
            onChange={(e) => setBasicInfo({ ...basicInfo, email: e.target.value })}
          />
        </div>
  
        <div className="mt-2 flex justify-start items-center flex-wrap gap-3 sm:gap-1">
          <Button className="mr-2 bg-white text-black border-black border w-44">
            Cancel
          </Button>
          <Button color="blue">Submit Application</Button>
        </div>
      </form>
    </section>
  );
}

export default PersonalInformation;