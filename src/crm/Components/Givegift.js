import { GiveGift } from "./components.styled";
import { MdAddCircleOutline } from "react-icons/md";


function Givegift({givegift, setGivegift}) {
    return(
        <GiveGift>
            <div className="givegift">
                <p className="title_gift">Müştəriyə veriləcək hədiyyəni seçin.</p>
                <div className="filter_div">1.
                <select className="filter_name">
                    <option></option>
                </select>
                <input type="number" className="filter_numeral"/>
                <MdAddCircleOutline className="add_icon"/>
                </div>
            <div className="button_div_gift">
                <button className="btn_green_gift">İmzala</button>
                <button className="btn_disabled_gift" onClick={()=>setGivegift(!givegift)}>Ləğv et</button>
                <button className="btn_yellow_gift">Təmizlə</button>
            </div>

            </div>
        </GiveGift>
    )
}

export default Givegift;