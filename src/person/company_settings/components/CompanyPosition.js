import { CompanySettingsDiv, CompanyTableDiv, Itemgive } from "../Company.Styled";


import { BlueLine, HomePageDiv, HomePageMainDiv, TopDiv, TopDivRightdiv } from "../../../human-resource/Hr.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { TabList } from 'react-tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablePosition from "./TablePosition";
import { useState } from "react";
import AddPosition from "./AddPosition";


function CompanyPosition({show}) {

    const[openCompanyPosition, setOpenCompanyPosition] = useState(false)

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
                <p className="page_name">Şirkət parametrləri / Vəzifələr</p>
            </TopDiv>
            <BlueLine>
                <TabList className="tabs_nav">
                <Dropdown>
                    <DropdownToggle variant="success" id="dropdown-basic" className="tabs_headers">
                        Struktur
                    </DropdownToggle>

                    <DropdownMenu className="open_drop_down">
                        <DropdownItem href="/company_setings/branch" className="open_dropdown_choose">Filiallar</DropdownItem>
                        <DropdownItem href="/company_setings" className="open_dropdown_choose">Şöbələr</DropdownItem>
                        <DropdownItem href="/company_setings/position" className="open_dropdown_choose">Vəzifələr</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                </TabList>
            </BlueLine>
            {openCompanyPosition ? <AddPosition setOpenCompanyPosition={setOpenCompanyPosition} openCompanyPosition={openCompanyPosition}/> : <CompanySettingsDiv>
                <Itemgive onClick={() => setOpenCompanyPosition(!openCompanyPosition)}>
                    Vəzifə əlavə et
                </Itemgive>
                <CompanyTableDiv>
                    <TablePosition />
                </CompanyTableDiv>
            </CompanySettingsDiv>}
        </HomePageDiv>
        </HomePageMainDiv>
    )
}

export default CompanyPosition;