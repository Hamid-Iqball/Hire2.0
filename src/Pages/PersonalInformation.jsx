import { Button, Input } from "@material-tailwind/react";
import { useState } from "react"
import * as pdfjsLib from "pdfjs-dist"


function PersonalInformation() {
  const [files, setFiles] = useState([]);
  const [basicInfo,setBasicInfo] = useState({
    title:"",
    firstName:"",
    lastName:"",
    email:""
  })

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const uploadedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  // Handle file selection via input
  const handleFileChange = async (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);

    const file = uploadedFiles[0];
    if(file && file.type === "applicationn/pdf"){
      const pdfData = await extractTextFromPdf(file)
      populateBasicInfo(pdfData)
    }

  };


    const extractTextFromPdf = async (file)=>{
    const arrayBuffer = await file.arrayBuffer()
    const pdfDoc = await pdfjsLib.getDocument({data:arrayBuffer}).promise;

      let text = ""
      for(let i=1; i<=pdfDoc.numPages; i++){
        const page = await pdfDoc.getPage(i);
        const content = await page.getTextContent();
        text +=content.items.map((item)=>item.str).join(" ")

      }

      return text;

    }



  const populateBasicInfo =(pdfText)=>{
    //Regex or string matching to extract content from pdf
    const titleMatch = pdfText.match(/Title:\s*(\w+)/i);
    const firstNameMatch = pdfText.match(/First Name:\s*(\w+)/i);
    const lastNameMatch = pdfText.match(/Last Name:\s*(w+)/i);
    const emailMatch = pdfText.match(/Email: \s*([\w.-]+@[\w.-]+)/i)


    setBasicInfo({
      title:titleMatch?.[1] || "",
      firstName:firstNameMatch?.[1]||"",
      lastName:lastNameMatch?.[1] || "",
      email:emailMatch?.[1]||""
    })
  }

  return (
    <section className="min-w-full sm:min-w-[70%]  flex flex-col justify-start my-4 items-start p-6">
      <h1 className="font-bold">
        Autofill Application 
      </h1>
      <p>Upload your resume/cv in seconds with the autofill option.</p>
      <form className="w-full flex flex-col gap-4">
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          className="mt-4 min-w-full  p-6 py-14 border border-dashed border-gray-700 rounded-lg bg-white text-center text-gray-500"
        >
          
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
            <button onClick={()=>setFiles([])} className="text-red-400 ">Remove Resume</button>
          </div>
        )}

        <div className="flex flex-col gap-3 mt-3">

        <h1 className="font-bold">Basic Info</h1>
        <div className="grid grid-cols-1 sm:grid-cols-[0.2fr,1fr] gap-2">

        <Input label="Title" color="blue" className="bg-white" value={basicInfo.title}/>
        <Input label="first Name" color='blue' className="bg-white" value={basicInfo.firstName}/>
        </div>
        <Input label="Last Name" color="blue" className="bg-white" value={basicInfo.lastName}/>
        <Input label="Email address" color="blue" className="bg-white" value={basicInfo.email}/>
        <div className="grid grid-cols-[0.2fr, 1fr]">
        <Input label="Country code" color="blue" className="bg-white"/>
        </div>
        </div>



        <div className="mt-2 flex justify-start items-center flex-wrap gap-3 sm:gap-1"> 
          <Button className="mr-2 bg-white text-black border-black border w-44 " type="reset">
            Cancel
          </Button>
          <Button className="bg-blue-600 text-white" >
          Submit Application
          </Button>
        </div>
      </form>
    </section>
  );
}

export default PersonalInformation;
