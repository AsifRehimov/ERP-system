import { FullScreen } from "./EditComponent.styled";
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios";
import { Link  } from "react-router-dom";
// import { useEffect } from "react";
// import { useState } from "react";



function YesorNoBonus({deleteBonus, yesorNo, setYesorNo}) {

  const deleteclick = e => {
    e.preventDefault()
  
      const deletelink = `someapilink/salaries/bonus-delete/`;
  
      axios.post(deletelink, {
        "instance_list": deleteBonus
     },{
        headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        }
          ).then(setYesorNo(!yesorNo))
    }
  

  return (
    <FullScreen className="h-full">
      <form className="salary_pay_div" >
        <p className="salary_pay_title">Seçilmiş bonusları silmək istədiyinizə əminsiniz?</p>
    
        <Link className="reject_salary" onClick={() => setYesorNo(!yesorNo)}>Xeyr</Link>
        <button className="add_salary" onClick={deleteclick}>Bəli</button>
      </form>
    </FullScreen>
  )
}
export default YesorNoBonus;