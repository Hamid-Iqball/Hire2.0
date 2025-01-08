import { Button, Input, Textarea } from "@material-tailwind/react";
import FloatingLabelSelect from  "../Components/FloatingLabelSelect"
import { useNavigate } from "react-router";
import {motion} from "framer-motion"


function PersonalInformation() {


const navigate = useNavigate()

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const maritalStatusOptions = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
  ];

  const countryOption =[
    {value:"Pakistan", label:'Pakistan'},
    {value:"Germany", label:"Germany" }
  ]

  const cityOption =[
    {value:"Peshawar", label:"Peshawar"},
    {value:"Islamabad", label:"Islamabad"}
  ]

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 ">
    
    {/* Form */}
      <motion.form 
      initial={{x:-100, opacity:0}}
      animate={{x:0,opacity:100}}
      transition={{
        duration:0.7,
        ease:"easeInOut"

      }}
      className="grid gird-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 sm:gap-y-0 order-2 sm:order-1">
        <Input label="Name" color="blue"  />
        <Input label="Father Name" color="blue" />
        <Input label="Date-of-Birth" color="blue" />
        <FloatingLabelSelect label="Gender" options={genderOptions} />
        <FloatingLabelSelect label="Marital Status" options={maritalStatusOptions} />
        <Input label="CNIC" color="blue" />
        <FloatingLabelSelect label="Country" options={countryOption}/>
        <FloatingLabelSelect label='City' options={cityOption}/>
        <Input label="Contact #" color="blue"/>
        <Input label="Email" color="blue"/>
        <Textarea label="Current address" color="blue"/>
        <Textarea label="Permanat address" color="blue"/>
      </motion.form>

      {/* Image section */}
      <motion.div 
      initial={{y:-100, opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{
        duration:0.6,
        ease:"easeIn"
      }}
      className="flex justify-center items-center order-1 sm:order-2">
      <img src="/Images/personal.png" alt="image" className="w-2/3" />
      </motion.div>


      <div className="flex justify-start col-span-full items-start gap-5 order-last">
      <Button variant="outlined" size="sm" color="blue" >Update CV</Button>
      <Button variant="outlined" size="sm" color="blue" >Update Profile</Button>
      </div>

      <div className="order-last">
      <Button color="blue" size="sm" className="px-9 " onClick={()=>navigate("/updateProfile/educational")}>Next</Button>

      </div>
    </section>
  );
}

export default PersonalInformation;
