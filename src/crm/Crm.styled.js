import styled from 'styled-components';

export const CRMMainDiv = styled.div`

.small{
    width: 80.96%;
}

.big{
    width: 95%;
}
`;

export const CRMDiv = styled.div`

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

export const OpenCustomer = styled.div`

    width: 215px;
    height: 96px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px #0000001F;
    position: absolute;
    top: 110px;
    margin-left: 1%;
    .customer_choose{
        width: 100%;
        height: 48px;
        text-align: start;
        font: 14px Segoe UI;
        color: #212121;
        padding: 18px 0 0 11px;
    }
`

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
    height: 320px;
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
        // border-bottom: 1px solid #C0C0C0;

    }
    .cancel_icon{
        font-size: 10px;
        position: absolute;
        color: #707070;
        right: 0;
        margin: -48px 24% 0 0;

    }
    .search{
        height: 20px;
        border: 0;
        border-bottom: 1px solid #C0C0C0;
        color: #C0C0C0;
        width: 100%;
        font-family: Segoe UI;
        font-size: 13px;
        padding: 0;
        
    }
    .search::placeholder{
        color: #C0C0C0;
    }
    .search_icon{
        font-size: 18px;
        color: #C0C0C0;
        float: right;
        position: absolute;
        right: 37px;
        top: 120px;
    }
    @media(max-width: 1300px){
        .cancel_icon{
            margin-right: 28%
        }
        .search_icon{
            right: 25px;
        }
         
    }
`;

export const TeamsTableDiv = styled.div`

    width: 1217px;
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
        width: 33px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_leader{
        width: 134px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;
        // white-space: nowrap; 
        // overflow: hidden;
        // text-overflow: ellipsis; 
    }
    .table_company{
        width: 149px;
        height: 48px;
        font-family: Sagoe UI;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;

    }
  
    .table_office{
        width: 88px;
        height: 48px;
        text-align: start;
        padding-left: 10px;
        font-family: Segoe UI;
        padding-right: 10px;

    }
    
    .table_const{
        width: 128px;
        height: 48px;
        font-family: Segoe UI;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_rest{
        width: 144px;
        height: 48px;
        font-family: Segoe UI;
        text-align: start;
        padding-left: 10px;
        padding-right: 10px;

    }
    .table_vacation{
        width: 92px;
        height: 48px;
        font-family: Segoe UI;
        text-align: -webkit-center;
        

    }
    .table_icon_succes{
        font-size: 20px;
        color: #21D25C;
    }
    .table_icon_loading{
        font-size: 20px;
        color: #EFBF3A;
    }
    .table_icon_lose{
        font-size: 20px;
        color: #C20000;
    }
    .th_total{
        height: 48px;
        text-align: center;
        padding: 0;
    }
    .table_gray{
        background: #C0C0C0;
    }
    .table_white{
        background: white;
    }
    .table_white a{
        font-family: Segoe UI;
        color: black;
        text-decoration: none;
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