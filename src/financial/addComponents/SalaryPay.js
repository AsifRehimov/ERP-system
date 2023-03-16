import { FullScreen } from "./Add_component.styled";
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios";
import { Link, useNavigate  } from "react-router-dom";
// import { useEffect } from "react";
// import { useState } from "react";



function SalaryPay({indexSelectApp}) {

 
  
  const navigate = useNavigate();



  
    const data = indexSelectApp.map(x =>{
    
      return( console.log([x*1]), {
        "salary_view": [x*1],
      })})
    console.log(data);
  const handleSubmit = e =>{
    data.map(x => {

    e.preventDefault();


    console.log(data);

    const cony = 'someapilink/salaries/pay-salary/';
     return axios.post(cony, x ,{ 
        headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        })
        .then(navigate("/financial_credit"))
        .catch(err => alert(err, "Maarif"))
  })
}


  return (
    <FullScreen className="h-full">
      <form className="salary_pay_div" onSubmit={handleSubmit}>
        <p className="salary_pay_title">Seçilmiş şəxs və ya şəxslərin Əməkhaqqıları ödəmək istədiyinizə əminsiniz?</p>
    
        <Link className="reject_salary" to={"/financial_credit"}>Xeyr</Link>
        <button className="add_salary" type="submit">Bəli</button>
      </form>
    </FullScreen>
  )
}
export default SalaryPay;