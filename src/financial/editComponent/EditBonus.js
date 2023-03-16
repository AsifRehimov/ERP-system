import { FullScreen } from "./EditComponent.styled";
// import DatePicker from "react-datepicker";
// import { useState } from "react";
// import { RiCalendar2Fill } from "react-icons/ri";
import { useEffect } from 'react';
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css"
import { Link  } from "react-router-dom";
// import dateFormat from "dateformat";

import { useState } from "react";
import YesorNoBonus from "./YesorNoBonus";
// import { useRef } from "react";
import AdvanceTable from "./tableFile/BonusTable";
// import { set } from "date-fns";



function EditBonus({empoyeeid, user, setOpenBonus, openBonus}) {


  const [advanceApi, setAdvanceApi] = useState(user);
  const [selectId, setSelectId] = useState([]);
  const [yesorNo, setYesorNo] = useState(false);
  
  const dateClick = user.map(index => index.date)
  const month = (new Date(dateClick).getDate())
  const yearsClick = (new Date(dateClick).getFullYear())
  const employeeid = empoyeeid.toString()

 
  


  const cony = `someapilink/salaries/bonus/?employee=${employeeid}&salary_date__month=${[month]}&salary_date__year=${[yearsClick]}`;
  useEffect(() => {

    axios.get(cony,  {
      headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      }
        ).then(data =>{
           return(
          setAdvanceApi(data.data.results),
          console.log(data.data.results)
          )})
    }, [cony]);

    const come = advanceApi.filter(m => selectId.some((t) => (t === m.id)));
    const deleteBonus = come.map(m => m.is_paid === false && m.id) 




  return (
    <FullScreen className="h-full">
     {yesorNo ? <YesorNoBonus setYesorNo={setYesorNo} yesorNo={yesorNo} deleteBonus={deleteBonus}/> : <form className="calendar_div" /*onSubmit={handleSubmit}*/>
        <p className="holiday_title">İşçinin bonus tarixçəsi</p>
          <p className="history">Tarixçə</p>
          <AdvanceTable advanceApi={advanceApi} setSelectId={setSelectId} />
       {come.map( d => {  
        return(d.is_paid ? (<button className="deletedis">Sil</button>) : (<button className="delete" onClick={() => setYesorNo(!yesorNo)}>Sil</button>))})}
        <Link className="reject" onClick={() =>  setOpenBonus(false)} >Geri qayıt</Link>
        <button  className="add" onClick={() =>  setOpenBonus(false)} type="submit">Yadda saxla</button>
      </form>}
    </FullScreen>
  )
}
export default EditBonus;




