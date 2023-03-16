import styled from "styled-components"

export const FullScreen = styled.div`
background-color: rgba(0,0,0,0.5);
width: 100%;
display: block;
position: fixed;
z-index: 1;
top: 0;
left: 0;
backdrop-filter: blur(30px);
.top_div{
    height: 33px;
    width: 600px;
    display: flex;
    position: absolute;
}
.calendar_div{
    width: 600px;
    height: 500px;
    margin: 6% auto 0 auto;
    background: white;
    display: flex;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 25px;
}
.left_exit{
    font-size: 30px;
    margin: 22px 0 0 22px;
    color: #073763;
}
.holiday_title{
    font-size: 25px;
    font-weight: 700;
    font-family: Segoe UI;
    margin: 20px  0 0 165px;
}
.react-datepicker{
    margin: 89px 0 0 163px;
    width: 274px;
    height: 274px;
    display: grid;
    position: absolute;
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
    margin: 427px 0 33px 427px;
    box-shadow: 0px 1px 1px #00000080;


}



`