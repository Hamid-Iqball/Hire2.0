import { Button, Input, Textarea } from "@material-tailwind/react";
import FloatingLabelSelect from  "../Components/FloatingLabelSelect"


function PersonalInformation() {
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
    <section className="grid grid-cols-2 gap-4 mt-8 ">
    
      <form className="grid grid-cols-2 gap-x-8 gap-y-0">
        <Input label="Name" color="blue" />
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
      </form>

      <div className="flex justify-center items-center">
        <img src="/Images/personal.png" alt="image" className="w-2/3" />
      </div>
      <div className="flex justify-start col-span-full items-start gap-5">
      <Button variant="outlined" size="sm" color="blue" >Update CV</Button>
      <Button variant="outlined" size="sm" color="blue" >Update Profile</Button>
      </div>
    </section>
  );
}

export default PersonalInformation;
