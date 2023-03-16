import { HomePageDiv } from "./Login.styled";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLoginAsync } from "../redux/slice/loginRedux";
// import { useEffect } from "react";




function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [fail, setFail] = useState({ open: false, note: "" })


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const succes = useSelector((state) => state.login.succes);
    // console.log(succes,"dsaDFsa" )
    // if(errormsg === "Request failed with status code 400"){
    //     console.log("xanalar bos buraxila bilmez")
    // }else if(errormsg === "Request failed with status code 401"){
    //     console.log("ad ve ya parol sehvidr")
    // }
    // const token = localStorage.getItem("token");

    // localStorage.getItem("token") ? "" : dispatch(postLoginAsync(state)) 


    // useEffect(() => {
    //         if (succes === "fulfilled") {
    //             navigate("/home");
    //         }
        
    // }, [navigate, succes])

    const handleUsername = (e) => {
        setUsername(e.target.value)
        // console.log(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        // console.log(e.target.value);
    }

    const loginform = {
        username: username,
        password: password,
    }
    const handleSubmit = (e) => {

        dispatch(postLoginAsync(loginform))
            .unwrap()
            .catch(err => {
                if (err.message === "Request failed with status code 400") {
                    setFail({ open: true, note: "Xanaları tam doldurun" },
                        setTimeout(() => { setFail({ open: false }) }, 2000)
                    )
                } else if (err.message === "Request failed with status code 401") {
                    setFail({ open: true, note: "İstifadəçi Adı və ya Şifrəsi səhvdir" },
                        setTimeout(() => { setFail({ open: false }) }, 2000)
                    )
                } else {

                }
            }
            )
            if (succes === "fulfilled") {
                navigate("/home");
            }


    }

    // useEffect(() => {
    // setFail({ open: true },
    //setTimeout(() => { setFail({ open: false }) }, 2000)
    //)      
    //     if(!localStorage.getItem("token")) {

    //     }
    //   }, [])

    return (


        <HomePageDiv>
            {
                fail.open ? <p className="alertNow">{fail.note}</p> : ""
            }
            <div className="form">
                <h1 className="title">İstifadəçi Girişi</h1>
                <form  >
                    <input className="input" type="text" id="fname" name="fname" value={username} onChange={handleUsername} placeholder="İstifadəçi Adı" /><br />
                    <input className="input" type="password" id="lname" name="lname" value={password} onChange={handlePassword} placeholder="Şifrə" /><br /><br />
                    <p className="submit" onClick={handleSubmit}>Giriş</p>
                </form>
            </div>

        </HomePageDiv>
    )
}


export default Login;