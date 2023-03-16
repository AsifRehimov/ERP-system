import styled from 'styled-components';


export const CompanySettingsDiv  = styled.div`

    background: #FCFCFC;
    width: 100%;
    min-height: auto;
    float: left;
`
export const Itemgive = styled.a`

   font:  15px Segoe UI;
   color: #FFFFFF;
   padding: 9px 15px;
   border-radius: 20px;
   margin: 41px 0 20px 2.85%;
   text-decoration: none; 
   background: #24619A;
   display: inline-block;
`

export const CompanyTableDiv = styled.div`

    width: 500px;
    height: auto;
    margin: 0 0 0 2.85%;
    overflow: unset;
    .css-1ex1afd-MuiTableCell-root{
        padding: 0;
    }
    .css-11imhgs-MuiTable-root{
        min-width: 500px;
        width: 500px;
    }
    .css-1mxz8qt-MuiPaper-root{
        box-shadow: none;
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
        min-width: 175px;
        max-width: 175px;
        width: 175px;
        display: revert;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .table_leader{
        min-width: 90px;
        max-width: 90px;
        width: 90px;
        display: revert;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
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
        width: 70px;
    }
  
    .table_office{
        width: 104px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;
    }
   
    .th_total{
        height: 48px;
        text-align: center;
        display: revert;
        color: #000000;
        padding: 0;
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
    .pen_icon{
       float: left;
       font-size: 24px;
       color: #073763;
    }
  
    .x_icon{
       float: right;
       font-size: 28px;
       color: red;
    }
  
    
    @media (max-width: 1560px) {
        width: 500px;
        overflow-x: scroll;
        .table-fixed{
            width:400px;
            overflow-x: scroll;
        }
       
    }
   
`;

