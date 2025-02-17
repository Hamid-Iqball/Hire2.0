/* eslint-disable react/prop-types */
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parseISO, parse, isValid } from "date-fns";

const CustomDatePicker = ({ label, name, onChange, value }) => {
  const [selectedDate, setSelectedDate] = useState(value ? parseISO(value) : null);
  const [inputValue, setInputValue] = useState(
    value ? format(parseISO(value), 'yyyy-MM-dd') : ''
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setInputValue(date ? format(date, 'yyyy-MM-dd') : '');
    onChange(date, name);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Try to parse the manually entered date
    if (newValue.length === 10) { // Only parse complete dates (YYYY-MM-DD)
      const parsedDate = parse(newValue, 'yyyy-MM-dd', new Date());
      
      if (isValid(parsedDate)) {
        setSelectedDate(parsedDate);
        onChange(parsedDate, name);
      }
    }
  };

  return (
    <div className="relative flex  min-h-[50px] w-full bg-white border rounded-md">
      <label
        className={`absolute left-2 text-sm transition-all duration-200 ${
          selectedDate || inputValue
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
        className=" min-w-full flex-1 bg-white text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        // placeholderText="YYYY-MM-DD"
        value={inputValue}
        onChangeRaw={(e) => handleInputChange(e)}
        autoComplete="off"
        onKeyDown={(e) => {
          // Allow numeric input, backspace, delete, and dash
          if (
            !/[\d\-]/.test(e.key) && 
            e.key !== 'Backspace' && 
            e.key !== 'Delete' && 
            e.key !== 'ArrowLeft' && 
            e.key !== 'ArrowRight' && 
            e.key !== 'Tab'
          ) {
            e.preventDefault();
          }
          
          // Automatically add dashes
          if (e.key !== 'Backspace' && e.key !== 'Delete') {
            const value = e.target.value;
            if (value.length === 4 || value.length === 7) {
              if (e.key !== '-') {
                setInputValue(value + '-');
              }
            }
          }
        }}
      />
    </div>
  );
};

export default CustomDatePicker;