import { ButtonsDiv, CustomerLeftDiv, CustomerRightDiv, MainDiv } from "./components.styled";

import { IoNotificationsOutline } from 'react-icons/io5'
import { GiBackwardTime } from 'react-icons/gi';
import { TabList } from 'react-tabs';
import { TopDiv, TopDivRightdiv, BlueLine } from "../../human-resource/Hr.styled";
import { CRMDiv, CRMMainDiv } from "../Crm.styled";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"


function NewClient({show}) {


    return (
        <CRMMainDiv>
            <CRMDiv className={show ? "small" : "big"}>
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
                                <DropdownItem href="#/action-2" className="open_dropdown_choose">Şirkət parametrləri</DropdownItem>
                                <DropdownItem href="#/action-3" className="open_dropdown_choose">Hesabdan çıx</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </TopDivRightdiv>
                    <p className="page_name">CRM</p>
                </TopDiv>
                <BlueLine>
                    <TabList className="tabs_nav">
                        <Dropdown>
                            <DropdownToggle variant="success" id="dropdown-basic" className="tabs_headers">
                                Müştəri
                            </DropdownToggle>
                            <DropdownMenu className="open_customer" style={{ inset: "auto" }}>
                                    <Link to="/crm/add_customer" className="open_dropdown_Link" >Yeni Müştəri</Link>
                                    <Link to="/crm/customer_card_basa" className="open_dropdown_Link" >Müştərilər</Link>
                                </DropdownMenu>
                            </Dropdown>
                            <Link className="tabs_headers" to="/crm">Müqavilələr</Link>
                    </TabList>
                </BlueLine>
                <MainDiv>
                    <CustomerLeftDiv>
                        <input type="text" className="customer_title_input" placeholder="Adı Soyadı Ata adı*" />

                        <div className="form_components">
                            <p className="hood_text">WhatsApp Nömrəsi*</p>
                            <input type="text" className="card_input" />
                        </div>
                        <div className="form_components">
                            <p className="hood_text">Tel nömrəsi 1</p>
                            <input type="text" className="card_input" />
                        </div>
                        <div className="form_components">
                            <p className="hood_text">Tel nömrəsi 2</p>
                            <input type="text" className="card_input" />
                        </div>
                        <div className="form_components">
                            <p className="hood_text">Şəhər*</p>
                            <input type="text" className="card_input" />
                        </div>
                        <div className="form_components">
                            <p className="hood_text">Ünvan*</p>
                            <input type="text" className="card_input" />
                        </div>
                        <div className="form_components">
                            <p className="hood_text">E mail</p>
                            <input type="text" className="card_input" />
                        </div>
                        <div className="form_components">
                            <p className="hood_text">Şəxsiyyət vəsiqəsi ön hissə*</p>
                            <button className="form_button">Bax</button>
                        </div>
                        <div className="form_components">
                            <p className="hood_text">Şəxsiyyət vəsiqəsi arxa hissə</p>
                            <button className="form_button">Bax</button>
                        </div>
                    </CustomerLeftDiv>
                    <CustomerRightDiv>

                        <div className="form_components">
                            <p className="hood_text">Qeyd</p>
                            <input type="text" className="card_input_three" />
                        </div>
                    </CustomerRightDiv>
                    <ButtonsDiv>
                        <button className="bluebtn">Yadda saxla</button>
                        <button className="yellowbtn_newclient">Təmizlə</button>
                        <button className="disabledbtn">Ləğv et</button>
                        <button className="greenbtn_newclient" >Müqavilə İmzala</button>
                    </ButtonsDiv>
                </MainDiv>
            </CRMDiv>
        </CRMMainDiv>
    )
}
export default NewClient;