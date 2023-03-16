import styled from "styled-components";


export const HoldingDiv = styled.div`
    float: left;
    width:100%;
    height: auto;
    .holding{
        width: 457px;
        height: 200px;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 10px;
        background-color: #073763;
        margin: 62px auto 0 auto;
    }
    .titletop{
        font: 30px Segoe UI;
        color: #F3FFFF;
        margin: 20px 185px 0 185px;
        width: 130px;
        height:40px ;
        display: inline-block;
    }
    .titlebottom{
        font: 15px Segoe UI;
        color: #F3FFFF;
        margin: 10px 217px 0 217px;
        display: inline-block;
        width: 66px;
        height: 20px;   

    }
    .mediumdiv{
        width: 100%;
        height: 45px;
        background: #24619A;
        text-align: center;
        font: normal normal normal 20px Segoe UI;
        color: #F3FFFF;
        margin-top: 32px;
        padding-top: 7px;
    }
`
export const CompanyMainDiv = styled.div`

    width: 100%;
    height: auto;
    float: left;
    .companydiv{
        width: 457px;
        height: 230px;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 10px;
        background: #24619A;
        float: left;
        margin: 0 0 0 3%;
        margin-top: 60px;
        display: block;
    }
    .inputcompany:focus{
        outline: 0;
    }
    .inputcompany{
        width: 80px;
        margin-left: 10px;
        background-color: #F3FFFF;
        height: 30px;
        padding: 0;
        border: 0;
        font:20px Segoe UI;
        color: #073763; 
    }
    .inputdivcompany{
        width: 500px;
        height: 50px;
        margin-bottom: 8px;
        background-color: #F3FFFF;
        font:20px Segoe UI;
        color: #073763; 
        text-align: center;
        padding-top: 8px;
        }
    .companytitle{
        margin: 27px auto;
        font:30px Segoe UI;
        color: #F3FFFF;
        width: fit-content;
    }
    .totalcash{
        padding-top: 8px;
        text-align: center;
        width: 100%;
        height: 50px;
        font:20px Segoe UI;
        color: #073763;
        background-color: #F3FFFF;
    }
`
export const AlertNow = styled.div`

    width: 100%;
    height: 50px;
    position: sticky;
    top: 20px;
    background-color: #2EB62C;
    border-radius: 12px;
    box-shadow: 5px 8px 9px #00020029;
    margin: 0 auto;
    z-index: 2;
    text-align: center;
    font: 21px Segoe UI;
    color: white;
    display: flow-root;
    padding-top: 10px;
    margin-top: -50px;

`



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
    width: 750px;
    height: 600px;
    margin: 3% auto 0 auto;
    background: white;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 25px;
    display: grid;
}
.about_icon{
    float: right;
    font-size: 25px;
    color: #073763;
    margin: 16px 22px 0 0;
}

.holiday_title{
    font-size: 25px;
    font-weight: 700;
    font-family: Segoe UI;
    margin: 41px auto 0 auto;
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
.history{
    font: bold 20px Segoe UI;
    color: #000000;
    position: absolute;
    margin: 142px 0 0 60px;}
.delete{
    background: #C20000;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 9px 45px;
    font-family: Segoe UI;
    margin: 513px 0 33px 341px;
    position: absolute;
    box-shadow: 0px 1px 1px #00000080;
}
.deletedis{
    background: #FF9999;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 9px 45px;
    font-family: Segoe UI;
    margin: 513px 0 33px 341px;
    position: absolute;
    box-shadow: 0px 1px 1px #00000080;
}
.reject{
    background: #98B0C7;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 9px 20px;
    font-family: Segoe UI;
    margin: 511px 0 33px 470px;
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
    padding: 9px 15px;
    font-family: Segoe UI;
    margin: 25px;
    position: absolute;
    margin: 511px 0 33px 599px;
    box-shadow: 0px 1px 1px #00000080;
    text-decoration: none;
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
`;






export const OfficeTableDiv = styled.div`

width: 650px;
height: 325px;
margin: -42px 51px 19px 51px;
float: left;
overflow-y: scroll;
.css-1ex1afd-MuiTableCell-root{
    padding: 0;
}
.css-rorn0c-MuiTableContainer-root{
    overflow: unset;
}
.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root{
    color: #E0E0E0;
}
.css-11imhgs-MuiTable-root{
    min-width: 629px;
}
.css-1m9pwf3{
    margin: 13px;
}
.MuiTableCell-head{
    font: bold 14px Segoe UI; 
    width: auto;
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
td input{
    border: 0;
    width: inherit;
    padding-left: 0;
    padding-right: 0;
}   
td input:focus{
    border: 0;
    outline: none;

}   

.checkbox{
    width: 22px;
    height: 22px;
    border-radius: 5px;
}
.checkbox:checked {
    border-radius: 5px;

}
.checkboxs{
    width: 41px;
    height: 48px;
    text-align: center;
}
.table_date{
    width: 123px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
}
.table_amount{
    width: 104px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
}
.table_note{
    width: 392px;
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    border-left: 0;
    border-right: 0;
    padding-top: 11px;
    border-bottom: 0;
}

.th_total{
    height: 48px;
    text-align: center;
    display: revert;
    color: #000000;
    padding: 0;
}

.status_true{
    font: 14px Segoe UI;
    color: #21D25C;
}
.status_false{
    font: 14px Segoe UI;
    color: #C20000;
}
p{
    margin:0;
}
.table_white{
    background: white;
}
.table_white a{
    font-family: Segoe UI;
    color: black;
    text-decoration: none;
}
.bottom_task{
    width: 629px;
    background: none;
}
.rowsper{
    overflow: unset;
}

`;

export const Totaltask=styled.p`

        width: auto;
        height: 27px;
        float: left;
        font: normal normal bold 20px Segoe UI;
        margin: -80px 60px 0 60px;

        .totalamount{
            font-weight: 500;
            width: auto;
            margin-left: 6px;
            float: right;
        }
        .totalpar{
            float:right;
        }
`







export const Transfer = styled.button`

    width: 107px;
    height: 40px;
    background: #24619A;
    box-shadow: 0px 1px 1px #00000080;
    border-radius: 20px;
    font: normal normal normal 15px Segoe UI;
    color: #FFFFFF;
    margin: 25px 80% 0 2.85%;
    float: left;
`
export const CompanyAction = styled.button`

    width: 135px;
    height: 40px;
    background: #24619A;
    box-shadow: 0px 1px 1px #00000080;
    border-radius: 20px;
    font: normal normal normal 15px Segoe UI;
    color: #FFFFFF;
    margin: 25px 25px 0 2.85%;
    float: left;
`
export const HoldingAction = styled.button`

    width: 155px;
    height: 40px;
    background: #24619A;
    box-shadow: 0px 1px 1px #00000080;
    border-radius: 20px;
    font: normal normal normal 15px Segoe UI;
    color: #FFFFFF;
    margin: 25px 60% 0 0;
    float: left;
`










export const TransferTableDiv = styled.div`

width: 1100px;
height: auto;
margin: 41px 0 0 2.85%;
float: left;
overflow: unset;
.css-1ex1afd-MuiTableCell-root{
    padding: 0;
}
.css-rorn0c-MuiTableContainer-root{
    overflow: unset;
}
.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root{
    color: #E0E0E0;
}
.css-11imhgs-MuiTable-root{
    min-width: 1100px;
    width: 1100px;
}
.css-1m9pwf3{
    margin: 13px;
}
.MuiTableCell-head{
    font: bold 14px Segoe UI; 
    width: auto;
}
.css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon{
    display: none;
}
.css-pdct74-MuiTablePagination-selectLabel {
    display: none;
}
.css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar{
    width: auto;
}
.css-1mxz8qt-MuiPaper-root{
    background: unset;
    box-shadow: none;
    border-bottom: 1px solid #E0E0E0;
    border-left: 1px solid #E0E0E0;
    border-right: 1px solid #E0E0E0;
}
@media (min-width: 600px){
    .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar {
    padding-left: 0;
    padding-right: 24px;
    }
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

.table_id{
    width: 28px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    font-family: Segoe UI;

}
.table_leader{
    width: 127px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    font-family: Segoe UI;
    padding-right: 10px;
}
.table_leader_p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    width: 127px;
    height:48px;
    padding-left: 10px;
    font-family: Segoe UI;
    padding-right: 10px;
    padding-top: 11px;
}
.table_company{
    height: 48px;
    font-family: Sagoe UI;
    text-align: start;
    width: 302px;
  
}
.table_company p{
    width: 302px;
    padding-left: 10px;
    font-family: Segoe UI;
    padding-right: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    border-left: 0;
    border-right: 0;
  
}


.table_action_succes{
    width: 75px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    color: #21D25C;
    font-family: Segoe UI;

}
.table_action_fail{
    width: 75px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    color: #C20000;
    font-family: Segoe UI;

}
.table_office{
    width: 75px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    font-family: Segoe UI;

}

.table_customer{
    width: 137px;
    height: 48px;
    
}
.table_customer p{
    width: 137px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    border-left: 0;
    border-right: 0;
}

.table_const{
    width: 93px;
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    
}
.table_rest{
    width: 93px;
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
}
.table_task{
    width: 98px;
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
}
.table_history{
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    width: 111px
}
.table_comission{
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    width: 150px;
}

.th_total{
    height: 48px;
    text-align: center;
    display: revert;
    color: #000000;
    padding: 0 10px;
    font-family: Segoe UI;

}
.threedots{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    margin-right: -50px !important;
    width: 175px;
    text-decoration: none;
    color: black;
}
p{
    margin:0;
}
.table_white{
    background: white;
}
.table_white a{
    font-family: Segoe UI;
    color: black;
    text-decoration: none;
}
.rowsper{
    overflow: unset;
}


@media (max-width: 200px) {
    width: 900px;
    overflow-x: scroll;
}
@media (max-width: 1500px) {
    width: 700px;
    overflow-x: scroll;
}
@media (max-width: 1130px) {
    width: 400px;
    overflow-x: scroll;
}

`;
export const InstallmentsTableDiv = styled.div`

width: 1020px;
height: auto;
margin: 41px 0 0 2.85%;
float: left;
overflow: unset;
.css-1ex1afd-MuiTableCell-root{
    padding: 0;
}
.css-rorn0c-MuiTableContainer-root{
    overflow: unset;
}
.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root{
    color: #E0E0E0;
}
.css-11imhgs-MuiTable-root{
    min-width: 1020px;
    width: 1020px;
}
.css-1m9pwf3{
    margin: 13px;
}
.MuiTableCell-head{
    font: bold 14px Segoe UI; 
    width: auto;
}
.css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon{
    display: none;
}
.css-pdct74-MuiTablePagination-selectLabel {
    display: none;
}
.css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar{
    width: auto;
}
.css-1mxz8qt-MuiPaper-root{
    background: unset;
    box-shadow: none;
    border-bottom: 1px solid #E0E0E0;
    border-left: 1px solid #E0E0E0;
    border-right: 1px solid #E0E0E0;
}
@media (min-width: 600px){
    .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar {
    padding-left: 0;
    padding-right: 24px;
    }
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

.table_id{
    width: 105px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    font-family: Segoe UI;

}
.table_leader{
    width: 140px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    font-family: Segoe UI;
    padding-right: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: table-caption;
    border-left: 0;
    border-right: 0;
    padding-top: 11px;
   margin-bottom: -1px;
}

.table_company{
    height: 48px;
    width: 141px;
    font: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    
}

.table_office{
    width: 120px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    font-family: Segoe UI;

}

.table_const{
    width: 140px;
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    border-left: 0;
    border-right: 0;
    padding-top: 11px;
    margin-bottom: -1px;
}
.table_rest{
    width: 90px;
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
}
.table_task{
    width: 90px;
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
}
.table_history{
    height: 48px;
    width: 90px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
}
.table_comission{
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    width: 110px;
}

.th_total{
    height: 48px;
    text-align: center;
    display: revert;
    color: #000000;
    padding: 0 10px;
    font-family: Segoe UI;

}
.threedots{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    margin-right: -50px !important;
    width: 175px;
    text-decoration: none;
    color: black;
}
p{
    margin:0;
}
.table_white{
    background: white;
}
.table_white a{
    font-family: Segoe UI;
    color: black;
    text-decoration: none;
}
.rowsper{
    overflow: unset;
}


@media (max-width: 200px) {
    width: 900px;
    overflow-x: scroll;
}
@media (max-width: 1500px) {
    width: 700px;
    overflow-x: scroll;
}
@media (max-width: 1130px) {
    width: 400px;
    overflow-x: scroll;
}

`;
export const Totallist = styled.div`

        width: 500px;
        float: left;

        .totaldiv{
            width: fit-content;
            height: 25px;
            margin: 15px 0 15px 13px;
            float: left;
        }
        .totaltext{
            font:  14px Segoe UI;
            float: left;
        }
        .totalapi{
            font: 800 16px Segoe UI;
            color: #24619A;
            width: auto;
            float: left;
            border-radius: 5px;
            margin-left: 5px;
        }
        
`
export const TransferTotallist = styled.div`

        width: 800px;
        float: left;

        .totaldiv{
            width: fit-content;
            height: 25px;
            margin: 15px 0 15px 13px;
            float: left;
        }
        .totaltext{
            font:  14px Segoe UI;
            float: left;
        }
        .totalapi{
            font: 800 16px Segoe UI;
            color: #24619A;
            width: auto;
            float: left;
            border-radius: 5px;
            margin-left: 5px;
        }
        
`