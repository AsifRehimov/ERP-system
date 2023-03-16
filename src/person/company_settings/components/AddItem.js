import { FullScreen } from "../../../human-resource/components/Components.styled";
import { ImArrowLeft2 } from "react-icons/im"



function AddItem({ openCompanyItem, setOpenCompanyItem }) {




    return (
        <FullScreen className="h-full">
            <div className="calendar_div">
                <div className="top_div">
                    <ImArrowLeft2 onClick={() => setOpenCompanyItem(!openCompanyItem)} className="left_exit" />
                </div>
                <div className="insert_div">
                    <div className="insert_top_filter">
                        <p className="insert_title">Filial adı *</p>
                        <select className="insert_section">
                            <option></option>
                        </select>
                    </div>
                    <div className="insert_top_filter">
                        <p className="insert_title">Şöbə adı *</p>
                        <div className="search_filters_section">
                            <input type="search" className="insert_search"  />
                        </div>
                    </div>
                </div>
                <button className="reject">Ləğv et</button>
                <button className="add">Əlavə et</button>
            </div>
        </FullScreen>
    )
}
export default AddItem;