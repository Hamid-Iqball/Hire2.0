/* eslint-disable react/prop-types */
import { useState } from "react";
import Select from "react-select";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "",
    borderColor: state.isFocused ? "#57A8FF" : "#B0BEC5", 
    borderWidth: state.isFocused?"2px":"1.5px",
    borderRadius: "0.375rem",
    boxShadow: "none",
  }),
  
  placeholder: () => ({
    display: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#2563eb"
      : state.isFocused
      ? "#bfdbfe"
      : "#fff",
    color: state.isSelected ? "#fff" : "#000",
    
  }),
  menu:(provided)=>({
    ...provided,
    zIndex:1000,
  })
};

function FloatingLabelSelect({ label, options }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="relative">
      <label
        className={`absolute left-2 text-sm transition-all duration-200 ${
          isFocused || isSelected
            ? "-top-2 text-blue-500 text-xs mx-1 z-10 bg-[#F4F7FA]"
            : "top-[9px] text-sm z-10 left-3 text-[#698192]"
        } 
        
        ${!isFocused?"text-[#979ea1]": "text-blue-500"}
        `}
      >
        {label}
      </label>
      <Select
        options={options}
        styles={customStyles}
        onFocus={() => setIsFocused(true)} // Float the label on focus
        onBlur={() => setIsFocused(false)} // Reset focus state
        onChange={() => setIsSelected(true)} // Update selection state
      />
    </div>
  );
}

export default FloatingLabelSelect;
