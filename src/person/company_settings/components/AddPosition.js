import { FullScreen } from "../../../human-resource/components/Components.styled";
import { ImArrowLeft2 } from "react-icons/im"



function AddPosition({ openCompanyPosition, setOpenCompanyPosition }) {




    return (
        <FullScreen className="h-full">
            <div className="calendar_div">
                <div className="top_div">
                    <ImArrowLeft2 onClick={() => setOpenCompanyPosition(!openCompanyPosition)} className="left_exit" />
                </div>
                <div className="insert_div">
                    <p className="insert_title">Vəzifə adı daxil edin</p>
                    <input type="text" className="insert_input"/>
                </div>
                <button className="reject">Ləğv et</button>
                <button className="add">Əlavə et</button>
            </div>
        </FullScreen>
    )
}
export default AddPosition;