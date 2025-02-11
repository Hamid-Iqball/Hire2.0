/* eslint-disable react/prop-types */
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parseISO } from "date-fns";

const CustomDatePicker = ({ label, name, onChange, value }) => {
  const [selectedDate, setSelectedDate] = useState(value ? parseISO(value) : null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date, name); // Pass to handler (will format inside `handleInputChange`)
  };

  return (
    <div className="relative min-h-[50px]">
      <label
        className={`absolute left-2 text-sm transition-all duration-200 ${
          selectedDate
            ? "-top-2 text-blue-500 text-xs mx-1 z-10 bg-white px-1"
            : "top-[9px] text-sm z-10 left-3 text-[#698192]"
        } text-[#979ea1]`}
      >
        {label}
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        className="w-full bg-white text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholderText="YYYY-MM-DD"
      />
    </div>
  );
};

export default CustomDatePicker;
