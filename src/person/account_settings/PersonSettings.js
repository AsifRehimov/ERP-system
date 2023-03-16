import { PersonSettingsDiv, UploadPhoto, Formone, BtnDiv, BottomGreen, BottomReject } from "./PersonSettings.styled";
import { IoMdTrash } from 'react-icons/io'
import { HiPencil } from 'react-icons/hi'
import { RiSettings5Fill } from 'react-icons/ri'
import { FaLock, FaBuilding } from 'react-icons/fa'

import { BlueLine, HomePageDiv, HomePageMainDiv, TopDiv, TopDivRightdiv } from "../../human-resource/Hr.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { IoNotificationsOutline, IoPersonCircleSharp } from 'react-icons/io5';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';


function PersonSettings({show}) {
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
                    <p className="page_name">İnsan Resursları/İşçi düzəliş</p>
                </TopDiv>
                <BlueLine>

                </BlueLine>
                <PersonSettingsDiv>
                    <UploadPhoto >
                        <img className="edit_image" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt="person" />
                        <input type="file" id="file_input" />
                        <IoMdTrash className="trash_icon" />
                        <label htmlFor="file_input">
                            <HiPencil className="edit_icon" htmlFor="file_input" />
                        </label>
                    </UploadPhoto>
                    <Formone>
                        <div className="title_div"><IoPersonCircleSharp className="icon_title" /><p className="title">Hesab detalları</p></div>
                        <div className="items">
                            <p className="items_title">Ad Soyad *</p>
                            <input className="items_input_left" value="Əliyev Fərid" />
                        </div>
                        <div className="items">
                            <p className="items_title">İstifadəçi adı *</p>
                            <input className="items_input_left" value="Ferid_333" />
                        </div>
                        <div className="items">
                            <p className="items_title">İstifadəçi adı *</p>
                            <input className="items_input_left" value="050 230 23 03" />
                        </div>
                        <div className="items">
                            <p className="items_title">E-mail</p>
                            <input className="items_input_left" value="aliyev_ferid@gmail.com" />
                        </div>
                    </Formone>
                    <Formone>
                        <div className="title_div"><RiSettings5Fill className="icon_title" /><p className="title">Proqram detalları</p></div>
                        <div className="items">
                            <p className="items_title">Logo</p>
                            <a href="#ddsd" className="download">Bax</a>
                        </div>
                        <div className="items">
                            <p className="items_title">İstifadəçi şəkli</p>
                            <a href="#xkjfkj" className="download">Bax</a>
                        </div>

                    </Formone>
                    <Formone>
                        <div className="title_div"><FaLock className="icon_title" /><p className="title">Şifrə dəyişmək</p></div>
                        <div className="items">
                            <p className="items_title">Yeni şifrə</p>
                            <input className="items_input_left" />
                        </div>
                        <div className="items">
                            <p className="items_title">Yeni şifrəni təkrarla</p>
                            <input className="items_input_left" />
                        </div>
                    </Formone>
                    <Formone>
                        <div className="title_div"><FaBuilding className="icon_title" /><p className="title">Şirkət detalları</p></div>
                        <div className="items">
                            <p className="items_title">Ünvanı *</p>
                            <input className="items_input_left" value="Qulu Quliyev 34 A" />
                        </div>
                        <div className="items">
                            <p className="items_title">Tel. no *</p>
                            <input className="items_input_left" value="012 214 32 65" />
                        </div>
                        <div className="items">
                            <p className="items_title">Email *</p>
                            <input className="items_input_left" value="info@ocean.az050 230 23 03" />
                        </div>
                        <div className="items">
                            <p className="items_title">Veb sayt</p>
                            <input className="items_input_left" value="ocean.az" />
                        </div>
                    </Formone>
                    <BtnDiv>
                        <BottomGreen>Yadda saxla</BottomGreen>
                        <BottomReject>Ləğv et</BottomReject>
                    </BtnDiv>
                </PersonSettingsDiv>
            </HomePageDiv>
        </HomePageMainDiv>
    )
}

export default PersonSettings;