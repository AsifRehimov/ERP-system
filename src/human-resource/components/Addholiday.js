import { FullScreen } from "./Components.styled";
import { ImArrowLeft2 } from "react-icons/im"
import { useState } from "react";
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css"


function AddHoliday({ setOpencalendar, opencalendar }) {

  const [startDate, setStartDate] = useState(new Date());
  


  return (
    <FullScreen className="h-full">
      <div className="calendar_div">
        <div className="top_div">
        <ImArrowLeft2 onClick={() => setOpencalendar(!opencalendar)} className="left_exit" />
        <p className="holiday_title">Məzuniyyət əlavə et</p>
        </div>
        <DatePicker
        id="datepicker"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      inline
      />
      <button className="delete">Təmizlə</button>
      <button className="add">Əlavə et</button>
          </div>
    </FullScreen>
  )
}
export default AddHoliday;

