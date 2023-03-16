import styled from 'styled-components';

export const FinancilalMainDiv = styled.div`

.small{
    width: 80.96%;
}

.big{
    width: 95%;
}
.posAbsolute{
    width: 274px;
    height: -webkit-fill-available;
    background: white;
    position: absolute;
    top: 110px;
    right: 0;
    box-shadow: 0px 3px 6px #00000029;
    transition: height 2s ease;
}
.posFixed{
    width: 274px;
    height: 100vh;
    background: white;
    position: fixed;
    right: 0;
    box-shadow: 0px 3px 6px #00000029;
    transition: 1s;
}
.posFixedsmall{
    width: 50px;
    height: 100vh;
    background: white;
    position: fixed;
    right: 0;
    box-shadow: 0px 3px 6px #00000029;
}
.posAbsolutesmall{
    width: 50px;
    height: -webkit-fill-available;
    background: white;
    position: absolute;
    top: 110px;
    right: 0;
    box-shadow: 0px 3px 6px #00000029;
}
@media(max-height: 900px){
    .posFixed{
        overflow-y: scroll;
    }
    .posAbsolute{
        overflow-y: scroll;
    }
}
`;
export const FinancilalDiv = styled.div`

    background: #FCFCFC;
    min-height: 100vh;
    float: right;
  .open_customer{
    width: 215px;
    height: 96px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px #0000001F;
    margin-top: 7px;
    margin-left: 1%;
  }  
  .customer_choose{
    width: 100%;
    height: 48px;
    text-align: start;
    font: 14px Segoe UI;
    color: #212121;
}

`

export const CalculatorSmallDiv = styled.div`

  
    .openfilter{
        margin: 15px auto;
        font-size: 20px;
        color: #073763;
        cursor: pointer;

    }
    `
export const CalculatorMainDiv = styled.div`

  
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
        margin: -90px 49% 0 0;
        float: right;
    }
    .search{
        font: 15px Segoe UI;
        padding: 8px 20px;
        border-radius: 20px;
        box-shadow: 0px 1px 1px #00000080;
        background: #073763;
        color: white;
        margin: -90px 13% 0 0;
        float: right;
    }
    .delete_newcustomer{
        font: 15px Segoe UI;
        padding: 8px 20px;
        border-radius: 20px;
        box-shadow: 0px 1px 1px #00000080;
        background: #EFBF3A;
        color: white;
        margin: -100px 13% 0 0;
        float: right;
    }
    .openfilter{
        margin: 15px 0 0 15px;
        font-size: 20px;
        color: #073763;
        cursor: pointer;
    }
    @media(max-width: 1300px){
        width: 180px;
    }
   
`


export const FilterFromHolding = styled.div`

    width: 100%;
    height: 400px;
    margin-top: 45px;
    .filters_section::placeholder{
        color: #C0C0C0;
    }
  
    .filters_section{
        height: 20px;
        width: 73%;
        padding: 0;
        border: 0;
        border-bottom: 1px solid #C0C0C0;
        background-color: white;
        font-size: 13px;
        color: #C0C0C0;
        font-family: Segoe UI;
        margin: 0 auto 33px auto;
        display: block;
    }
    .search_filters_section{
        margin: 0 auto 33px auto;
        display: block;
        height: 24px;
        width: 73%;
        padding: 0;
        border: 0; 

    }
    .cancel_icon{
        font-size: 15px;
        position: absolute;
        color: #707070;
        right: 0;
        margin: -50px 24% 0 0;
        cursor: pointer;

    }
    .search_input::placeholder{
        color:#c0c0c0;
    }
    .search_input{
        height: 20px;
        border: 0;
        color: black;
        width: 100%;
        font-family: Segoe UI;
        font-size: 13px;
        padding: 0;
        border-bottom: 1px solid #C0C0C0;
    }
    .search_icon{
        font-size: 18px;
        color: #C0C0C0;
        float: right;

    }
    @media(max-width: 1300px){
        .cancel_icon{
            margin-right: 28%
        }
        }
`;

export const FiltersDiv = styled.div`

    width: 100%;
    height: 600px;
    margin-top: 45px;
    .filters_section::placeholder{
        color: #C0C0C0;
    }
  
    .filters_section{
        height: 20px;
        width: 73%;
        padding: 0;
        border: 0;
        border-bottom: 1px solid #C0C0C0;
        background-color: white;
        font-size: 13px;
        color: #C0C0C0;
        font-family: Segoe UI;
        margin: 0 auto 33px auto;
        display: block;
    }
    .search_filters_section{
        margin: 0 auto 33px auto;
        display: block;
        height: 24px;
        width: 73%;
        padding: 0;
        border: 0; 

    }
    .cancel_icon{
        font-size: 15px;
        position: absolute;
        color: #707070;
        right: 0;
        margin: -50px 24% 0 0;
        cursor: pointer;

    }
    .search_input::placeholder{
        color:#c0c0c0;
    }
    .search_input{
        height: 20px;
        border: 0;
        color: #C0C0C0;
        width: 100%;
        font-family: Segoe UI;
        font-size: 13px;
        padding: 0;
        border-bottom: 1px solid #C0C0C0;
    }
    .search_icon{
        font-size: 18px;
        color: #C0C0C0;
        float: right;

    }
    @media(max-width: 1300px){
        .cancel_icon{
            margin-right: 28%
        }
        }
`;

export const TeamsTableDiv = styled.div`

width: 1330px;
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
    min-width: 1330px;
}
.css-1m9pwf3{
    margin: 13px;
}
.MuiTableCell-head{
    font: bold 14px Segoe UI; 
    width: auto;
}
.css-pdct74-MuiTablePagination-selectLabel {
    display: none;
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
.table_id{
    width: 60px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
}
.table_leader{
    width: 127px;
    height: 48px;
    text-align: start;

    /* text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    border-left: 0;
    border-right: 0;
    padding-top: 11px;
    border-bottom: 0;
    margin-top: -1px; */
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
    padding-left: 10px;
    font-family: Segoe UI;
    padding-right: 10px;
    width: 69px;
}

.table_office{
    width: 75px;
    height: 48px;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;

}

.table_const{
    width: 93px;
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
    border-bottom: 0;
    margin-top: -1px;
}
.table_rest{
    width: 70px;
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
}
.table_task{
    width: 52px;
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
    width: 80px
}
.table_comission{
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    width: 80px;
}
.table_bonus{
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    width: 74px
}
.table_advance{
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    width: 70px
}
.table_interruption{
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    width: 70px
}
.table_penalty{
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    width: 70px
}
.table_result{
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    width: 48px
}
.table_salarydate{
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    width: 130px
}
.table_status{
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    width: 100px
}
.texticon{
    font-size: 15px;
    float: right;
    margin-top: 3px;
}
.th_total{
    height: 48px;
    text-align: center;
    display: revert;
    color: #000000;
    padding: 0;
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
    width: 1330px;
    background: #F5F5F5;
    border: 1px solid #707070;
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
export const Totaltask=styled.div`

        width: 1070px;
        height: 56px;
        float: left;
        .taskquantity{
            font: bold 14px Segoe UI;
            color: #616161;
            margin: 18px 0 0 15px;
            float: left;
        }
        .complete{
            font: bold 14px Segoe UI;
            color: #33B715;
            margin: 18px 0 0 39px;
            float: left;
        }
        .execute{
            font: bold 14px Segoe UI;
            color: #248DDB;
            margin: 18px 0 0 26px;
            float: left;
        }
        .BElate{
            font: bold 14px Segoe UI;
            color: #FF4E28;
            margin: 18px 0 0 26px;
            float: left;
        }
        .execution{
            font-weight: 100;
        }
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
            margin-left: 5px;
            }
        
`
export const ButtonsDisableds = styled.div`

    width: 600px;
    height: 40px;
    margin-top: 31px;
    margin-left: 2.85%;
    .disabled{
        font: 15px Segoe UI;
        color: white;
        padding: 10px 24px;
        background: #98B0C7;
        box-shadow: 0px 1px 1px #00000080;
        border-radius: 20px;
        float: left;
        margin-right: 20px;
        text-decoration: none;
    }
    .notdisabled{
        font: 15px Segoe UI;
        text-decoration: none;
        color: white;
        padding: 10px 24px;
        background: #24619A;
        box-shadow: 0px 1px 1px #00000080;
        border-radius: 20px;
        float: left;
        margin-right: 20px;
    }
`
export const ButtonsDivDisabled = styled.div`

    width: 800px;
    height: 40px;
    margin-top: 31px;
    margin-left: 2.85%;
    float: left;
    margin-bottom: 40px;
    .truedisabled{
        font: 15px Segoe UI;
        color: white;
        padding: 10px 24px;
        background: #98B0C7;
        box-shadow: 0px 1px 1px #00000080;
        border-radius: 20px;
        float: left;
        margin-right: 22px;
        text-decoration: none;
        cursor: default;
    }
    .falsedisabled{
        font: 15px Segoe UI;
        text-decoration: none;
        color: white;
        padding: 10px 24px;
        background: #24619A;
        box-shadow: 0px 1px 1px #00000080;
        border-radius: 20px;
        float: left;
        margin-right: 22px;
        cursor: pointer;
    }
`

