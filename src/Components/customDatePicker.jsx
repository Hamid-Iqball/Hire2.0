import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const CustomDatePicker = ({ label, name, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value ? dayjs(value) : null}
        onChange={(date) => onChange(date, name)} // Passing value and name
        slotProps={{
          textField: {
            fullWidth: true, // Ensure width is 100%
            name, // Set name attribute
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
