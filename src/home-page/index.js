import { BlueLine,  HomePageDiv,  HomePageMainDiv, PageAbout, TopDiv, TopDivRightdiv } from "./Home.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';



function Homepage({show, setShow}) {


  return (
    <HomePageMainDiv>
    <HomePageDiv className={show ? "small" : "big"}>
      {/* Home Page-in yuxarı və ya top hissəsi  */}
      <TopDiv>
        {/* TopDiv-in içində olan sağ tərəfdə düzülən saat, bildiriş və card-ın daxilində olanda div  */}
        <TopDivRightdiv>
          <GiBackwardTime className="time_icon" />
          <IoNotificationsOutline className="notification_icon" />
          <img className="card_photo" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt="Ferid" />
          <Dropdown>
            <DropdownToggle variant="success" id="dropdown-basic" className="toggle_dropdown">
              Əliyev Fərid
            </DropdownToggle>

            <DropdownMenu className="open_drop_down">
              <DropdownItem href="/person_setings" className="open_dropdown_choose">Hesab parametrləri</DropdownItem>
              <DropdownItem href="/company_setings" className="open_dropdown_choose">Şirkət parametrləri</DropdownItem>
              <DropdownItem href="#/action-3" className="open_dropdown_choose">Hesabdan çıx</DropdownItem>
            </DropdownMenu>
          </Dropdown>




        </TopDivRightdiv>
        <p className="page_name">Ana Səhifə</p>
      </TopDiv>
      <BlueLine>
      </BlueLine>
      <PageAbout>Bu tamamlanmamış bir proyektdir. Çox təəsüfki vaxt ilə istifadə olunan apilər artıq əl çatan olmadığı üçün bir çox özəllikləri tam olaraq görmək olmur. 
        Ayrıcalıqda bu əsasən 1080px ekran üçün nəzərdə tutulub. Əgər daha əlverişli görmək istəyirsinizsə  Ctrl və - klavişin 4 dəfə vurmağınız lazımdır.</PageAbout>
    </HomePageDiv>
    </HomePageMainDiv>
  )
}

export default Homepage;