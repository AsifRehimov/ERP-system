import { FullScreen } from "./Add_component.styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";
import { RiCalendar2Fill } from "react-icons/ri";
import { useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate  } from "react-router-dom";
import dateFormat from "dateformat";



function AddPenalty({ empoyeeID}) {

  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState();
  
  const navigate = useNavigate();
 

  const dates = dateFormat(date, "dd-mm-yyyy")

  useEffect(() => {
    const cony = `someapilink/salaries/bonus/`;

    axios.get(cony,  {
      headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      }
        ).then(data =>
          console.log(data.data),
        )
    }, []);
    const data = empoyeeID.map(x =>{
    
      return(  {
        "employee_id": x*1,
        "note": note,
        "date": dates,
        "amount": amount
      })})
    console.log(data);
  const handleSubmit = e =>{
    data.map(x => {

    e.preventDefault();


    console.log(data);

    const cony = 'someapilink/salaries/salary-punishment/';
     return axios.post(cony, x ,{ 
        headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        })
        .then(navigate("/financial_credit"))
        .catch(err => alert(err, "iugugu"))
  })
}


  return (
    <FullScreen className="h-full">
      <form className="calendar_div" onSubmit={handleSubmit}>
        <p className="holiday_title">Cərimə əlavə etmək üçün aşağıdakı sətirləri doldurun.</p>
        <div className="datapicker_div">
          <div className="smalldiv">
            <p className="form_title">Məbləğ</p>
            <input value={amount} onChange={e => setAmount(e.target.value)} className="form_input" type="number"/>
          </div>
          <div className="smalldiv">
            <p className="form_title">Tarix *</p>
            { <DatePicker 
              selected={date}
              onChange={(date) => setDate(date)}
              id="datapicker"
              placeholderText=""
              inputFormat="DD-MM-YYYY"
            /> }
          <label className="calendar_icon" htmlFor="datapicker">
            <RiCalendar2Fill />
          </label>
          </div>
          <div className="smalldiv">
            <p className="form_title">Qeyd</p>
            <textarea 
            value={note}
            onChange={e=> setNote(e.target.value)}
            className="calendar_big_div"></textarea>
          </div>
        </div>
        <Link className="reject" to={"/financial_credit"}>Ləğv et</Link>
        <button className="add" type="submit">Əlavə et</button>
      </form>
    </FullScreen>
  )
}
export default AddPenalty;