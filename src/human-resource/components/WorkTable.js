import { ButtonsDiv, CalculatorMainDiv, TeamsButton, TeamsButtone, TeamsDiv, TeamsTableDiv } from "./Components.styled";
import { useState } from "react";
import AddHoliday from "./Addholiday";
import AddStrite from "./AddStrite";
import Addezam from "./Addezam";
import { FiltersDiv } from "./worker_edits/Edits.styled";
import { MdCancel } from 'react-icons/md';

import { BlueLine,  HomePageDiv,  HomePageMainDiv,TopDiv, TopDivRightdiv } from "../Hr.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { TabList } from 'react-tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"

function WorkTable({ opencalendar, setOpencalendar, show, setShow }) {

    const [isSubscribed, setIsSubscribed] = useState(false);
    const [openstrite, setOpenStrite] = useState(false);
    const [openezam, setOpenEzam] = useState(false);

    const handleChange = () => {
        setIsSubscribed(current => !current);
    };

    return (
        <HomePageMainDiv>
        <HomePageDiv className={  show ? "small" : "big"}>

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
                    <BlueLine>
                        <TabList className="tabs_nav">
                            <Link to="/human_resource" className="tabs_headers">İşçilər</Link>
                            <Link to="/human_resource/work_table" className="tabs_headers">İş qrafikləri</Link>
                        </TabList>
                    </BlueLine>
        <TeamsDiv>
            <TeamsTableDiv>
                <table className="table-fixed">
                    <thead>
                        <tr>
                            <th className="th_total table_check"><input type="checkbox" className="checkbox" /></th>
                            <th className="th_total table_id">ID</th>
                            <th className="th_total table_leader">Ad Soyad</th>
                            <th className="th_total table_company">Şirkət</th>
                            <th className="th_total table_office">Ofis</th>
                            <th className="th_total table_time">Vəzifə</th>
                            <th className="th_total table_team">İş günü</th>
                            <th className="th_total table_const">Sabit</th>
                            <th className="th_total table_rest">Ezamiyyət</th>
                            <th className="th_total table_vacation">Məzuniyyət</th>
                            <th className="th_total table_strike">Tətil</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table_check"><input type="checkbox" className="checkbox" value={isSubscribed} onChange={handleChange} /></td>
                            <td className="table_id">1</td>
                            <td className="table_leader" title="Stewart Rutherford">Stewart Rutherford</td>
                            <td className="table_company">Ocean</td>
                            <td className="table_office">Kurdemir</td>
                            <td className="table_time">Hüquqşunas</td>
                            <td className="table_team">96</td>
                            <td className="table_const">400</td>
                            <td className="table_rest">611</td>
                            <td className="table_vacation">6</td>
                            <td className="table_strike">49</td>
                        </tr>
                    </tbody>
                </table>
            </TeamsTableDiv>
            <ButtonsDiv>
                {isSubscribed ? (opencalendar ? (<AddHoliday opencalendar={opencalendar} setOpencalendar={setOpencalendar} />) : (<TeamsButton onClick={() => setOpencalendar(!opencalendar)}>Məzun. əlavə et</TeamsButton>)) : <TeamsButtone>Məzun. əlavə et</TeamsButtone>}
                {isSubscribed ? (openstrite ? <AddStrite openstrite={openstrite} setOpenStrite={setOpenStrite} /> : <TeamsButton onClick={() => setOpenStrite(!openstrite)}>İş günü əlavə et</TeamsButton>) : <TeamsButtone>İş günü əlavə et</TeamsButtone>}
                {isSubscribed ? (openezam ? <Addezam openezam={openezam} setOpenEzam={setOpenEzam} /> : <TeamsButton onClick={() => setOpenEzam(!openezam)}>Ezam. əlavə et</TeamsButton>) : <TeamsButtone>Ezam. əlavə et</TeamsButtone>}

            </ButtonsDiv>
            <CalculatorMainDiv>
                <p className="calcul_title">Ətraflı axtar</p>
                <FiltersDiv>
                    <div>
                        <select className="filters_section">
                            <option>Ad Soyad</option>
                        </select>
                        <MdCancel className="cancel_icon" />
                    </div>
                    <div>
                        <select className="filters_section">
                            <option>Şirkət</option>
                        </select>
                        <MdCancel className="cancel_icon" />
                    </div>
                    <div>
                        <select className="filters_section">
                            <option>Ofis</option>
                        </select>
                        <MdCancel className="cancel_icon" />
                    </div>
                    <div>
                        <select className="filters_section">
                            <option>Vəzifə</option>
                        </select>
                        <MdCancel className="cancel_icon" />
                    </div>
                    <div>
                        <select className="filters_section">
                            <option>Başlanğıc tarix</option>
                        </select>
                        <MdCancel className="cancel_icon" />
                    </div>
                    <div>
                        <select className="filters_section">
                            <option>Son tarix</option>
                        </select>
                        <MdCancel className="cancel_icon" />
                    </div>
                </FiltersDiv>
                <button className="delete">Təmizlə</button>
            </CalculatorMainDiv>
        </TeamsDiv>
        </HomePageDiv>
        </HomePageMainDiv>
    )
}
export default WorkTable;