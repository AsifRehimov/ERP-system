import { FullScreen, AddStocke } from "./Components.styled";
import { ImArrowLeft2 } from "react-icons/im"
import "react-datepicker/dist/react-datepicker.css"


function AddStock({ addstocks, setAddstock }) {



  return (
    <FullScreen className="h-full">
      <div className="calendar_div">
        <div className="top_div">
          <ImArrowLeft2 onClick={() => setAddstock(!addstocks)} className="left_exit" />
        </div>
        <AddStocke>
          <input className="title_input" placeholder="Məhsul" />
          <div className="add_form_div">
            <p className="add_form_title">Barkod</p>
            <input className="add_input_text" />
          </div>
          <div className="add_form_div">
            <p className="add_form_title">Miqdar</p>
            <input className="add_input_text" />
          </div>
          <div className="add_form_div">
            <p className="add_form_title">Ölçü vahidi</p>
            <input className="add_input_text" />
          </div>
          <div className="add_form_div">
            <p className="add_form_title">Şirkət</p>
            <select className="add_select">
              <option></option>
            </select>
          </div>
          <div className="add_form_div">
            <p className="add_form_title">Anbar</p>
            <select className="add_select">
              <option></option>
            </select>
          </div>

        </AddStocke>
        <button className="delete">Ləğv et</button>
        <button className="add">Əlavə et</button>
      </div>
    </FullScreen>
  )
}
export default AddStock;

