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

    width: 565px;
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
        width: 33px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_leader{
        width: 88px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
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
        width: 107px;
        height: 48px;
        font-family: Segoe UI;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_rest{
        width: 75px;
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

export const ButtonsDisableds = styled.div`

    width: 600px;
    height: 40px;
    float: left;
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

export const TopFiltersDiv = styled.div`


    height: 40px;
    width: 90%;
    margin: 23px 0 0 2.85%;
    float: left;

    .searchbar{
        width:263px;
        height: 26px;
        border-bottom: 1px solid #707070;
        margin-top: 6px;
        float: left;
    }
    .search_input{
        font: 13px Segoe UI;
        color: #C0C0C0;
        width: 220px;
        border: 0;
        padding:0;
        background: #F8F8F8;
    }
    .searchbar_icon{
        font-size: 20px;
        color:#C0C0C0 ;
        float: right;
    }
    .company_filter{
        width: 145px;
        height: 32px;
        margin-left: 35px;
        border: 0;
        border-bottom: 1px solid #707070;
        color: #C0C0C0;
        font: 13px Segoe UI;
        float: left;
        background: none;
        text-align: start;
        border-radius: 0;
        padding: 0;
    }
    .company_filter: hover{
        background: none;
        border:none;
    }
    .dropdown-toggle::after{
        float: right;
        color: #707070;
        font-size: 16px;
        margin-top: 12px;
    }
    .company_cancel{
        font-size: 13px;
        position: absolute;
        margin: 12px 0 0 415px;
    }
    .company_cancel_two{
        font-size: 13px;
        position: absolute;
        margin: 12px 0 0 628px;
    }
    .company_cancel_three{
        font-size: 13px;
        position: absolute;
        margin: 12px 0 0 608px;
    }
    @media(max-width: 871px){
        .company_cancel_three{
            margin: 45px 0 0 342px;
        }
    }
    @media(max-width: 898px){
        .company_cancel_two{
            margin: 45px 0 0 362px;
        }
    }
`
export const ProductAdd = styled.div`

    float: left;
    padding: 8px 15px;
    text-decoration: none;
    background: #24619A;
    color: white;
    border-radius: 24px;
    font-size: 15px;
    margin-right: 78px;

`