import styled from "styled-components";

export const FullScreen = styled.div`
background-color: rgba(0,0,0,0.5);
width: 100%;
display: block;
position: fixed;
z-index: 1;
top: 0;
left: 0;
backdrop-filter: blur(30px);

.salary_pay_div{
    width: 600px;
    height: 300px;
    margin: 3% auto 0 auto;
    background: white;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 25px;
    display: grid;
}
.calendar_div{
    width: 700px;
    height: 600px;
    margin: 3% auto 0 auto;
    background: white;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 25px;
    display: grid;
}

.holiday_title{
    font-size: 25px;
    font-weight: 700;
    font-family: Segoe UI;
    margin: 40px auto 0 auto;
    width: auto;
    height: 32px;
}
.salary_pay_title{
    font-size: 20px;
    font-weight: bold;
    font-family: Segoe UI;
    color: #070707;
    margin: 73px auto 0 auto;
    width: 434px;
    text-align: center;
}
.datapicker_div{
    width: 350px;
    height: 310px;
    margin: -170px auto 0 auto;
}
.delete{
    background: #EFBF3A;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 9px 23px;
    font-family: Segoe UI;
    margin: 427px 0 33px 314px;
    position: absolute;
    box-shadow: 0px 1px 1px #00000080;
}
.reject{
    background: #98B0C7;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 9px 23px;
    font-family: Segoe UI;
    margin: 511px 0 33px 418px;
    position: absolute;
    box-shadow: 0px 1px 1px #00000080;
    text-decoration: none;
}
.reject_salary{
    background: #C20000;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 9px 38px;
    font-family: Segoe UI;
    margin: 194px 0 33px 183px;
    position: absolute;
    box-shadow: 0px 1px 1px #00000080;
    text-decoration: none;
}
.add{
    background: #21D25C;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 9px 23px;
    font-family: Segoe UI;
    margin: 25px;
    position: absolute;
    margin: 511px 0 33px 537px;
    box-shadow: 0px 1px 1px #00000080;
}
.add_salary{
    background: #21D25C;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 9px 41px;
    font-family: Segoe UI;
    margin: 25px;
    position: absolute;
    margin: 194px 0 33px 313px;
    box-shadow: 0px 1px 1px #00000080;
}


.react-datepicker__input-container input{
    border: 0;
    height: 27px;
    width: 160px;
    padding: 0;
    float: left;
    margin-left: 87px;
}
.react-datepicker__input-container{
    display: block;
}
.react-datepicker-wrapper{
    display: block;
}
.react-datepicker__input-container input:focus{
    border: 0;
    outline: 0;
    outline-offset: 0;
    border-color: none;
    box-shadow: none;
}
.smalldiv{
    width: 100%;
    height: 27px;
    margin-top: 20px;
}
.form_title{
    float: left;
    font: bold 20px Segoe UI;
    color: #000000;
}
.form_input{
    border: 0;
    border-bottom: 1px solid #707070;
    float: right;
    height: 27px;
    width: 203px;
    padding: 0 5px;
}
.calendar_icon{
    font-size: 25px;
    float: right;
    color: black;
}
.calendar_input{
    height: 27px;
    width: 150px;
    padding: 0;
    float: left;
    margin-left: 90px;
}
.calendar_big_div{
    width: 350px;
    height: 153px;
    border: 1px solid #707070;

}
`
export const FullScreenHolding = styled.div`
background-color: rgba(0,0,0,0.5);
width: 100%;
display: block;
position: fixed;
z-index: 1;
top: 0;
left: 0;
backdrop-filter: blur(30px);

.salary_pay_div{
    width: 600px;
    height: 300px;
    margin: 3% auto 0 auto;
    background: white;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 25px;
    display: grid;
}
.calendar_div{
    width: 600px;
    height: 500px;
    margin: 3% auto 0 auto;
    background: white;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 25px;
    display: grid;
}

.holiday_title{
    font-size: 25px;
    font-weight: 700;
    font-family: Segoe UI;
    margin: 40px auto 0 auto;
    width: auto;
    height: 32px;
}
.salary_pay_title{
    font-size: 20px;
    font-weight: bold;
    font-family: Segoe UI;
    color: #070707;
    margin: 73px auto 0 auto;
    width: 434px;
    text-align: center;
}
.datapicker_div{
    width: 405px;
    height: 310px;
    margin: -170px 130px 0 65px;
}
.delete{
    background: #EFBF3A;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 9px 23px;
    font-family: Segoe UI;
    margin: 427px 0 33px 314px;
    position: absolute;
    box-shadow: 0px 1px 1px #00000080;
}
.reject{
    background: #98B0C7;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 9px 23px;
    font-family: Segoe UI;
    margin: 411px 0 33px 338px;
    position: absolute;
    box-shadow: 0px 1px 1px #00000080;
    text-decoration: none;
}
.reject_salary{
    background: #C20000;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 9px 38px;
    font-family: Segoe UI;
    margin: 194px 0 33px 183px;
    position: absolute;
    box-shadow: 0px 1px 1px #00000080;
    text-decoration: none;
}
.add{
    background: #21D25C;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 9px 23px;
    font-family: Segoe UI;
    margin: 25px;
    position: absolute;
    margin: 411px 0 33px 457px;
    box-shadow: 0px 1px 1px #00000080;
}
.add_salary{
    background: #21D25C;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 9px 41px;
    font-family: Segoe UI;
    margin: 25px;
    position: absolute;
    margin: 194px 0 33px 313px;
    box-shadow: 0px 1px 1px #00000080;
}


.react-datepicker__input-container input{
    border: 0;
    height: 27px;
    width: 160px;
    padding: 0;
    float: left;
    margin-left: 87px;
}
.react-datepicker__input-container{
    display: block;
}
.react-datepicker-wrapper{
    display: block;
}
.react-datepicker__input-container input:focus{
    border: 0;
    outline: 0;
    outline-offset: 0;
    border-color: none;
    box-shadow: none;
}
.smalldiv{
    width: 100%;
    height: 27px;
    margin-top: 20px;
}
.form_title{
    float: right;
    font: bold 20px Segoe UI;
    color: #000000;
    margin-right: 24px;
}
.form_input{
    border: 0;
    border-bottom: 1px solid #707070;
    float: right;
    height: 27px;
    width: 215px;
    padding: 0 5px;
}
.calendar_icon{
    font-size: 25px;
    float: right;
    color: black;
}
.calendar_input{
    height: 27px;
    width: 150px;
    padding: 0;
    float: left;
    margin-left: 90px;
}
.calendar_big_div{
    width: 214px;
    height: 118px;
    border: 1px solid #707070;
    float: right;
}
`