/* eslint-disable react/prop-types */

import { useState } from "react";
import Select from "react-select";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? "#57A8FF" : "#B0BEC5",
    borderWidth: "1.5px",
    borderRadius: "0.375rem",
    boxShadow: "none",
    minHeight: "40px",
    backgroundColor: "#fff",
  }),
  placeholder: () => ({
    display: "block",
    color: "#698192",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#2563eb"
      : state.isFocused
      ? "#bfdbfe"
      : "#fff",
    color: state.isSelected ? "#fff" : "#333",
    fontWeight: state.isSelected ? "bold" : "normal",
    zIndex: 9999,
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
    backgroundColor: "#fff",
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
};

function FloatingLabelSelect({ label, options, onChange, value, isDisabled, required }) {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (selected) => {
    setError(false); // Clear error when user selects a value
    onChange?.(selected);
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (required && !value) {
        setError(true); // Show error if required and no value selected
      }
    }, 0); // Delay to ensure latest value is used
  };
  

  return (
    <div className="relative min-h-[70px]">
      <label
        className={`absolute left-2 text-sm transition-all duration-200 ${
          isFocused || value
            ? "-top-2 text-blue-500 text-xs mx-1 z-10 bg-white px-1"
            : "top-[9px] text-sm z-10 left-3 text-[#698192]"
        } ${!isFocused ? "text-[#979ea1]" : "text-blue-500"}`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Select
        options={options}
        styles={customStyles}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onChange={handleChange}
        isDisabled={isDisabled}
        isClearable
        menuPortalTarget={document.body}
      />
      {error && <p className="text-red-500 text-xs mt-1">This field is required</p>}
    </div>
  );
}

export default FloatingLabelSelect;
