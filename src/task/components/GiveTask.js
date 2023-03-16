import { WarehouseDiv, WarehouseMainDiv } from "../Task.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { RiCalendar2Fill } from 'react-icons/ri';
import { IoNotificationsOutline } from 'react-icons/io5'
import { TopDiv, TopDivRightdiv, BlueLine } from "../../human-resource/Hr.styled";
import { Tabs, TabPanel } from 'react-tabs';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Reject, Save, WhitebigDiv } from "./TaskCom.styled";




function GiveTask({ show }) {


    return (
        <WarehouseMainDiv>
            <WarehouseDiv className={show ? "small" : "big"}>
                <TopDiv>

                    {/* TopDiv-in içində olan sağ tərəfdə düzülən saat, bildiriş və card-ın daxilində olanda div  */}
                    <TopDivRightdiv>
                        <GiBackwardTime className="time_icon" />
                        <IoNotificationsOutline className="notification_icon" />
                        <img className="card_photo" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt="Ferid" />
                        <Dropdown>
                            <DropdownToggle variant="success" id="dropdown-basic" className="toggle_dropdown" aria-expanded="false" aria-haspopup="true">
                                Əliyev Fərid
                            </DropdownToggle>

                            <DropdownMenu className="open_drop_down">
                                <DropdownItem href="/person_setings" className="open_dropdown_choose">Hesab parametrləri</DropdownItem>
                                <DropdownItem href="/company_setings" className="open_dropdown_choose">Şirkət parametrləri</DropdownItem>
                                <DropdownItem href="#/action-3" className="open_dropdown_choose">Hesabdan çıx</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </TopDivRightdiv>
                    <p className="page_name">Tapşırıq ver</p>
                </TopDiv>
                <Tabs>
                    <BlueLine></BlueLine>
                    <TabPanel>
                        <WhitebigDiv>
                            <div className="leftdiv">
                                <div className="title_div">
                                    <p className="title">Başlıq *</p>
                                    <input className="title_input" />
                                </div>
                                <div className="content_div">
                                    <p className="content_title">Tərkibi *</p>
                                    <input className="content_input" />
                                </div>
                            </div>
                            <div className="right_div">
                                <div className="middle_div">
                                    <p className="content_title">Başlama tarixi</p>
                                    <RiCalendar2Fill className="calendar" />
                                </div>
                                <div className="middle_div">
                                    <p className="content_title">Bitmə tarixi *</p>
                                    <RiCalendar2Fill className="calendar" />
                                </div>
                                <div className="middle_div">
                                    <p className="content_title">Vəzifə</p>
                                    <select className="select_div">
                                        <option></option>
                                    </select>
                                </div>
                                <div className="middle_div">
                                    <p className="content_title">Əməkdaş</p>
                                    <select className="select_div">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                        </WhitebigDiv>
                        <Reject>Ləğv et</Reject>
                        <Save>Yadda saxla</Save>
                    </TabPanel>

                </Tabs>
            </WarehouseDiv>
        </WarehouseMainDiv>
    )
}

export default GiveTask;
