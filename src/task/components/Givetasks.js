import { WarehouseDiv, TeamsTableDivTwo, CalculatorMainDiv, FiltersDiv, WarehouseMainDiv } from "../Task.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5'
import { TopDiv, TopDivRightdiv, BlueLine } from "../../human-resource/Hr.styled";
import { Tabs, TabList, TabPanel } from 'react-tabs';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import EnhancedTables from "./Tabletwo";
import { Link } from "react-router-dom";




function Task({show}) {


    return (

        <WarehouseMainDiv>
            <WarehouseDiv className={show ? "small" : "big"}>
                {/* CRM-in yuxarı və ya top hissəsi  */}
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
                    <p className="page_name">Tapşırıqlar</p>
                </TopDiv>
                <Tabs>
                    <BlueLine>
                        <TabList className="tabs_nav" defaultindex={1}>

                            <Link className="tabs_headers" to="/">Tapşırıqlar</Link>
                            <Link className="tabs_headers" to="/">Elanlar</Link>
                        </TabList>
                    </BlueLine>

                    <TabPanel>
                        <TeamsTableDivTwo>

                            <EnhancedTables />
                        </TeamsTableDivTwo>
                    </TabPanel>
                    <CalculatorMainDiv>
                        <p className="calcul_title">Ətraflı axtar</p>
                        <FiltersDiv>
                            <div>
                                <div className="search_filters_section">
                                    <input type="search" className="search" placeholder="İşçi adı axtar" />
                                    <BsSearch className="search_icon" />
                                </div>
                            </div>
                            <div>
                                <select className="filters_section">
                                    <option>Vəzifə</option>
                                </select>
                                <MdCancel className="cancel_icon" />
                            </div>
                            <div>
                                <select className="filters_section">
                                    <option>Status</option>
                                </select>
                                <MdCancel className="cancel_icon" />
                            </div>
                            <div>
                                <select className="filters_section">
                                    <option>Tapşığın verilmə tarixi</option>
                                </select>
                                <MdCancel className="cancel_icon" />
                            </div>
                            <div>
                                <select className="filters_section">
                                    <option>Tapşığın son icra tarixi</option>
                                </select>
                                <MdCancel className="cancel_icon" />
                            </div>

                        </FiltersDiv>
                        <button className="delete">Təmizlə</button>
                    </CalculatorMainDiv>
                </Tabs>
            </WarehouseDiv>
        </WarehouseMainDiv>
    )
}

export default Task;
