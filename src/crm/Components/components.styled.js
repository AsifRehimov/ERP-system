import styled from "styled-components";


//Contract.js \/    \/   \/  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const MainDiv = styled.div`

    width: 100%;
    height: auto;
    background: #FCFCFC;
    .menu_list{
        position: absolute;
        top: 115px;
        right: 280px;
        font-size: 20px;
        color:#929292;
    }
    .menu_nav{
        position: absolute;
        top: 115px;
        right: 310px;
        font-size: 20px;
        color: #929292;
    }
    @media(max-width: 1300px){
        .menu_list{
            right: 190px
        }
        .menu_nav{
            right: 220px

        }
    }
`

export const ContractTableDiv = styled.div`

width: 920px;
height: auto;

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
    width: 79px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;

}
.table_company{
    width: 49px;
    height: 48px;
    text-align: start;
    font-family: Segoe UI;
    padding-left: 10px;
    padding-right: 10px;

}
.table_leader{
    width: 123px;
    height: 48px;
    font-family: Sagoe UI;
    text-align: start;
    padding-left: 10px;
    font-family: Segoe UI;
    padding-right: 10px;
    // white-space: nowrap; 
    // overflow: hidden;
    // text-overflow: ellipsis; 
}
.table_time{
    width: 144px;
    height: 48px;
    text-align: start;
    font-family: Segoe UI;
    padding-left: 10px;
    padding-right: 10px;

}
.table_office{
    width: 110px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    font-family: Segoe UI;
    padding-right: 10px;

}
.table_team{
    width: 125px ;
    height: 48px ;
    text-align: start;
    font-family: Segoe UI;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: bold;
}
.table_const{
    width:116px;
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;

}
.table_rest{
    width: 134px;
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;

}

.th_total{
    height: 48px;
    text-align: center;
    padding: 0;
    font-size: 14px;
}
@media (max-width: 1400px) {
    width: 600px;
    overflow-x: scroll;
    .table-fixed{
        width:600px;
        overflow-x: scroll;
    }
}
`;
export const Moneys = styled.div`

    width: 600px;
    height: 43px;
    float: right;
    .money{
        font: 20px Segoe UI;
        margin-left: 52px;
        float: right;
        margin-top: 15px;
    }

`
export const Buttons = styled.div`

    width: 600px;
    height: 43px;
    float: right;
    margin-top: 40px;
    margin-bottom: 40px;
    .red{
        padding: 11px 16px;
        font: 15px Segoe UI;
        float: right;
        color: white;
        margin-left: 27px;
        background: #C20000;
        box-shadow: 0px 1px 1px #00000080;
        border-radius: 20px;
    }
    .disabled{
        padding: 11px 29px;
        font: 15px Segoe UI;
        float: right;
        color: white;
        margin-left: 27px;
        background: #98B0C7;
        box-shadow: 0px 1px 1px #00000080;
        border-radius: 20px;
    }
    .blue{
        padding: 11px 31px;
        font: 15px Segoe UI;
        float: right;
        color: white;
        margin-left: 27px;
        background: #24619A;
        box-shadow: 0px 1px 1px #00000080;
        border-radius: 20px;
    }
`


export const LeftMainDiv = styled.div`

    width: 476px;
    height: 520px;
    display: block;
    margin-top: 45px;
    float: left;
    margin-left: 2.85%;
    .card_title{
        font: bold 30px Segoe UI;
        color: #003AD9;
        float: left;
        margin-bottom: 47px;
        cursor: pointer;
        text-decoration: none;
    }
    .vip_svg{
        float: right;
        display: inline;
        margin-left: 22px;
    }
    .card_top{
        width: 100%;
        height: 146px;
        float: left;
        margin-bottom: 30px;
        border-bottom: 1px solid #707070;
        display: flex;
    }
    .card_bottom{
        width: 100%;
        height: 146px;
        float: left;
        margin-bottom: 30px;
        display: flex;
    }
    .card_top_left{
        width: 37.40%;
        height: 145px;
        float: left;
    }
    .card_top_right{
        width: 63%;
        height: 145px;
        float: left;
    }
    .top_left_p{;
        font: bold 20px Segoe UI;
        color: black;
        margin-bottom: 16px;
    }
    .top_right_p{
        font: 20px Segoe UI;
        color: black;
        margin-bottom: 16px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .top_right_blue{
        font: 20px Segoe UI;
        color: black;
        margin-bottom: 16px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #003AD9;
        width: 160px;
        display: block;
        text-decoration: none;
    }
`
export const RightMainDiv = styled.div`

    width: 920px;
    height: auto;
    background: bu;
    display: block;
    margin-top: 45px;
    float: left;
    margin-left: 5.42%;
    @media (max-width: 1400px) {
        width: 600px;
        margin-left: 0;
    }

`
// Contract.js ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  /\  /\  /\  \\\\\\


// 2 CustomerCard \/    \/   \/  \/   \/   \/    \/   \/   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const CustomerLeftDiv = styled.div`

    width: 490px;
    height: 440px;
    margin-top: 45px;
    float: left;
    margin-left: 2.85%;
    .customer_title{
        font: bold 25px Segoe UI;
        width: 100%;
        padding-bottom: 5px;
        border-bottom: 1px solid #C0C0C0;
        margin-bottom: 57px;
    }
    .customer_title_input{
        font: 25px Segoe UI;
        color:#C0C0C0;
        width: 100%;
        padding-bottom: 5px;
        background-color: #FCFCFC;
        border: 0;
        border-bottom: 1px solid #C0C0C0;
        margin-bottom: 57px;
    }
    .form_components{
        width: 100%;
        height: 24px;
        margin-bottom: 21px;    
    }
    .hood_text{
        color: #070707;
        font: bold 18px Segoe UI;
        float: left;
    }
    .card_input{
        width: 272px;
        height: 24px;
        border: 0;
        border-bottom: 1px solid #C0C0C0;
        color: #070707;
        float: right;
    }
    .form_button{
        float: right;
        padding: 4px 50px;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 4px;
        background: #073763;
        color: #F3FFFF;
    }
`
export const CustomerRightDiv = styled.div`

    width: 490px;
    height: 305px;
    margin-top: 161px;
    float: left;
    margin-left: 9.23%;
    .form_components{
        width: 100%;
        height: 24px;
        margin-bottom: 21px;    
    }
    .hood_text{
        color: #070707;
        font: bold 18px Segoe UI;
        float: left;
    }
    .card_input_one{
        width: 215px;
        height: 24px;
        border: 0;
        border-bottom: 1px solid #C0C0C0;
        color: #003AD9;
        float: right;
        font-weight: bold;
    }
    .card_input_two{
        width: 215px;
        height: 24px;
        border: 0;
        border-bottom: 1px solid #C0C0C0;
        color: #C20000;
        float: right;
        font-weight: bold;
    }
    .card_input_three{
        width: 100%;
        height: 181px;
        border: 0;
        border: 1px solid #C0C0C0;
        color: #070707;
        float: right;
    }
    
`

export const ButtonsDiv = styled.div`

    width: 600px;
    height: 41px;
    float: right;
    margin: 388px 46px 50px 0;
    .bluebtn{
        font: 15px Segoe UI;
        color: white;
        padding: 11px 15px;
        border-radius: 20px;
        background: #24619A;
        box-shadow: 0px 1px 1px #00000080;
        margin-right: 24px;
        float: right;
        text-decoration: none;
    }
    .disabledbtn{
        font: 15px Segoe UI;
        color: white;
        padding: 11px 29px;
        border-radius: 20px;
        background: #98B0C7;
        box-shadow: 0px 1px 1px #00000080;
        margin-right: 24px;
        float: right;

    }
    .greenbtn{
        font: 15px Segoe UI;
        color: white;
        padding: 11px 22px;
        border-radius: 20px;
        background: #21D25C;
        box-shadow: 0px 1px 1px #00000080;
        float: right;
        text-decoration: none;
    }
    .yellowbtn_newclient{
        font: 15px Segoe UI;
        color: white;
        padding: 11px 26px;
        border-radius: 20px;
        background: #CED42B;
        box-shadow: 0px 1px 1px #00000080;
        float: right;
        margin-right: 24px;

    }
    .greenbtn_newclient{
        font: 15px Segoe UI;
        color: white;
        padding: 11px 22px;
        border-radius: 20px;
        background: #21D25C;
        box-shadow: 0px 1px 1px #00000080;
        float: right;
        margin-right: 24px;

    }
    @media (max-width: 1376px){
        margin: 88px 46px 50px 0;

    }
`

// customer card ^^^^^^^^^^^^^^^^^^^^\\\\

// NewCustomer.js \/ \/ \/ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const CardDivs = styled.div`

    width: 65%;
    height: auto;
    margin: 36px  0 0 2.85%;
    display: inline-block;

`
export const Cardcustomer = styled.div`

    width: 250px;
    height: 140px;
    background: #CFCCF9;
    margin: 0 30px 30px 0;
    float: left;
    text-decoration: none;
    .cardcust_title{
        text-align: start;
        margin: 22px 0 3px 31px;
        font:20px Segoe UI;
        color: #000000;
    }
    .degree{
        font: bold 13px Segoe UI;
        text-align: start;
        margin: 0 0 3px 31px;
    }
    .number{
        font:15px Segoe UI;
        letter-spacing: 0px;
        color: #000000;
        text-align: start;
        margin: 0 0 3px 31px;
    }
    .pen{
        font-size: 17px;
        color: #929292;
        position: absolute;
        margin: 14px 0 0 193px;
    }
    .trash{
        font-size: 17px;
        color: #929292;
        position: absolute;
        margin: 14px 0 0 219px;
    }
    `



    // NewCustomer.js ^^^^^^^^^^^^^^^^^^ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    // NewConstract.js \/ \/ \/ \/ \/ \/ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


    export const LeftContractDiv = styled.div`
    
        width: 560px;
        height: 450px;
        margin: 40px 0 0 2.85%;
        display: inline-block;
        float: left;
        .title_input{
            width: 292px;
            margin: 0 0 50px 0;
            color: #C0C0C0;
            font: 25px Segoe UI;
            padding: 4px;
            border: none;
            border-bottom: 1px solid #707070;
            background-color:#FCFCFC;
        }
        .form_div{
            width: 100%;
            height: 27px;
            margin-bottom: 22px;
        }
        .form_div_title{
            font: bold 20px Segoe UI;
            color: #000000;
            float: left;
            width: auto;
        }
        .form_div_input{
            font-family: Segoe UI;
            color: #000000;
            float: right;
            border: 0;
            border-bottom: 1px solid #C0C0C0;
            width: 315px;
            height: 23px;
            background-color: #FCFCFC;

        }
        .form_div_biginput{
            font-family: Segoe UI;
            color: #000000;
            float: right;
            border: 1px solid #C0C0C0;
            width: 315px;
            height: 120px;
        }
        .right_add_input{
            float: right;
            width: 50px;
            height: 25px;
            margin-top: 190px;
            padding: 0 0 0 5px;

        }
        .saghdiv{
            float: right !important;
            width: 50px;
            height:450px;
        }
    `
    export const RightContractDiv = styled.div`
    
        width: 480px;
        height: 580px;
        margin: 40px 0 0 11.90%;
        display: inline-block;
        .form_div_main{
            width: 100%;
            height: 27px;
            margin-bottom: 66px;
        }
        .form_div{
            width: 100%;
            height: 27px;
            margin-bottom: 22px;
        }
        .form_div_title{
            font: bold 20px Segoe UI;
            color: #000000;
            float: left;
            width: auto;
        }
        .word_radio{
            height: 21px;
            width: auto;
            color: #000000;
            font: 16px Segoe UI;
            margin-right: 33px;
            float: right;
        }
        .input_radio{
            height: 14px;
            width: 14px;
            color: #000000;
            margin-top: 4px;
            margin-right: 33px;
            float: right;
            border: 3px solid #000000;
        }
        .ilikin_odenis{
            border: 0;
            border-bottom: 1px solid #C0C0C0;
            margin-left: 50px;
            width: 100px;
            text-align: end;
            color: black;
            font-weight: bold;
            background-color: #FCFCFC;

        }
        .calendar{
            font-size: 25px;
            color: #000000;
            float: right;
        }
        .form_div_select{
            font-family: Segoe UI;
            color: #000000;
            float: right;
            border: 0;
            border-bottom: 1px solid #C0C0C0;
            width: 261px;
            height: 23px;
            margin-right: 54px;
            background-color: #FCFCFC;
        }
        .form_div_input{
            font-family: Segoe UI;
            color: #000000;
            float: right;
            border: 0;
            border-bottom: 1px solid #C0C0C0;
            width: 170px;
            height: 23px;
            margin-right: 54px;
            background-color: #FCFCFC;

        }
        .form_div_biginput{
            font-family: Segoe UI;
            color: #000000;
            float: right;
            border: 0;
            border: 1px solid #C0C0C0;
            width: 100%;
            height: 287px;
            margin-top: 17px;

        }
        @media(max-width: 1434px){
            margin: 40px 0 0 2.85%;
        }
    `
    export const Buttonsgroup = styled.div`
    
        width:815px;
        height: 40px;
        margin: 290px 40px 40px 0;
        float: right;
        @media(max-width: 1434px){
            margin: 40px 40px 40px 0;
        }
        .blue_buttons{
            font: 15px Segoe UI;
            color: white;
            padding: 11px 19px;
            background: #24619A;
            margin-right: 23px;
            float: right;
            box-shadow: 0px 1px 1px #00000080;
            border-radius: 20px;
        }
        .disabled_buttons{
            font: 15px Segoe UI;
            color: white;
            padding: 11px 29px;
            background: #98B0C7;
            margin-right: 23px;
            float: right;
            box-shadow: 0px 1px 1px #00000080;
            border-radius: 20px;
        }
        .disabled_yellow{
            font: 15px Segoe UI;
            color: white;
            padding: 11px 27px;
            background: #EFBF3A;
            float: right;
            box-shadow: 0px 1px 1px #00000080;
            border-radius: 20px;
        }
        .accept_terms{
            float: left;
            height: 27px;
            margin-top: 11px;

        }
        .check_input{
            width: 25px;
            height: 25px;
            border-radius: 4px;
        }
        .check_label{
            font: 20px Segoe UI;
            margin-left: 13px;
        }
        .check_label a{
            color: #4F76E4;
        }

    `
    export const GiveGift = styled.div`
    
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        height: 100vh;
        display: block;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        backdrop-filter: blur(30px);
        .givegift{
            width: 600px;
            height: 500px;
            margin: 6% auto 0 auto;
            background: white;
            display: flex;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 25px;
        }
        .title_gift{
            font: bold 25px Segoe UI;
            width: 424px;
            margin: 20px 88px 62px 88px;
            color: black;
            height: 40px;
            position: absolute;
        }
        .filter_div{
            width: 464px;
            height: 33px;
            margin:115px 67px 280px 67px;
            position: absolute;
            font: 20px Segoe UI;

        }
        .filter_name{
            width: 325px;
            height:25px;
            padding: 0;
            border: 0;
            border-bottom: 1px solid #C0C0C0;
        }
        .filter_numeral{
            width: 50px;
            height: 25px;
            border: 1px solid #707070;
            margin: 4px 14px 0 19px;

        }
        .add_icon{
            float: right;
            font-size: 25px;
            margin: 4px 7px 0 0;
        }
        .button_div_gift{
            margin: 427px 70px 0 70px;
            width: 460px;
            height: 40px;
            position: absolute;
        }
        .btn_yellow_gift{
            padding: 9px 27px;
            border-radius: 20px;
            box-shadow: 0px 1px 1px #00000080;
            background: #EFBF3A;
            margin-left: 25px;
        }
        .btn_disabled_gift{
            padding: 9px 28px;
            border-radius: 20px;
            box-shadow: 0px 1px 1px #00000080;
            background: #98B0C7;
            margin-left: 25px;
        }
        .btn_green_gift{
            padding: 9px 31px;
            border-radius: 20px;
            box-shadow: 0px 1px 1px #00000080;
            background: #21D25C;
            margin-left: 87px;
        }
    `;