import { CardBigDiv, WorkerDiv } from "../Hr.styled";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaPen, FaTrash } from 'react-icons/fa';
import { CalculatorMainDivworker, CalculatorSmallDiv } from "./Components.styled";
import { FiltersDiv, Holdingcheck } from "./worker_edits/Edits.styled";
import { MdCancel } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from "react";

import { BlueLine, HomePageDiv, HomePageMainDiv, TopDiv, TopDivRightdiv } from "../Hr.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { TabList } from 'react-tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link } from "react-router-dom"
import { AlertNow } from "../../financial/components/Financial.styled";



function Worker({ show, setUserid, successTransfer }) {

    const [details, setDetails] = useState([]);
    const [openFilter, setOpenFilter] = useState(false)


    useEffect(() => {
        const urls = "someapilink/users";
        axios.get(urls, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
        }
        )
            .then((res) => {
                return (
                    setDetails(res.data.results),
                    console.log(res.data.results)
                )
            }).catch((data) => {
                console.log("")
            })
    }, []);


    return (
        <>
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
                        <p className="page_name">İnsan Resursları</p>
                    </TopDiv>
                    <BlueLine>
                        <TabList className="tabs_nav">
                            <Link to="/human_resource" className="tabs_headers">İşçilər</Link>
                            <Link to="/human_resource/work_table" className="tabs_headers">İş qrafikləri</Link>
                        </TabList>
                    </BlueLine>
                    {
                        successTransfer.open ? <AlertNow>Dəyişiklik uğurla edildi!</AlertNow> : ""
                    }
                    <WorkerDiv className=" float-left ">
                        <Link to="/human_resource/addworker" className="add_worker">İşçi Əlavə et</Link>
                        <CardBigDiv>
                            {
                                details.map(index => {
                                    return (index.id > 1 ?

                                        (
                                            // <div>
                                            <Link className="card_div" to={`/human_resource/edit_worker/${index.id}`} key={index.id} onClick={() => setUserid({ index: index, api: details })}>
                                                <img className="card_img" src={index.profile_image === null ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" : index.profile_image} alt={index.fullname} />
                                                <p className="card_title">{index.fullname}</p>
                                                {index.company === null ? "" : <p className="position">{index.company.name}</p>}
                                                <p className="position">{index.position.name}</p>
                                                <p className="phone_number">{index.phone_number_1}</p>
                                                <FaTrash className="trash_icon" />
                                                <FaPen className="pen_icon" />
                                            </Link>

                                        ) : ""
                                    )
                                })
                            }
                        </CardBigDiv>
                        {openFilter ? (<CalculatorMainDivworker>
                            <FaAngleDoubleRight className="openfilter" onClick={() => setOpenFilter(!openFilter)} />
                            <p className="calcul_title" style={{ margin: "-10px auto 20px auto" }}>Ətraflı axtar</p>
                            <Holdingcheck className="filters_section">
                                <input type="checkbox" className="checkbox" />
                                <p className="holding">Holding</p>
                            </Holdingcheck>
                            <FiltersDiv style={{ marginTop: "25px" }}>
                                <div>
                                    <div className="search_filters_section">
                                        <input type="search" className="search" placeholder="Müştəri adı axtar" />
                                        <BsSearch className="search_icon" />
                                    </div>
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
                                        <option>Departament</option>
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
                                        <option>Ə/H növü</option>
                                    </select>
                                    <MdCancel className="cancel_icon" />
                                </div>

                            </FiltersDiv>
                            <button className="delete">Təmizlə</button>
                        </CalculatorMainDivworker>) : <CalculatorSmallDiv ><FaAngleDoubleLeft className="openfilter" onClick={() => setOpenFilter(!openFilter)} />
                        </CalculatorSmallDiv>}
                    </WorkerDiv>
                </HomePageDiv>
            </HomePageMainDiv>
        </>
    )
}

export default Worker;