import { FullScreen } from "../Components.styled";
import { ImArrowLeft2 } from "react-icons/im"
import "react-datepicker/dist/react-datepicker.css"


function FrontIdentity({ frontIdentity, setFrontIdentity }) {

  


  return (
    <FullScreen className="h-full">
      <div className="calendar_div">
        <ImArrowLeft2 onClick={() => setFrontIdentity({open: false})} className="left_exit" />
        {frontIdentity.back === null ? <p className="nothing">Heçnə tapılmadı!</p> :
            <img className="img_user_card" src={frontIdentity.front === null ? "" :`${frontIdentity.front }`} alt="Şəxsiyyət vəsiqəsi ön hissə" title="Şəxsiyyət vəsiqəsi ön hissə"/> } 
          </div>
    </FullScreen>
  )
}
export default FrontIdentity;