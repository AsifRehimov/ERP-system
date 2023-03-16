import { WarehouseDiv, WarehouseMainDiv } from "../Task.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { RiCalendar2Fill } from 'react-icons/ri';
import { BsXLg } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5'
import { TopDiv, TopDivRightdiv, BlueLine } from "../../human-resource/Hr.styled";
import { Tabs, TabPanel } from 'react-tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SendInquiry, Save, TaskwhiteDiv } from "./TaskCom.styled";
import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";

function Tasks({show}) {

    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

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
                                <DropdownItem href="#/action-2" className="open_dropdown_choose">Şirkət parametrləri</DropdownItem>
                                <DropdownItem href="#/action-3" className="open_dropdown_choose">Hesabdan çıx</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </TopDivRightdiv>
                    <p className="page_name">Tapşırıq ver</p>
                </TopDiv>
                <Tabs defaultIndex={1}>
                    <BlueLine></BlueLine>
                    <TabPanel>
                        <TaskwhiteDiv>
                            <div className="leftdiv">
                                <p className="title">Bakı anbarını köçürmək</p>
                                <p className="content">Yeni ünvan Ə. Rəcəbli küçəsindədir. Yerləşmə üçün Əhmədov Fəridlə əlaqə saxlayıb xidməti maşınları cəlb edin.</p>
                                <div className="middle_div">
                                    <p className="content_title">Başlama tarixi</p>
                                    <RiCalendar2Fill onClick={startDate} className="calendar" />
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        customInput={<ExampleCustomInput />}
                                    />
                                </div>
                                <div className="middle_div">
                                    <p className="content_title">Bitmə tarixi</p>
                                    <RiCalendar2Fill onClick={startDate} className="calendaryellow" />
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        customInput={<ExampleCustomInput />}
                                    />
                                </div>
                            </div>
                            <div className="right_div">
                                <p className="task_history">Tapşırığın tarixçəsi</p>
                                <table className="table_div">
                                    <thead>
                                        <tr>
                                            <th className="th_total changetime">Dəyişmə tarixi</th>
                                            <th className="th_total cause">Səbəb</th>
                                            <th className="th_total newdate">Yeni yarix</th>
                                            <th className="th_total allow">İcazə</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="changetime">07.02.2022</td>
                                            <td className="cause">Xəstəlik</td>
                                            <td className="newdate">08.02.2022</td>
                                            <td className="allow"><FaCheck className="check_succes" /><BsXLg className="xicon" /></td>
                                        </tr>
                                        <tr>
                                            <td className="changetime">14.02.2022</td>
                                            <td className="cause">Ailəvi problem</td>
                                            <td className="newdate">19.02.2022</td>
                                            <td className="allow"><FaCheck className="check_succes" /><BsXLg className="xicon" /></td>
                                        </tr>
                                        <tr>
                                            <td className="changetime">25.02.2022</td>
                                            <td className="cause">Qəza</td>
                                            <td className="newdate">29.02.2022</td>
                                            <td className="allow"><FaCheck className="check_succes" /><BsXLg className="xicon" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="givetask">Tapşırıq verən:<a href="/crm/custom_card">Əliyev Fərid Vahid</a></p>
                        </TaskwhiteDiv>
                        <SendInquiry>Sorğu göndər</SendInquiry>
                        <Save>Tamamlandı</Save>
                    </TabPanel>

                </Tabs>
            </WarehouseDiv>
        </WarehouseMainDiv>
    )
}

export default Tasks;
