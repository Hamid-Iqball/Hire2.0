/* eslint-disable react/prop-types */

import { useState } from "react";
import Select from "react-select";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? "#57A8FF" : "#B0BEC5",
    borderWidth: "2px",
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

function FloatingLabelSelect({ label, options, onChange, value, isDisabled }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (selected) => {
    onChange?.(selected);
    console.log(selected)
  };

  return (
    <div className="relative min-h-[50px]">
      <label
        className={`absolute left-2 text-sm transition-all duration-200 ${
          isFocused || value
            ? "-top-2 text-blue-500 text-xs mx-1 z-10 bg-white px-1"
            : "top-[9px] text-sm z-10 left-3 text-[#698192]"
        } ${!isFocused ? "text-[#979ea1]" : "text-blue-500"}`}
      >
        {label}
      </label>
      <Select
        options={options}
        styles={customStyles}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        isDisabled={isDisabled}
        isClearable
        menuPortalTarget={document.body}
      />
    </div>
  );
}

export default FloatingLabelSelect;