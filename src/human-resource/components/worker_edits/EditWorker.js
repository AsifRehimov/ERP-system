import { AddWorkerDiv, UploadPhoto, Formone, Formtwo, SecondFormDiv, Bottombtn } from "./Edits.styled";
import { IoMdTrash } from 'react-icons/io'
import { HiPencil } from 'react-icons/hi'

import { BlueLine, HomePageDiv, HomePageMainDiv, TopDiv, TopDivRightdiv } from "../../Hr.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { TabList } from 'react-tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import FrontIdentity from "./FrontIdentity";
import BackIdentity from "./BackIdentity";
import DriveIdentity from "./DriveIdentity";



function EditWorker({ setSuccessTransfer, show, userid, officeDataApi, companyDataApi }) {

    const navigate = useNavigate()

    const [RegionData, setRegionData] = useState([])
    const [departmentData, setDepartmentData] = useState([])
    const [positionData, setPositionData] = useState([])
    const [comissionData, setComissionData] = useState([])
    const [title, setTitle] = useState(userid.index.fullname)
    const [region, setRegion] = useState(userid.index.region?.id)
    const [phone1, setPhone1] = useState(userid.index.phone_number_1)
    const [phone2, setPhone2] = useState(userid.index.phone_number_2)
    const [adress, setAdress] = useState(userid.index.address)
    const [email, setEmail] = useState(userid.index.email)
    const [username, setUsername] = useState(userid.index?.username)
    // const [allow, setAllow] = useState("")
    const [active, setActive] = useState(userid.index?.is_active)
    const [company, setCompany] = useState(userid.index.company?.id)
    const [office, setOffice] = useState(userid.index.office?.id)
    const [department, setDepartment] = useState(userid.index.department?.id)
    const [supervisor, setSupervisor] = useState(userid.index.supervisor?.id)
    const [position, setPosition] = useState(userid.index.position?.id)
    const [comission, setComission] = useState(userid.index.commission?.id)
    const [salarytype, setSalarytype] = useState(userid.index.salary_style)
    const [profiles, setProfiles] = useState(null)
    const [profil, setProfil] = useState(profiles === null ? userid.index.profile_image : profiles)
    const [salary, setSalary] = useState(userid.index.salary)
    const [Note, setNote] = useState(userid.index.note)
    const [contract] = useState(userid.index.contract_date)
    const [frontIdentity, setFrontIdentity] = useState({open: false, front:""})
    const [backIdentity, setBackIdentity] = useState({open: false, back:""})
    const [driveIdentity, setDriveIdentity] = useState({open: false, drive:""})


    if( userid.index === true){
        navigate('/human_resource')
    }

    
    useEffect(() => {
        const cony = `someapilinkusers/region/`;
        axios.get(cony, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        }
        )
          .then((data) => {
            return (
              setRegionData(data.data.results)
            )
          })
    
      }, []);
         
    useEffect(() => {
        const cony = `someapilink/company/departments/`;
        axios.get(cony, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        }
        )
          .then((data) => {
            return (
                setDepartmentData(data.data.results)
            )
          })
    
      }, []);
    useEffect(() => {
        const cony = `someapilink/company/positions/`;
        axios.get(cony, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        }
        )
          .then((data) => {
            return (
                setPositionData(data.data.results)
            )
          })
    
      }, []);
    useEffect(() => {
        const cony = `someapilink/salaries/commission/`;
        axios.get(cony, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        }
        )
          .then((data) => {
            return (
                setComissionData(data.data.results)
            )
          })
    
      }, []);
      console.log(username);
    let formData = new FormData()
    formData.append("username", username)
    if(profiles !== null){
        formData.append("profile_image" , profiles)
    }
    if(company !== userid.index.company?.id){
        formData.append("company_id", parseInt(company, 10))
    }
    if(office !== userid.index.office?.id){
        formData.append("office_id", parseInt(office, 10))
    }
    if(position !== userid.index.position?.id){
        formData.append("position_id", parseInt(position, 10))
    }
    if(comission !== userid.index.commission?.id){
        formData.append("commission_id", parseInt(comission, 10))
    }
    if(region !== userid.index.region?.id){
        formData.append("region_id", parseInt(region, 10))
    }
    // formData.append("supervisor_id", null)
    if(department !== userid.index.department?.id){
        formData.append("department_id", parseInt(department, 10))
    }
    if(active !== userid.index?.is_active){
        formData.append("is_active", active)
    }
    if(title !== userid.index.fullname){
        formData.append("fullname", title)
    }
    if(phone1 !== userid.index.phone_number_1){
        formData.append("phone_number_1", phone1)
    }
    if(phone2 !== userid.index.phone_number_2){
        formData.append("phone_number_2", phone2)
    }
    if(adress !== userid.index.address){
        formData.append("address", adress)
    }
    if(email !== userid.index.email){
        formData.append("email", email)
    }
    if(salarytype !== userid.index.salary_style){
        formData.append("salary_style", salarytype)
    }
    if(salary !== userid.index.salary){
        formData.append("salary", parseInt(salary, 10))
    }
    if(Note !== userid.index.note){
        formData.append("note", Note)
    }

    let render;
        if(profiles !== null){
            render = URL.createObjectURL(profiles)
        }

    // "user_permissions_id": "" ,
    // const profilP = (URL.createObjectURL(profil))
    // const data={
        // "company_id": parseInt(company, 10),
        // "department_id": parseInt(department, 10),
        // "office_id": parseInt(office, 10) ,
        // "position_id": parseInt(position, 10) ,
        // "commission_id": parseInt(comission, 10),
        // "region_id": parseInt(region, 10),
        // "username": username,
        // "is_active": active,
        // "fullname": title,
        // "phone_number_1": phone1,
        // "phone_number_2": phone2 === null ? "" : phone2,
        // "address": adress === null ? "" : adress,
        // "email": email === null ? "" : email,
        // "salary_style": salarytype,
        // "salary": parseInt(salary, 10),
        // "note": Note === null ? "" : Note ,
        // "profile_image": reader
        // "supervisor_id": supervisor === undefined ? null: parseInt(supervisor, 10)
    // }


    
    const saveInfo = () =>{
        const addlink = `someapilink/users/${userid.index.id}`;
        axios.put(addlink, formData,{
            headers: {
                  "Content-Type": "multipart/form-data",
                  "Authorization": `Bearer ${localStorage.getItem("token")}`,
              },
            }
              ).then(navigate('/human_resource'),
               setSuccessTransfer({ open: true },
                setTimeout(() => { setSuccessTransfer({ open: false }) }, 2000)
              )).catch(err => console.log(err))
    }

    console.log(formData);
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
                    <TabList className="tabs_nav">
                        <Link to="/human_resource" className="tabs_headers">İşçilər</Link>
                        <Link to="/human_resource/work_table" className="tabs_headers">İş qrafikləri</Link>
                    </TabList>
                </BlueLine>
                
                {frontIdentity.open ? <FrontIdentity frontIdentity={frontIdentity} setFrontIdentity={setFrontIdentity}/> :
                backIdentity.open ? <BackIdentity backIdentity={backIdentity} setBackIdentity={setBackIdentity}/> :
                driveIdentity.open ? <DriveIdentity driveIdentity={driveIdentity} setDriveIdentity={setDriveIdentity}/> :
                 <AddWorkerDiv >
                    <input className="name_sur" placeholder="Adi Soyadi Ata Adi*" value={title} onChange={e =>setTitle(e.target.value)}/>
                    <UploadPhoto >
                        <img alt="photom" className="edit_image" src={profil === null ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" :  (profiles === null ? profil : render)} />
                        <input type="file" id="file_input" accept='image/*' onChange={e => setProfiles((e.target.files[0]))}/>
                        <IoMdTrash className="trash_icon" onClick={() => setProfil(null)}/>
                        <label htmlFor="file_input">
                            <HiPencil className="edit_icon" htmlFor="file_input" />
                        </label>
                    </UploadPhoto>
                    <div className="formdiv">
                        <Formone>
                            <div className="items">
                                <p className="items_title">Telefon 1</p>
                                <input className="items_text" type="number" value={phone1 === null ? "" : phone1} placeholder="" onChange={e =>setPhone1(e.target.value)}/>
                            </div>
                            <div className="items">
                                <p className="items_title">Telefon 2</p>
                                <input className="items_text" type="number" value={phone2 === null ? "" : phone2 } placeholder="" onChange={e =>setPhone2(e.target.value)}/>
                            </div>
                            <div className="items">
                                <p className="items_title">Şəhər</p>
                                
                                <select className="items_text" value={region === null ? "" : region} onChange={e => setRegion(e.target.value)}>
                                   {RegionData.map( x => <option value={x.id}>{x.region_name}</option>)}
                                </select>
                            </div>
                            <div className="items">
                                <p className="items_title">Ünvan</p>
                                <input className="items_text" type="text" value={adress === null ? "" : adress} onChange={e => setAdress(e.target.value)} placeholder="" />
                            </div>
                            <div className="items">
                                <p className="items_title">E-poçt</p>
                                <input className="items_text" type="text" value={email === null ? "" : email} onChange={e => setEmail(e.target.value)} placeholder="" />
                            </div>
                        </Formone>
                        <Formtwo>
                            <div className="items">
                                <p className="items_title">İstifadəçi adı</p>
                                <input className="items_text" type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="" />
                            </div>

                            <div className="items">
                                <p className="items_title">İşçi icaze</p>
                                <select className="items_text">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="items">
                                <p className="items_title">İşçi statusu</p>
                                <select className="items_text" style={ true ? {color:"#07BE07", fontWeight:"bold"} : {color:"red", fontWeight:"bold"}} value={active} onChange={e => setActive(e.target.value)}>
                                    <option value={true} className='active'>Aktiv</option>
                                    <option value={false} className='passiv'>Passiv</option>
                                </select>
                            </div>
                        </Formtwo>
                    </div>
                    <SecondFormDiv>
                        <div className="second_one">
                            <div className="items">
                                <p className="items_title">Şirkət</p>
                                <select className="items_text" value={company === null ? "" : company} onChange={e => setCompany(e.target.value)}>
                                    {companyDataApi.map(x =>  <option value={x.id}>{x.name}</option>)}
                                </select>
                            </div>

                            <div className="items">
                                <p className="items_title">Ofis</p>
                                <select className="items_text" value={office === null ? "" : office} onChange={e => setOffice(e.target.value)}>
                                    {officeDataApi.map(x => x.company.id === parseInt(company, 10) ? <option value={x.id}>{x.name}</option> : "")}
                                </select>
                            </div>
                            <div className="items">
                                <p className="items_title">Departament</p>
                                <select className="items_text" value={department === null ? "" : department} onChange={e => setDepartment(e.target.value)}>
                                    {departmentData.map(x =>  <option value={x.id}>{x.name}</option>)}
                                </select>
                            </div>
                            <div className="items">
                                <p className="items_title">Supervisor</p>
                                <select className="items_text" value={supervisor === null ? "" : supervisor} onChange={e => setSupervisor(e.target.value)}>
                                    {[userid.api].map(x => x.id > 1 && <option value={x.id}>{x.fullname}</option>)}
                                </select>
                            </div>
                            <div className="items">
                                <p className="items_title">Vəzifə</p>
                                <select className="items_text" value={position === null ? "" : position} onChange={e => setPosition(e.target.value)}>
                                    {positionData.map(x => <option value={x.id}>{x.name}</option>)}
                                </select>
                                
                            </div>
                            <div className="items">
                                <p className="items_title">Müqavilə bağlanma tarixi</p>
                                <p className="contract">{contract}</p>
                            </div>
                            <div className="items">
                            <p className="items_title">Şəxsiyyət vəsiqəsi ön hissə</p>
                                <label htmlFor="passport_input" className="download" onClick={() => setFrontIdentity({open:true, front: userid.index.photo_ID})}>Bax</label>
                            </div>
                            <div className="items">
                                <p className="items_title">Şəxsiyyət vəsiqəsi ön hissə</p>
                                <label htmlFor="passport_input" className="download" onClick={() => setBackIdentity({open:true, back: userid.index.back_photo_of_ID})}>Bax</label>
                            </div>
                            <div className="items">
                                <p className="items_title">Sürücülük vəsiqəsi</p>
                                <label htmlFor="passport_input" className="download" onClick={() => setDriveIdentity({open:true, drive: userid.index.driving_license_photo})}>Bax</label>
                            </div>
                        </div>



                        <div className="second_two">

                            {salarytype === "Fix" ? "" :
                            <div className="items">
                                <p className="items_title">Komissiya</p>
                                <select className="items_text" value={comission === null ? "" : comission} onChange={e => setComission(e.target.value)}>
                                    {comissionData.map(x => <option value={x.id}>{x.commission_name}</option>)}
                                </select>
                            </div>
                            }
                            <div className="items">
                                <p className="items_title">Ə/H növü</p>
                                <select className="items_text" value={salarytype === null ? "" : salarytype} onChange={e => setSalarytype(e.target.value)}>
                                    <option value="Fix">Fix</option>
                                    <option value="Fix+Kommissiya"> Fix+Kommissiya</option>
                                    <option value="Kommissiya">Kommissiya</option>
                                </select>
                            </div>
                            <div className="items">
                                <p className="items_title">Ə/H (AZN)</p>
                                <input type="number" className="items_text"  value={salary} onChange={e => setSalary(e.target.value)} placeholder="" />
                            </div>
                            <div className="items">
                                <p className="items_title">Qeyd</p>
                                <textarea type="text" className="items_text_big" value={Note} onChange={(e) =>setNote(e.target.value)}></textarea>
                            </div>

                        </div>
                    </SecondFormDiv>
                    <Bottombtn onClick={saveInfo} style={{background:"#21D25C"}}>Yadda saxla</Bottombtn>
                    <Link to="/human_resource"><Bottombtn style={{background:"#98B0C7"}}>Ləğv et</Bottombtn></Link>
                    <Bottombtn onClick={saveInfo}>Tarixçə</Bottombtn>
                    <Bottombtn onClick={saveInfo}>Xidməti müqaviləsi</Bottombtn>
                    <Bottombtn onClick={saveInfo}>Şifrəni dəyiş</Bottombtn>
                </AddWorkerDiv>}
            </HomePageDiv>
        </HomePageMainDiv>
    )
}

export default EditWorker;