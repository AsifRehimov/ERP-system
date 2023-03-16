import styled from 'styled-components';


export const WarehouseMainDiv = styled.div`

.small{
    width: 80.96%;
}

.big{
    width: 95%;
}
`;
export const WarehouseDiv = styled.div`

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

`;


export const TeamsTableDiv = styled.div`

    width: 1195px;
    height: 588px;
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
        width: 162px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;
    }
    .table_leader{
        width: 193px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;
        
    }
    .table_company a{
        text-decoration:none;
    }
    .table_company{
        height: 48px;
        font-family: Sagoe UI;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;
        width:158px;
    }
  
    .table_office{
        width: 143px;
        height: 48px;
        text-align: start;
    }
    
    .table_const{
        width: 127px;
        height: 48px;
        font-family: Segoe UI;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_rest{
        width: 114px;
        height: 48px;
        font-family: Segoe UI;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;
    }
    .table_task{
        width: 133px;
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
        width: 71px
    }
  
    .texticon{
        font-size: 28px;
        text-align: center;
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
    
    .table_white{
        background: white;
    }
    .table_white a{
        font-family: Segoe UI;
        color: black;
        text-decoration: none;
    }
    .bottom_task{
        width: 1195px;
        background: #F5F5F5;
        border: 1px solid #707070;
    }
    .rowsper{
        overflow: unset;
    }
    
    @media (max-width: 1560px) {
        width: 700px;
        overflow-x: scroll;
        .table-fixed{
            width:400px;
            overflow-x: scroll;
        }
       
    }
   
`;
export const TeamsTableDivTwo = styled.div`

    width: 1050px;
    height: 588px;
    margin: 41px 0 0 2.85%;
    float: left;
    overflow: unset;
    .css-1ex1afd-MuiTableCell-root{
        padding: 0;
    }
    .css-11imhgs-MuiTable-root{
        min-width: 1050px;
    }
    .css-rorn0c-MuiTableContainer-root{
        overflow: unset;
    }
    .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root{
        color: #E0E0E0;

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
    .table_leader{
        width: 193px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;
    }
    .table_company a{
        text-decoration:none;
    }
    .table_company{
        height: 48px;
        font-family: Sagoe UI;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;
        width:158px;
    }
  
    .table_office{
        width: 143px;
        height: 48px;
        text-align: start;
        
     
    }
    
    .table_const{
        width: 127px;
        height: 48px;
        font-family: Segoe UI;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_rest{
        width: 114px;
        height: 48px;
        font-family: Segoe UI;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;
    }
    .table_task{
        width: 133px;
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
        width: 71px
    }
    .texticon{
        font-size: 28px;
        text-align: center;
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
    
    .table_white{
        background: white;
    }
    .table_white a{
        font-family: Segoe UI;
        color: black;
        text-decoration: none;
    }
    .bottom_task{
        width: 1050px;
        background: #F5F5F5;
        border: 1px solid #707070;
    }
    .rowsper{
        overflow: unset;
    }
    
    @media (max-width: 1560px) {
        width: 700px;
        overflow-x: scroll;
        .table-fixed{
            width:400px;
            overflow-x: scroll;
        }

    }
   
`;
export const TeamsTableDivthree = styled.div`

    width: 951px;
    height: 588px;
    margin: 41px 0 0 2.85%;
    float: left;
    overflow: unset;
    .css-1ex1afd-MuiTableCell-root{
        padding: 0;
    }
    .css-11imhgs-MuiTable-root{
        min-width: 951px;
    }
    .css-rorn0c-MuiTableContainer-root{
        overflow: unset;
    }
    .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root{
        color: #E0E0E0;

    }
    .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar{
        padding-left:0;
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
        width: 162px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;
    }
    .table_leader{
        width: 193px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;
    }
    .table_company a{
        text-decoration:none;
    }
    .table_company{
        height: 48px;
        font-family: Sagoe UI;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;
        width:158px;
    }
  
    .table_office{
        width: 143px;
        height: 48px;
        text-align: start;
        
     
    }
    
    .table_const{
        width: 127px;
        height: 48px;
        font-family: Segoe UI;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_rest{
        width: 114px;
        height: 48px;
        font-family: Segoe UI;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;
    }
    .table_task{
        width: 133px;
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
        width: 71px
    }
    .texticon{
        font-size: 28px;
        text-align: center;
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
    
    .table_white{
        background: white;
    }
    .table_white a{
        font-family: Segoe UI;
        color: black;
        text-decoration: none;
    }
    .bottom_task{
        width: 951px;
        background: #F5F5F5;
        border: 1px solid #707070;
    }
    .rowsper{
        overflow: unset;
    }
    
    @media (max-width: 1560px) {
        width: 700px;
        overflow-x: scroll;
        .table-fixed{
            width:400px;
            overflow-x: scroll;
        }
       
    }
   
`;



export const TopFiltersDiv = styled.div`


    height: 40px;
    width: 90%;
    margin: 23px 0 0 2.85%;
    float: left;
`


export const TaskAdd = styled.div`

    float: left;
    padding: 8px 15px;
    text-decoration: none;
    background: #24619A;
    color: white;
    border-radius: 24px;
    font-size: 15px;
    margin-right: 78px;
    cursor: pointer;

`
export const Loading = styled.div`

    width: 105px;
    height: 28px;
    border-radius: 14px;
    background: #F0F9FF;
    margin: 10px auto;
    .loader{
        width: 24px;
        height: 24px;
        background-color: none;
        margin: 2px 3px 0 12px;
        float: left;
    }
    .proccess{
        font: 14px Segoe UI;
        color: #248DDB;
        margin-top: 4.5px;
        float: left;
    }
`
export const Late = styled.div`

    width: 90px;
    height: 28px;
    border-radius: 14px;
    background: #FEEAE6;
    margin: 10px auto;
    .later{
        width: 24px;
        height: 24px;
        background-color: none;
        margin: 2px 3px 0 12px;
        float: left;
    }
    .belate{
        font: 14px Segoe UI;
        color: #FF4E28;
        margin-top: 4.5px;
        float: left;
    }
`
export const Success = styled.div`

    width:120px;
    height: 28px;
    border-radius: 14px;
    background: #EFFEF1;
    margin: 9px auto;
    padding: 0;
    .check{
        width: 24px;
        height: 24px;
        margin: 2px 3px 0 12px;
        float: left;
        color: #33B715;
    }
    .success{
        font: 14px Segoe UI;
        color: #33B715;
        margin-top: 4.5px;
        float: left;
    }
`

export const CalculatorMainDiv = styled.div`

    width: 274px;
    min-height: -webkit-fill-available;
    height: 100vh;
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
    @media(max-width: 1300px){
        width: 180px;
    }
`


export const FiltersDiv = styled.div`

    width: 100%;
    height: 271px;
    margin-top: 45px;
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
        border-bottom: 1px solid #C0C0C0;

    }
    .cancel_icon{
        font-size: 10px;
        position: absolute;
        color: #707070;
        right: 0;
        margin: -48px 24% 0 0;

    }
    .search::placeholder{
        color:#c0c0c0;
    }
    .search{
        height: 20px;
        border: 0;
        // border-bottom: 1px solid #C0C0C0;
        color: #C0C0C0;
        width: 73%;
        font-family: Segoe UI;
        font-size: 14px;
        padding: 0;
        
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

export const Totaltask=styled.div`

        width: 600px;
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
`