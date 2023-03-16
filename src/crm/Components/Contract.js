import { LeftMainDiv, MainDiv, RightMainDiv, ContractTableDiv, Moneys, Buttons } from "./components.styled";
import vip from "../../photo/vip.svg"


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
import { Link } from "react-router-dom";


function Contract({show}) {



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
                    <p className="page_name">CRM/Müqavilə</p>
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
                    <LeftMainDiv>
                        <Link className="card_title" to="/crm/custom_card">Əliyev Fərid Kamran <img className="vip_svg" src={vip} alt="vip" /></Link>
                        <div className="card_top">
                            <div className="card_top_left">
                                <p className="top_left_p">Telefon 1</p>
                                <p className="top_left_p">Şəhər</p>
                                <p className="top_left_p">Ünvan</p>
                            </div>
                            <div className="card_top_right">
                                <p className="top_right_p">055 230 30 30</p>
                                <p className="top_right_p">Bakı</p>
                                <p className="top_right_p" title="Ziya Bünyadov 32A ev 39, mən yasayiram">Ziya Bünyadov 32A ev 39, mən yasayiram</p>
                            </div>
                        </div>
                        <div className="card_top">
                            <div className="card_top_left">
                                <p className="top_left_p">Filial</p>
                                <p className="top_left_p">Məhsul</p>
                                <p className="top_left_p">İcraçı</p>
                            </div>
                            <div className="card_top_right">
                                <a href="m" className="top_right_blue">Bakı</a>
                                <a href="m" className="top_right_blue" title="kfjzlxkjfsdkljdsklldflkdlk">iPhone 13 Pro</a>
                                <a href="m" className="top_right_blue">Kərimov Elvin</a>
                            </div>
                        </div>
                        <div className="card_bottom">
                            <div className="card_top_left">
                                <p className="top_left_p">Satış  Tarixi</p>
                                <p className="top_left_p">Hədiyyə</p>
                            </div>
                            <div className="card_top_right">
                                <a href="m" className="top_right_blue">23/09/2023</a>
                                <a href="m" className="top_right_blue">Kabura</a>
                            </div>
                        </div>
                    </LeftMainDiv>
                    <RightMainDiv>
                        <ContractTableDiv>
                            <table className="table-fixed">
                                <thead>
                                    <tr>
                                        <th className="th_total table_check"></th>
                                        <th className="th_total table_company">Ay No</th>
                                        <th className="th_total table_id">ID</th>
                                        <th className="th_total table_leader">Ödəyəcəyi Tarix</th>
                                        <th className="th_total table_office">Ödədiyi Tarix</th>
                                        <th className="th_total table_time">Ödəyəcəyi Məbləğ</th>
                                        <th className="th_total table_rest">Ödədiyi Məbləğ</th>
                                        <th className="th_total table_team">Ödəmə Statusu</th>
                                        <th className="th_total table_const">Qeyd</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table_check"><input type="checkbox" className="checkbox" /></td>
                                        <td className="table_company">1</td>
                                        <td className="table_id">43548</td>
                                        <td className="table_leader" >2/1/2022</td>
                                        <td className="table_office">3/9/2022</td>
                                        <td className="table_time">20301</td>
                                        <td className="table_rest">611</td>
                                        <td className="table_team" style={{ color: "#21D25C" }}>Ödənib</td>
                                        <td className="table_const">İlkin ödəniş</td>

                                    </tr>
                                </tbody>
                            </table>
                        </ContractTableDiv>
                        <Moneys>
                            <p className="money"><b>Ümumi:</b> 1890 ₼</p>
                            <p className="money"><b>Ödənilən:</b> 988 ₼</p>
                            <p className="money"><b>Qalıq:</b> 902 ₼</p>
                        </Moneys>
                        <Buttons>
                            <button className="blue">Çap et</button>
                            <button className="disabled">Ləğv et</button>
                            <button className="red">Qaytarmaq</button>
                        </Buttons>
                    </RightMainDiv>
                </MainDiv>
            </CRMDiv>
        </CRMMainDiv>
    )
}

export default Contract;