import styled from "styled-components";

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






export const AdvanceTableDiv = styled.div`

width: 650px;
height: 250px;
margin: 36px 51px 0 51px;
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
    width: 236px;
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
.table_status{
    height: 48px;
    font-family: Segoe UI;
    text-align: start;
    padding-left: 10px;
    padding-right: 10px;
    width: 122px
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

        width: 250px;
        height: 27px;
        float: left;
        font: normal normal bold 20px Segoe UI;
        margin: -80px 0 0 60px;
        display: -webkit-inline-box;

        .totalamount{
            font-weight: 500;
            width: auto;
            margin-left: 6px;
        }
`