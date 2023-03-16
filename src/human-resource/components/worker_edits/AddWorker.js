import { AddWorkerDiv, UploadPhoto, Formone, Formtwo, SecondFormDiv, Bottombtn } from "./Edits.styled";
import { IoCamera } from 'react-icons/io5'
import { IoIosAddCircle } from 'react-icons/io'

import { BlueLine, HomePageDiv, HomePageMainDiv, TopDiv, TopDivRightdiv } from "../../Hr.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { TabList } from 'react-tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"



function AddWorker({ openNewProfil, setNewOpenProfil, show, setShow }) {


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
                    <p className="page_name">İnsan Resursları / İşçi Daxil et</p>
                </TopDiv>
                <BlueLine>
                    <TabList className="tabs_nav">
                        <Link to="/human_resource" className="tabs_headers">İşçilər</Link>
                        <Link to="/human_resource/work_table" className="tabs_headers">İş qrafikləri</Link>
                    </TabList>
                </BlueLine>
                <AddWorkerDiv>
                    <input className="name_sur" placeholder="Adi Soyadi Ata Adi*" />
                    <UploadPhoto >
                        <IoCamera className="camera_icon" />
                        <input type="file" id="file_input" />
                        <label htmlFor="file_input">
                            <IoIosAddCircle className="add_icon" htmlFor="file_input" />
                        </label>
                    </UploadPhoto>
                    <div className="formdiv">
                        <Formone>
                            <div className="items">
                                <p className="items_title">Telefon 1</p>
                                <input className="items_text" type="text" />
                            </div>
                            <div className="items">
                                <p className="items_title">Telefon 2</p>
                                <input className="items_text" type="text" />
                            </div>
                            <div className="items">
                                <p className="items_title">E-mail</p>
                                <input className="items_text" type="text" />
                            </div>
                        </Formone>
                        <Formtwo>
                            <div className="items">
                                <p className="items_title">İstifadəçi adı</p>
                                <input className="items_text" type="text" />
                            </div>
                            <div className="items">
                                <p className="items_title">İstifadəçi şifrəsi</p>
                                <input className="items_text" type="text" />
                            </div>

                        </Formtwo>
                    </div>
                    <SecondFormDiv>
                        <div className="second_one">
                            <div className="items">
                                <p className="items_title">Filial</p>
                                <select className="items_text">
                                    <option value="freelancer"></option>
                                </select>
                            </div>

                            <div className="items">
                                <p className="items_title">Supervisor</p>
                                <select className="items_text">
                                    <option value="freelancer"></option>
                                </select>
                            </div>
                            <div className="items">
                                <p className="items_title">Vəzifə</p>
                                <select className="items_text">
                                    <option value="freelancer"></option>
                                </select>
                            </div>
                            <div className="items">
                                <p className="items_title">İşə başlama tarixi</p>
                                <select className="items_text">
                                    <option value="freelancer"></option>
                                </select>
                            </div>
                            <div className="items">
                                <p className="items_title">İşdən ayrılma tarixi</p>
                                <select className="items_text">
                                    <option value="freelancer"></option>
                                </select>
                            </div>
                            <div className="items">
                                <p className="items_title">Şəxsiyyət vəsiqəsi*</p>
                                <input type="file" id="passport_input" />
                                <label htmlFor="passport_input" className="download">Yüklə</label>
                            </div>
                            <div className="items">
                                <p className="items_title">Sürücülük vısiqəsi</p>
                                <input type="file" id="passport_input" />
                                <label htmlFor="passport_input" className="download">Yüklə</label>
                            </div>
                        </div>



                        <div className="second_two">

                            <div className="items">
                                <p className="items_title">Ə/H (AZN)</p>
                                <input type="text" className="items_text" placeholder="10" />
                            </div>
                            <div className="items">
                                <p className="items_title">Qeyd</p>
                                <input type="text" className="items_text_big" />
                            </div>

                        </div>
                    </SecondFormDiv>
                    <Bottombtn onClick={() => setNewOpenProfil(!openNewProfil)}>Ləğv et</Bottombtn>
                    <Bottombtn>Yadda saxla</Bottombtn>
                </AddWorkerDiv>
            </HomePageDiv>
        </HomePageMainDiv>
    )
}

export default AddWorker;