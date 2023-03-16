import styled from "styled-components"


//givetaskdiv\/
export const WhitebigDiv = styled.div`

    width: 76%;
    height: 450px;
    background: white;
    box-shadow: 0px 3px 6px #00000029;
    display: inline-block;
    .leftdiv{
        width: 500px;
        height: 300px;
        margin: 41px 0 0 2.85%;
        display: block;
        float:left;
    }
    .title_div{
        height: 33px;
        width:100%;
        margin-bottom: 25px;
    }
    .title{
        font: bold 25px Segoe UI;
        color: #070707;
        float: left;
    }
    .title_input{
        width: 360px;
        border: 0;
        border-bottom : 1px solid #C0C0C0;
        float: right;
    }
    .content_div{
        height: 237px;
        width:100%;
    }
    .content_title{
        font: bold 20px Segoe UI;
        color: #000000;
        float: left;
    }
    .content_input{
        width: 100%;
        height: 200px;
        border: 1px solid #707070;
        margin-top: 10px;
    }
    .right_div{
        width: 440px;
        height: 200px;
        margin: 128px 0 0 9.52%;
        display: block;
        float:left ;
    }
    .middle_div{
        height: 30px;
        width:100%;
        margin-bottom: 22px;
    }
    .content_title{
        font: bold 20px Segoe UI;
        color: #000000;
        float: left;
    }
    .calendar{
        font-size: 30px;
        float: right;
    }
    .select_div{
        border: 0;
        border-bottom: 1px solid #C0C0C0;
        width:250px;
        height: 30px;
        float: right;
    }
   
    @media(max-width: 1760px){
        height: 580px;
        width: 550px;
        .right_div{
            margin: 40px 0 0 2.85%;
        }
    }
`
export const Reject = styled.a`

    float: left;
    padding: 8px 29px;
    text-decoration: none;
    background: #98B0C7;
    color: white;
    border-radius: 24px;
    font-size: 15px; 
    position: absolute;
    bottom: 40px;
    right: 170px;
    text-decoration: none;
    box-shadow: 0px 1px 1px #00000080;
    @media(max-width: 1150px){
        position: unset;
        float: right;
        margin: 20px 20px 0 0;
    }
;
`
export const SendInquiry = styled.a`

    float: left;
    padding: 8px 29px;
    text-decoration: none;
    background: #EFBF3A;
    color: white;
    border-radius: 24px;
    font-size: 15px; 
    position: absolute;
    bottom: 40px;
    right: 170px;
    box-shadow: 0px 1px 1px #00000080;
    
    @media(max-width: 1150px){
        position: unset;
        float: right;
        margin: 20px 20px 0 0;
    }
`
export const Save = styled.a`

    float: left;
    padding: 8px 15px;
    text-decoration: none;
    background: #21D25C;
    color: white;
    border-radius: 24px;
    font-size: 15px; 
    position: absolute;
    bottom: 40px;
    right: 40px;
    box-shadow: 0px 1px 1px #00000080;
    
    @media(max-width: 1150px){
        position: unset;
        float: right;
        margin: 20px 20px 0 0;
    }
`

export const TaskwhiteDiv = styled.div`

    width: 76%;
    height: 450px;
    background: white;
    box-shadow: 0px 3px 6px #00000029;
    display: inline-block;
   
    .leftdiv{
        width: 570px;
        height: 250px;
        margin: 41px 0 0 2.85%;
        display: block;
        float:left;
    }
    .title{
        float: left;
        font: bold 25px Segoe UI;
        color: #070707;
        margin-bottom: 20px;
    }
    .content{
        font: 18px Segoe UI;
        color: #000000;
        float: left;
        width: 539px;
        height: 48px;   
        margin-bottom: 47px;
    }
    .middle_div{
        height: 30px;
        width:100%;
        margin-bottom: 22px;
        display: inline-block;
    }
    .react-datepicker-wrapper {
        display: inline-block;
        padding: 0;
        border: 0;
        width: auto;
        font-size: 20px;
        float: right;
    }
    .calendar{
        font-size: 30px;
        float: right;
        margin-left: 25px
    }
    .calendaryellow{
        font-size: 30px;
        float: right;
        margin-left: 25px;
        color: #EFBF3A;
    }
    .content_title{
        font: bold 20px Segoe UI;
        color: #000000;
        float: left;
    }
    .right_div{
        width: 480px;
        height: 240px;
        margin: 52px 0 0 9.52%;
        display: block;
        float:left ;
    }
    .task_history{
        font: bold 20px Segoe UI;
        color: #000000;
        margin: 0 auto 9px auto;
        display: table;
    }
    .table_div{
        width: 100%;
        height: 200px;
    }
    th{
        border: 1px solid #E0E0E0;    
        text-align: center;   
        font-family: Segoe UI;
        padding: 0;
    }
    td{
        border: 1px solid #E0E0E0;
        font-family: Segoe UI;
    }  
    .changetime{
        width: 124px;
        height: 48px;
        text-align: start;
        
    }
    .cause{
        width: 180px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;
    }
    .newdate{
        width: 104px;
        height: 48px;
        text-align: start;
     
    }
    .allow{
        width: 64px;
        height: 48px;
        text-align: start;
     
    }
    .th_total{
        height: 48px;
        text-align: center;
        color: #000000;
    }
    .check_succes{
        font-size: 14px;
        color: #21D25C;
        float: left;
        margin: 10px;
    }
    .xicon{
        font-size: 14px;
        color: #C20000;
        float: left;
        margin-top: 10px;
    }
    .givetask{
        font: bold 20px Segoe UI;
        color: #000000;
        display: block;
        float: right;
        margin: 108px 52px 0 0 ;
    }
    .givetask a{
        font:  20px Segoe UI;
        color: #003AD9;
        margin: 0 0 0 10px ;
        text-decoration: none;
    }
    
    @media(max-width: 1873px){
        height: 640px;
        width: 600px;
        .right_div{
            margin-left: 2.85%;
        }
        .givetask{
            margin-top: 20px;
        }
    }
    `