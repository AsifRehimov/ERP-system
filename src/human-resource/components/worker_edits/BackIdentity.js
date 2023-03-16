import { FullScreen } from "../Components.styled";
import { ImArrowLeft2 } from "react-icons/im"
import "react-datepicker/dist/react-datepicker.css"


function BackIdentity({ backIdentity, setBackIdentity }) {

  


  return (
    <FullScreen className="h-full">
      <div className="calendar_div">
        <ImArrowLeft2 onClick={() => setBackIdentity({open: false})} className="left_exit" />
            {backIdentity.back === null ? <p className="nothing">Heçnə tapılmadı!</p> :
             <img className="img_user_card" src={backIdentity.back === null ? "" : `${backIdentity.back}`} alt="Şəxsiyyət vəsiqəsi ön hissə" title="Şəxsiyyət vəsiqəsi ön hissə"/>
            
            }
          </div>
    </FullScreen>
  )
}
export default BackIdentity;