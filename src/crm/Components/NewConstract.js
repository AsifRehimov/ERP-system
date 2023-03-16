import { Buttonsgroup, LeftContractDiv, MainDiv, RightContractDiv } from "./components.styled";
import { RiCalendar2Fill } from 'react-icons/ri';
import { useState } from "react";
import Givegift from "./Givegift";


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



function NewConstract({show}) {

    const [givegift, setGivegift] = useState(false)

    return (<>
        {givegift ? <Givegift givegift={givegift} setGivegift={setGivegift} /> :
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
                        <p className="page_name">CRM / Yeni Müqavilə</p>
                    </TopDiv>
                    <BlueLine>
                        <TabList className="tabs_nav" >
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
                        <LeftContractDiv>
                            <input className="title_input" placeholder="Müştərinin Adı, Soyadı" />
                            <div className="saghdiv">
                                <input type="number" className="right_add_input" />
                            </div>
                            <div className="form_div">
                                <p className="form_div_title">Telefon Whatsapp *</p>
                                <input className="form_div_input" />
                            </div>
                            <div className="form_div">
                                <p className="form_div_title">Filial *</p>
                                <select className="form_div_input">
                                    <option></option>
                                </select>
                            </div>
                            <div className="form_div">
                                <p className="form_div_title">Məhsul *</p>
                                <select className="form_div_input">
                                    <option></option>
                                </select>
                            </div>
                            <div className="form_div">
                                <p className="form_div_title">Şəhər *</p>
                                <input className="form_div_input" />
                            </div>
                            <div className="form_div">
                                <p className="form_div_title">Ünvan *</p>
                                <input className="form_div_input" />
                            </div>
                            <div className="form_div">
                                <p className="form_div_title">Qeyd</p>
                                <input className="form_div_biginput" />
                            </div>

                        </LeftContractDiv>
                        <RightContractDiv>
                            <div className="form_div_main">
                                <p className="form_div_title">Müqavilənin növü</p>
                                <label htmlFor="cash" className="word_radio">Nağd</label>
                                <input type="radio" id="cash" name="type_of_contract" value="HTML" className="input_radio" />
                                <label htmlFor="credit" className="word_radio">Kredit</label>
                                <input type="radio" id="credit" name="type_of_contract" value="HTML" className="input_radio" />
                            </div>
                            <div className="form_div">
                                <p className="form_div_title">İlkin ödəniş *</p>
                                <input className="ilikin_odenis" placeholder="₼" />
                                <RiCalendar2Fill className="calendar" />
                            </div>
                            <div className="form_div">
                                <p className="form_div_title">İcraçı</p>
                                <select className="form_div_select">
                                    <option></option>
                                </select>
                            </div>
                            <div className="form_div">
                                <p className="form_div_title">Kredit müddəti (ay)*</p>
                                <input className="form_div_input" />
                            </div>
                            <div className="form_div">
                                <p className="form_div_title">İmza</p>
                                <input className="form_div_biginput" />
                            </div>
                        </RightContractDiv>
                        <Buttonsgroup>
                            <div className="accept_terms">
                                <input type="checkbox" id="check_input" className="check_input" />
                                <label htmlFor="check_input" className="check_label"><a href="codaze.az">Şərtləri</a> oxudum və qəbul etdim.</label>
                            </div>
                            <button className="disabled_yellow">Təmizlə</button>
                            <button className="disabled_buttons">Ləğv et</button>
                            <button className="blue_buttons" onClick={() => setGivegift(!givegift)}>Növbəti</button>
                            <button className="blue_buttons">Aylara bax</button>
                        </Buttonsgroup>
                    </MainDiv>
                </CRMDiv>
            </CRMMainDiv>}
    </>)
}

export default NewConstract;