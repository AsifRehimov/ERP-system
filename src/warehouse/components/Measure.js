import { FullScreen } from "./Components.styled";
import { ImArrowLeft2 } from "react-icons/im"
import "react-datepicker/dist/react-datepicker.css"


function Measure({ measure, setMeasure }) {

  


  return (
    <FullScreen className="h-full">
      <div className="calendar_div">
        <div className="top_div">
        <ImArrowLeft2 onClick={() => setMeasure(!measure)} className="left_exit" />
        <p className="holiday_title">Ölçü vahidini daxil edin</p>
        </div>
       <div className="measure_div">
            <p className="measure_p">Ölçü vahidi</p>
            <input className="measure_input"/>
       </div>
      <button className="delete">Ləğv et</button>
      <button className="add">Əlavə et</button>
          </div>
    </FullScreen>
  )
}
export default Measure;

