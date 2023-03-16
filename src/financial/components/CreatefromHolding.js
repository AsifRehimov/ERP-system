import {  FullScreenHolding } from "../addComponents/Add_component.styled";
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";
import { useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate  } from "react-router-dom";



function CreatefromHolding({setSuccessTransfer}) {

  const [note, setNote] = useState("");
  const [amount, setAmount] = useState();
  const [making, setMaking] = useState("");
  const [sender, setSender] = useState("");
  const [companyData, setCompanyData] = useState([]);
  
  const navigate = useNavigate();
 




  useEffect(() => {
    const url = `someapilink/company/`;
    axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }
    )
      .then((data) => {
        return (
            setCompanyData(data.data.results),
            console.log(data.data.results)
        )
      })

  }, []);



    const data = {
        "sending_company_id": sender === "Holding" ? null : (sender === "" ? null : parseInt(sender, 10)),
        "receiving_company_id": making === "Holding"? null : (making === "" ? null : parseInt(making, 10)) ,
        "transfer_amount": parseInt(amount, 10),
        "transfer_note": note
    }
    console.log(making, sender);

    
    const handleSubmit = e =>{
   

    e.preventDefault();


    console.log(data);

    const cony = 'someapilink/transfer/holding-transfer/';
     return axios.post(cony, data ,{ 
        headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        })
        .then(
          navigate("/financial_credit/holding_to_company"),
          setSuccessTransfer({open : true},
          setTimeout(()=> {setSuccessTransfer({open : false})}, 2000)
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
                {
                  (making === "" ? false : isFinite(making))  ? "" :
                  companyData.map(x => {                     
                      return <option value={x.id}>{x.name}</option>
                  })
                }
                <option value="Holding">Holding</option>
            </select>
            <p className="form_title">Göndərən</p>
          </div>
          <div className="smalldiv">
          <select value={making} onChange={e => setMaking(e.target.value)} className="form_input" type="number">
                <option disabled ></option>
                {
                    (sender === "" ? false : isFinite(sender)) ? "" :
                    companyData.map(x => {
                        return <option value={x.id}>{x.name}</option>
                    })
                }
                <option value="Holding">Holding</option>
            </select>
            <p className="form_title">Qəbul edən</p>
          </div>
          <div className="smalldiv">
            <input value={amount} onChange={e => setAmount(e.target.value)} className="form_input" type="number"/>
            <p className="form_title">Məbləğ *</p>
          </div>
          <div className="smalldiv">
            <textarea 
            value={note}
            onChange={e=> setNote(e.target.value)}
            className="calendar_big_div"></textarea>
            <p className="form_title">Qeyd</p>
          </div>
        </div>
        <Link className="reject" to={"/financial_credit/holding_to_company"}>Ləğv et</Link>
        <button className="add" onClick={handleSubmit}>Əlavə et</button>
      </form>
    </FullScreenHolding>
  )
}
export default CreatefromHolding;