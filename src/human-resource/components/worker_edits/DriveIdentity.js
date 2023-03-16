import { FullScreen } from "../Components.styled";
import { ImArrowLeft2 } from "react-icons/im"
import "react-datepicker/dist/react-datepicker.css"


function DriveIdentity({ driveIdentity, setDriveIdentity }) {

  


  return (
    <FullScreen className="h-full">
      <div className="calendar_div">
        <ImArrowLeft2 onClick={() => setDriveIdentity({open: false})} className="left_exit" />
            {driveIdentity.drive === null ?  <p className="nothing">Heçnə tapılmadı!</p> :
            <img className="img_user_card" src={driveIdentity.drive === null ? "" : `${driveIdentity.drive}`} alt="Şəxsiyyət vəsiqəsi ön hissə" title="Şəxsiyyət vəsiqəsi ön hissə"/>
            }
          </div>
    </FullScreen>
  )
}
export default DriveIdentity;