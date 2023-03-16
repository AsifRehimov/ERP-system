import { FullScreenHolding } from "../addComponents/Add_component.styled";
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";
import { useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



function ActionCompany({ setSuccessTransfer, officeDataApi, companyDataApi }) {

  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [company, setCompany] = useState("");
  const [office, setOffice] = useState("");
  const [personal, setPersonal] = useState('')
  const [operation, setOperation] = useState('')
  const [personalApi, setPersonalApi] = useState([])


  const navigate = useNavigate();




  useEffect(() =>{
    const url = `someapilink/users`;
    axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }
    )
      .then((data) => {
        return (
          setPersonalApi(data.data.results)
        )
      })
    }, [])

  


  const data = {
    "company_id":company === "" ? null : parseInt(company, 10),
    "office_id": office === "" ? null : parseInt(office, 10),
    "amount": amount === "" ? null : parseInt(amount, 10),
    "note": note,
    "operation": operation,
    "personal_id": personal === "" ? null : parseInt(personal, 10)

   
  }
  console.log(  data);


  const handleSubmit = e => {


    e.preventDefault();


    console.log(data);

    const cony = 'someapilink/cashbox/company-cashbox-operation/';
    return axios.post(cony, data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(
        navigate("/financial_credit/cashflow"),
        setSuccessTransfer({ open: true },
          setTimeout(() => { setSuccessTransfer({ open: false }) }, 2000)
        ))
      .catch(err => console.log(err, "iugugu"))

  }

  return (
    <FullScreenHolding className="h-full">
      <form className="calendar_div" style={{height:"600px"}}>
        <p className="holiday_title"></p>
        <div className="datapicker_div" style={{height:"375px"}}>
          <div className="smalldiv">
            <select value={company} onChange={e => setCompany(e.target.value)} className="form_input" type="number">
              <option disabled ></option>
              {
                companyDataApi.map(x => (<option value={x.id}>{x.name}</option>))
              }
            </select>
            <p className="form_title">Şirkət*</p>
          </div>
          <div className="smalldiv">
            <select value={office} onChange={e => setOffice(e.target.value)} className="form_input" type="number">
              <option disabled ></option>
              {officeDataApi.map(x => {
                return x.company.id === parseInt(company, 10) ?
                  <option value={x.id}>{x.name}</option> : ""

              })}
            </select>
            <p className="form_title">Ofis*</p>
          </div>
          <div className="smalldiv">
            <select value={operation} onChange={e => setOperation(e.target.value)} className="form_input" type="number">
              <option disabled ></option>
              <option value="MƏDAXİL">MƏDAXİL</option>             
              <option value="MƏXARİC">MƏXARİC</option> 
            </select>
            <p className="form_title">Əməliyyat *</p>
          </div>
          <div className="smalldiv">
            <input value={amount} onChange={e => setAmount(e.target.value)} className="form_input" type="number" />
            <p className="form_title">Məbləğ *</p>
          </div>
          <div className="smalldiv">
            <select value={personal} onChange={e => setPersonal(e.target.value)} className="form_input" type="number">
              <option disabled ></option>
              {personalApi.map(x => {
                return <option value={x.id}>{x.fullname}</option>
              })}
            </select>
            <p className="form_title">Personal</p>
          </div>
          <div className="smalldiv">
            <textarea
              value={note}
              onChange={e => setNote(e.target.value)}
              className="calendar_big_div"></textarea>
            <p className="form_title">Qeyd</p>
          </div>
        </div>
        <Link className="reject" to={"/financial_credit/cashflow"} style={{marginTop:"527px"}}>Ləğv et</Link>
        <button className="add" onClick={handleSubmit} disabled={(company && office && operation && amount) !== "" ? false : true} style={{marginTop:"527px"}}>Əlavə et</button>
      </form>
    </FullScreenHolding>
  )
}
export default ActionCompany;