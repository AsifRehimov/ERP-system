import styled from 'styled-components';


export const TeamsDiv = styled.div`
        
    width: 100%;
    height: auto;
    background: #F8F8F8;
`

export const TeamsTableDiv = styled.div`

    width: 930px;
    height: auto;
    margin: 33px 0 0 2.85%;
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
        width: 32px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_leader{
        width: 160px;
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
    .table_company{
        width: 86px;
        height: 48px;
        font-family: Sagoe UI;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;

    }
    .table_time{
        width: 107px;
        height: 48px;
        text-align: start;
        font-family: Segoe UI;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_office{
        width: 82px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;

    }
    .table_team{
        width: 75px ;
        height: 48px ;
        text-align: start;
        font-family: Segoe UI;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_const{
        width:67px;
        height: 48px;
        font-family: Segoe UI;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_rest{
        width: 87px;
        height: 48px;
        font-family: Segoe UI;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_vacation{
        width: 112px;
        height: 48px;
        font-family: Segoe UI;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_strike{
        width: 54px;
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
export const ButtonsDiv = styled.div`

    width: 70%;
    height: 60px;
    border-radius:20px;
    margin: 31px 0 0 2.85%;
    float: left;
`;
export const TeamsButton = styled.button`

    background: #24619A;
    text-align: center;
    border-radius:20px;
    font-size: 15px;
    color: white;
    padding: 9px 23px;
    font-family: Segoe UI;
    margin-right: 25px;
    box-shadow: 0px 1px 1px #00000080;

`;
export const TeamsButtone = styled.button`

    background: #98B0C7;
    text-align: center;
    border-radius:20px;
    font-size: 15px;
    color: white;
    padding: 9px 23px;
    font-family: Segoe UI;
    margin-right: 25px;
    box-shadow: 0px 1px 1px #00000080;

`;

export const CalculatorMainDiv = styled.div`

    width: 274px;
    height: -webkit-fill-available;
    background: white;
    position: absolute;
    top: 110px;
    right: 0;
    box-shadow: 0px 3px 6px #00000029;
    .calcul_title{
        width: fit-content;
        margin: 45px auto 0 auto;
        font: normal normal bold 20px Segoe UI;
    }
    .delete{
        font: 15px Segoe UI;
        padding: 8px 20px;
        border-radius: 20px;
        box-shadow: 0px 1px 1px #00000080;
        background: #EFBF3A;
        color: white;
        margin: 0 13% 0 0;
        float: right;
    }
    @media(max-width: 1550px){
        width: 180px;
    }
`

export const CalculatorSmallDiv = styled.div`
    height: calc(100vh - 110px);
    width: 60px;
    background: white;
    position: sticky;
    margin-top: -607px;
    top: 0px;
    float: right;
    box-shadow: 0px 3px 6px #00000029;
    .openfilter{
        margin: 15px auto;
        font-size: 20px;
        color: #073763;
        cursor: pointer;

    }
`
export const CalculatorMainDivworker = styled.div`
    width: 274px;
    height: calc(100vh - 110px);
    background: white;
    position: fixed;
    right:0;
    top: 100px;
    float: right;
    box-shadow: 0px 3px 6px #00000029;
    display: block;
      .calcul_title{
        width: fit-content;
        margin: 45px auto 0 auto;
        font: normal normal bold 20px Segoe UI;
    }
.delete{
    font: 15px Segoe UI;
    padding: 8px 20px;
    border-radius: 20px;
    box-shadow: 0px 1px 1px #00000080;
    background: #EFBF3A;
    color: white;
    margin: 0 13% 0 0;
    float: right;
}
.openfilter{
        margin: 15px 0 0 15px;
        font-size: 20px;
        color: #073763;
        cursor: pointer;
    }
@media(max-width: 1550px){
    width: 180px;
}
`

//  addholiday css-leri   \\\\\\\\\\\

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
.img_user_card{
    margin: 50px;
    width: 400px;
    height: 400px;
}
.nothing{
    font: 20px Segoe UI;
    margin: 250px 0 0 180px;
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
.reject{
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
.insert_div{
    width: 380px;
    height: 120px;
    margin: 146px auto 0 auto;
}
.insert_title{
    font: bold 18px Segoe UI;
    color: #070707;
    margin: 0 auto;
    display: table;
    width: auto;
}
.insert_input{
    color: #C0C0C0;
    border: 0;
    border-bottom: 1px solid #C0C0C0;
    padding: 0;
    margin: 50px auto 0 auto;
    width: 214px;
    height: 24px;
    display: block;
}
.insert_section{
    height: 20px;
    width: 230px;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #C0C0C0;
    background-color: white;
    font-size: 13px;
    color: #C0C0C0;
    font-family: Segoe UI;
    display: block;
    float: right;
}
.insert_search{
    height: 20px;
    border: 0;
    border-bottom: 1px solid #C0C0C0;
    color: #C0C0C0;
    width: 230px;
    font-family: Segoe UI;
    font-size: 14px;
    padding: 0;
    float: right;
}
.insert_title{
    font-size: 18px;
    font-family: Segoe UI;
    font-weight: bold;
    float: left;
    background: none;
}
.insert_top_filter{
    display: flex;
    margin-top: 13px;
}

`