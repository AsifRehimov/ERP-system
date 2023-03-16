import { FullScreenHolding } from "../addComponents/Add_component.styled";
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";
import { useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



function ActionHolding({ setSuccessTransfer }) {

  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [making, setMaking] = useState("");
  const [sender, setSender] = useState("");
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
    "personal_id": making === "" ? null : parseInt(making, 10),
    "amount": amount === "" ? null : parseInt(amount, 10),
    "note": note,
    "operation": sender
  }
  console.log(data);


  const handleSubmit = e => {


    e.preventDefault();


    console.log(data);

    const cony = 'someapilink/cashbox/holding-cashbox-operation/';
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
      <form className="calendar_div">
        <p className="holiday_title"></p>
        <div className="datapicker_div">
          
          <div className="smalldiv">
            <select value={sender} onChange={e => setSender(e.target.value)} className="form_input" type="number">
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
            <select value={making} onChange={e => setMaking(e.target.value)} className="form_input" type="number">
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
        <Link className="reject" to={"/financial_credit/cashflow"}>Ləğv et</Link>
        <button className="add" onClick={handleSubmit} disabled={(sender && amount) !== "" ? false : true}>Əlavə et</button>
      </form>
    </FullScreenHolding>
  )
}
export default ActionHolding;