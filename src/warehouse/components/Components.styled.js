import styled from "styled-components";

export const TeamsTableDiv = styled.div`

width: 800px;
height: auto;
margin: 41px 0 0 2.85%;
display: inline-block;
float: left;
th{
    border: 1px solid #E0E0E0;    
    text-align: center;   
    font-family: Segoe UI;
}
td{
    border: 1px solid #E0E0E0;
    font-family: Segoe UI;
 
}   

.checkbox{
    width: 22px;
    height: 22px;
    border-radius: 5px;
}
.checkbox:checked {
    border-radius: 5px;

}
.table_check{
    width: 41px;
    height: 48px;
    text-align: center;
}
.table_id{
    width: 110px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;

}
.table_leader{
    width: 35px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    font-family: Segoe UI;
    padding-right: 10px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
}
.table_company{
    height: 48px;
    font-family: Sagoe UI;
    text-align: start;
    padding-left: 10px;
    font-family: Segoe UI;
    padding-right: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width:127px;
    display: block;
    padding-top: 10px;
}

.table_office{
    width: 75px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    font-family: Segoe UI;
    padding-right: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.table_const{
    width: 50px;
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;

}
.table_rest{
    width: 105px;
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
}
.th_total{
    height: 48px;
    text-align: center;
    display: revert;
    padding: 0;
    color: #000000;
}

.table_white{
    background: white;
}
.table_white a{
    font-family: Segoe UI;
    color: black;
    text-decoration: none;
}

@media (max-width: 1000px) {
    width: 400px;
    overflow-x: scroll;
    .table-fixed{
        width:400px;
        overflow-x: scroll;
    }
}

`;

export const ProductName = styled.div`

    margin: 30px 0 46px 2.85%;
    width: 74%;
    height: 40px;
    float: left;
    .name{
        font:  bold 22px Segoe UI;
        color: #070707;
        float:left;
        margin-right: 26px;
    }
    .name_input{
        width: 396px;
        heoght: 35px;
        font : 25px Segoe UI;
        color:black;
        padding: 1px 17px;
        border: 0;
        border-bottom: 1px solid #C0C0C0;;
        background-color: #FCFCFC;
    }
`
export const AddLeft = styled.div`

    width: 495px;
    height: 490px;
    margin: 0 9.52% 0 2.85%;
    float: left;
    .add_form_div{
        width: 100%;
        height: 27px;
        margin-bottom: 13px;
        display: inline-block;
    }
    .add_form_title{
        float: left;
        font: bold 20px Segoe UI;
        color: #000000;
    }
    .add_select{
        width: 230px;
        height: 27px;
        border:0;
        border-bottom: 1px solid #C0C0C0;
        float: right;
        padding:0;
        background-color: #FCFCFC;
        padding-left:16px;
        font-size: 20px;
        color: black;
    }
    .add_azn_div{
        width: 230px;
        height: 27px;
        border-bottom: 1px solid #C0C0C0;
        float: right;
    }
    .azn_input{
        width: 200px;
        height: 25px;
        float: left;
        border: none;
        background-color: #FCFCFC;
        padding: 0;
        padding-left:16px;
        font-size: 20px;
        margin-top: -1px;
        color: black;
    }
    .azn_p{
        float: right;
        font: 20px Segoe UI;
        color: #000000;
        margin: -3px 12px 0 0;

    }
    .add_input_text{
        width: 230px;
        height: 20px;
        border: 0;
        border-bottom: 1px solid #C0C0C0;
        float: right;
        background-color: #FCFCFC;
        padding-left:16px;
        font-size: 20px;
    }
`
export const AddRight = styled.div`

    width: 553px;
    height: 410px;
    margin: 0 0 0 2.85%;
    float: left;
    .add_form_div{
        width: 100%;
        height: 27px;
        margin-bottom: 13px;
        display: inline-block;
    }
    .add_form_div2{
        width: 495px;
        height: 27px;
        margin-bottom: 13px;
        display: inline-block;
    }

    .add_form_title{
        float: left;
        font: bold 20px Segoe UI;
        color: #000000;
    }
    .add_select{
        width: 230px;
        height: 27px;
        border:0;
        border-bottom: 1px solid #C0C0C0;
        float: right;
        padding:0;
        background-color: #FCFCFC;
        padding-left:16px;
        font-size: 20px;
        color: black;
    }
    .measure{
        font: bold 20px Segoe UI;
        color: black;
        float: right;
    }
    .add_input_text{
        width: 230px;
        height: 20px;
        border: 0;
        border-bottom: 1px solid #C0C0C0;
        float: right;
        background-color: #FCFCFC;
        padding-left:16px;
        font-size: 20px;
        color: black;

    }
    .big_input_add{
        width: 409px;
        height: 217px;
        border: 1px solid #707070;
        background: white;
        float: right;
        margin-top: 27px;

    }
`
export const ChooseBox =styled.div`

    margin: 44px 0 0 0;
    width: 100%;
    height: 135px;
    .checkbox_div{
        width: 100%;
        height: 30px;
        margin-bottom: 15px;
    }
    .checkbox{
        color: black;
        width: 29px;
        height: 29px;
        float: left
    }
    .checkbox_text{
        font: bold 20px Segoe UI;
        color: black;
        float: left;
        margin-left: 30px;
    }
`

export const AddImg = styled.img`

    width: 250px;
    height: 250px;
    background: white;
    border: 1px solid #707070;
    float: right;
    margin: 40px 40px 30px 0;
`
export const AddPhoto = styled.div`

    width: 250px;
    height: 250px;
    background: white;
    border: 1px solid #707070;
    float: right;
    margin: 40px 40px 30px 0;
    #addphoto{
        display: none;
    }
    .camera{
        color: #C0C0C0;
        font-size: 100px;
        margin: 73px 74px 0 74px;
    }
    .plus{
        color: #C0C0C0;
        font-size: 30px;
        margin: 25px 20px 0 200px;
    }
`

export const ColorButtons = styled.div`

    width: 500px;
    height: 40px;
    margin: 280px 40px 30px 0;
    float: right;
    .green{
        padding: 9px 25px;
        box-shadow: 0px 1px 1px #00000080;
        border-radius: 20px;
        background: #21D25C;
        margin-right: 24px;
        font: 15px Segoe UI;
        color: white;
        text-decoration: none;
    }
    .disabled{
        padding: 9px 28px;
        box-shadow: 0px 1px 1px #00000080;
        border-radius: 20px;
        background: #98B0C7;
        margin-right: 24px;
        font: 15px Segoe UI;
        color: white;
        text-decoration: none;

    }
    .blue{
        padding: 9px 31px;
        box-shadow: 0px 1px 1px #00000080;
        border-radius: 20px;
        background: #24619A;
        margin-right: 24px;
        font: 15px Segoe UI;
        color: white;
        text-decoration: none;

    }
    .red{
        padding: 9px 45px;
        box-shadow: 0px 1px 1px #00000080;
        border-radius: 20px;
        background: #C20000;
        font: 15px Segoe UI;
        color: white;
        text-decoration: none;

    }
`

export const FullScreen = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 100vw;
    height: 100vh;
    display: block;
    position: fixed;
    z-index: 1;
    top:0;
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
    margin: 85px  0 0 114px;
}

.delete{
    background: #98B0C7;
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
.measure_div{
    width: 400px;
    height: 28px;
    margin: 238px auto 0 auto;
}
.measure_p{
    font: bold 18px Segoe UI;
    color: #070707;
    float: left;
}
.measure_input{
    width: 280px;
    padding: 0;
    border:0;
    border-bottom: 1px solid #00000029;
    float: right;
}


`

export const AddStocke = styled.div`

    width: 486px;
    height: 320px;
    margin: 85px auto 0 auto;
    float: left;
    .title_input{
        width: 100%;
        font: bold 25px Segoe UI;
        color: #C0C0C0;
        padding: 2px 0;
        border: none;
        border-bottom: 1px solid #C0C0C0;
        margin-bottom: 50px;
    }
    .add_form_div{
        width: 100%;
        height: 27px;
        margin-bottom: 13px;
        display: inline-block;
    }
    .add_form_div2{
        width: 495px;
        height: 27px;
        margin-bottom: 13px;
        display: inline-block;
    }

    .add_form_title{
        float: left;
        font: bold 20px Segoe UI;
        color: #000000;
    }
    .add_select{
        width: 230px;
        height: 27px;
        border:0;
        border-bottom: 1px solid #C0C0C0;
        float: right;
        padding:0;
        background-color: #FCFCFC;
        padding-left:16px;
        font-size: 20px;
        color: black;
    }
    .measure{
        font: bold 20px Segoe UI;
        color: black;
        float: right;
    }
    .add_input_text{
        width: 230px;
        height: 20px;
        border: 0;
        border-bottom: 1px solid #C0C0C0;
        float: right;
        background-color: #FCFCFC;
        padding-left:16px;
        font-size: 20px;
        color: black;

    }
    .big_input_add{
        width: 409px;
        height: 217px;
        border: 1px solid #707070;
        background: white;
        float: right;
        margin-top: 27px;

    }
`