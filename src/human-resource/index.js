import { BlueLine,  HomePageDiv,  TopDiv, TopDivRightdiv } from "./Hr.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import WorkTable from "./components/WorkTable";
import Worker from "./components/Worker";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';



function Human({ opencalendar, setOpencalendar, show }) {




    return (


        <HomePageDiv>

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
                <p className="page_name">İnsan Resursları</p>
            </TopDiv>
            <Tabs >
                <BlueLine>
                    <TabList className="tabs_nav" defaultindex={1}>
                        <Tab className="tabs_headers">İşçilər</Tab>
                        <Tab className="tabs_headers">İş qrafikləri</Tab>
                    </TabList>
                </BlueLine>
                <TabPanel><Worker /></TabPanel>
                <TabPanel><WorkTable opencalendar={opencalendar} setOpencalendar={setOpencalendar} /></TabPanel>
            </Tabs>

        </HomePageDiv>
    )
}



export default Human;