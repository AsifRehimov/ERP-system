import { WarehouseDiv, WarehouseMainDiv } from "../Warehouse.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5'
import { TopDiv, TopDivRightdiv, BlueLine } from "../../human-resource/Hr.styled";
import { Tabs, TabList, TabPanel } from 'react-tabs';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddImg, AddLeft, AddRight, ChooseBox, ColorButtons, ProductName } from "./Components.styled";
import { Link } from "react-router-dom";



function EditProduct({ show }) {


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
                    <p className="page_name">Anbar/Məhsul Əlavə Et  </p>
                </TopDiv>
                <Tabs>
                    <BlueLine>
                        <TabList className="tabs_nav" defaultindex={1}>

                        <Link className="tabs_headers" to="/warehouse">Əməliyyatlar</Link>
                            <Dropdown>
                                <DropdownToggle variant="success" id="dropdown-basic" className="tabs_headers">
                                    Məhsul
                                </DropdownToggle>

                                <DropdownMenu className="open_drop_down">
                                    <Link to="/warehouse/product" className="open_dropdown_Link">Məhsullar</Link>
                                    <Link to="#" className="open_dropdown_Link">Ölçü Vahidləri</Link>
                                    <Link to="#/action-3" className="open_dropdown_Link">Kateqoriyalar</Link>
                                </DropdownMenu>
                            </Dropdown>
                            <Link className="tabs_headers" to="/warehouse/stock">Stok</Link>
                        </TabList>
                    </BlueLine>

                    <TabPanel>
                        <ProductName>
                            <p className="name">Məhsulun Adı *</p>
                            <input type="text" className="name_input" placeholder="452 PREMIUM, 6 filtrli, qapalı tipli" />
                        </ProductName>
                        <AddImg src="https://media.licdn.com/dms/image/C4E0BAQF7N7Ajw8MHDQ/company-logo_200_200/0/1579099993405?e=2147483647&v=beta&t=RlJnCfdOijw_zWFZjljLRYS3wrIgYv6K6AnVVW8Hr_E" />
                        <AddLeft>
                            <div className="add_form_div">
                                <p className="add_form_title">Şirkət *</p>
                                <select className="add_select">
                                    <option>Bakı</option>
                                </select>
                            </div>
                            <div className="add_form_div">
                                <p className="add_form_title">Kateqoriyası*</p>
                                <select className="add_select">
                                    <option>Elektronika</option>
                                </select>
                            </div>
                            <div className="add_form_div">
                                <p className="add_form_title">Ölçü vahidi*</p>
                                <select className="add_select">
                                    <option>Ədəd</option>
                                </select>
                            </div>
                            <div className="add_form_div">
                                <p className="add_form_title">Alış Qiyməti</p>
                                <div className="add_azn_div">
                                    <input className="azn_input" placeholder="Ədəd" />
                                    <p className="azn_p">₼</p>
                                </div>
                            </div>
                            <div className="add_form_div">
                                <p className="add_form_title">Satış Qiyməti</p>
                                <div className="add_azn_div">
                                    <input className="azn_input" placeholder="1890" />
                                    <p className="azn_p">₼</p>
                                </div>
                            </div>
                            <div className="add_form_div">
                                <p className="add_form_title">Barkod</p>
                                <input className="add_input_text" placeholder="1890654651321" />
                            </div>
                            <ChooseBox>
                                <div className="checkbox_div">
                                    <input type="checkbox" className="checkbox" id="checkbox" default />
                                    <label className="checkbox_text" htmlFor="checkbox">Servisə ehtiyac var</label>
                                </div>
                                <div className="checkbox_div">
                                    <input type="checkbox" className="checkbox" id="checkbox" />
                                    <label className="checkbox_text" htmlFor="checkbox">Hədiyyə</label>
                                </div>
                                <div className="checkbox_div">
                                    <input type="checkbox" className="checkbox" id="checkbox" />
                                    <label className="checkbox_text" htmlFor="checkbox">Satılır</label>
                                </div>
                            </ChooseBox>
                        </AddLeft>
                        <AddRight>
                            <div className="add_form_div">
                                <div className="add_form_div2">
                                    <p className="add_form_title">Çəkisi</p>
                                    <input className="add_input_text" placeholder="4" />
                                </div>
                                <p className="measure">kq</p>
                            </div>
                            <div className="add_form_div">
                                <div className="add_form_div2">
                                    <p className="add_form_title">Həcmi</p>
                                    <input className="add_input_text" placeholder="1.2" />
                                </div>
                                <p className="measure">m<sup>3</sup></p>
                            </div>
                            <div className="add_form_div">
                                <div className="add_form_div2">
                                    <p className="add_form_title">Eni</p>
                                    <input className="add_input_text" placeholder="0.40" />
                                </div>
                                <p className="measure">m</p>
                            </div>
                            <div className="add_form_div">
                                <div className="add_form_div2">
                                    <p className="add_form_title">Uzunluğu</p>
                                    <input className="add_input_text" placeholder="0.80" />
                                </div>
                                <p className="measure">m</p>
                            </div>
                            <div className="add_form_div">
                                <div className="add_form_div2">
                                    <p className="add_form_title">Hündürlüyü</p>
                                    <input className="add_input_text" placeholder="0.70" />
                                </div>
                                <p className="measure">m</p>
                            </div>
                            <div className="add_form_div">
                                <div className="add_form_div2">
                                    <p className="add_form_title">Servis növü</p>
                                    <select className="add_select">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className="add_form_div">
                                <p className="add_form_title">Qeyd</p>
                                <input type="text" className="big_input_add" />
                            </div>
                        </AddRight>
                        <ColorButtons>
                            <Link to="#xjkvkf" className="green">Əlavə et</Link>
                            <Link to="#xjkvkf" className="disabled">Ləğv et</Link>
                            <Link to="#xjkvkf" className="blue">Çap et</Link>
                            <Link to="#xjkvkf" className="red">Sil</Link>
                        </ColorButtons>
                    </TabPanel>

                </Tabs>
            </WarehouseDiv>
        </WarehouseMainDiv>
    )
}

export default EditProduct;
