import styled from 'styled-components';


export const PersonSettingsDiv  = styled.div`

    background: #FCFCFC;
    width: 100%;
    min-height: auto;
    float: left;
    .name_sur{
        width: 29.23%;
        height: 38px
        border: none;
        border-bottom: 1px solid #C0C0C0;
        font: 25px Segoe UI;
        letter-spacing: 0px;
        color: #C0C0C0;
        margin: 71px 0 0 3.88%;
        background: #FCFCFC;
    }
    .title_div{
        width: 100%;
        height: 41px;
        border-bottom: 1px solid black;
        padding: 2.5px 0;
        margin-bottom:18px;

    }
    .title{
        font: bold 21px Segoe UI;
        width: auto;
        margin-top: 4px;
    }
    }   
    .icon_title{
        color: black;
        float: left;
        margin-right: 21px;
        font-size: 36px;
    }
    .items{
        width: 100%;
        height: 24px;
        margin-top: 21px;
    }
    .items_title{
        font: 500 18px Segoe UI ;
        float: left;
        background: none;
    }
    .items_input_left{
        width: 272px;
        height: 24px;
        font-family: Segoe UI;
        float: right;
        background-color: #FCFCFC;
        border: none;
        border-bottom: 1px solid #C0C0C0;
        color: black;
        padding: 0;
    }
    .items_input_right{
        width: 230px;
        height: 24px;
        font-family: Segoe UI;
        float: right;
        background-color: #FCFCFC;
        border: none;
        border-bottom: 1px solid #C0C0C0;
        color: black;
        padding: 0;
    }
    #passport_input{
        display: none;
    }
    .download{
        font-size: 12px;
        font-family: Segoe UI;
        float: right;
        padding: 3px 43px;
        color: white;
        background: #24619A;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 4px;
        text-decoration: none;
    }
`
export const UploadPhoto =styled.div`

    width: 250px;
    height: 250px;
    float: right;
    margin: 39px 2.35% 0 0;
    border: 1px solid #C0C0C0;
    background: white;
    .camera_icon{
        font-size: 100px;
        margin: 70px 74px 0  74px;
        color: #C0C0C0;
    }
    .add_icon{
        color: #C0C0C0;
        font-size: 30px;
        margin: 30px 74px 0 200px;
    }
    .edit_icon{
        color: #073763;
        font-size: 30px;
        margin: -50px 0 0 190px;
    }
    .trash_icon{
        color: #073763;
        font-size: 30px;
        margin: -35px 0 0 217px;
    }
    .edit_image{
        height: -webkit-fill-available;
    }
    #file_input{
        display: none;
    }

`
export  const Formone = styled.div`

    width: 500px;
    height: 261px;
    margin: 45px  2.85% 0 2.85%;
    background: none;
    display: inline-block;
`
export const BtnDiv =styled.div`

    width: 215px;
    height: 43px;
    position: absolute;
    right: 40px;
    bottom: 40px;
    @media(max-width: 1790px){
        height: 80px;
        position: unset;
        margin: 40px;
    }

`

export const BottomGreen = styled.a`

    font: 15px Segoe UI ;
    padding: 11px 15px;
    color: white;
    background: #21D25C;
    box-shadow: 0px 1px 1px #00000080;
    border-radius: 20px;
    float: right;
    margin: 0 0 0 30px ;
    text-decoration: none;
`
export const BottomReject = styled.a`

    font: 15px Segoe UI ;
    padding: 11px 15px;
    color: white;
    background: #98B0C7;
    box-shadow: 0px 1px 1px #00000080;
    border-radius: 20px;
    text-decoration: none;
    display: inline-block;
`

