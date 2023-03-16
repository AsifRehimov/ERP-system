import styled from 'styled-components';


export const AddWorkerDiv  = styled.div`

    // background: #FCFCFC;
    width: 100%;
    // height: 700px;
    float: left;
    .name_sur{
        width: 29.23%;
        height: 38px;
        border: none;
        border-bottom: 1px solid #C0C0C0;
        font:bold 25px Segoe UI;
        letter-spacing: 0px;
        color: black;
        margin: 15px 0 0 3.88%;
        background: #FCFCFC;
    }
    .formdiv{
        height: auto;
        width: auto;
        margin: 30px  0 0 3.52%;
        display: flex;
    }
`
export const UploadPhoto =styled.div`

    width: 250px;
    height: 250px;
    float: right;
    margin: 39px 2.35% 0 0;
    border: 1px solid #C0C0C0;
    background: white;
    label{
        display: block;
    }
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
        margin: -45px 0 0 190px;
        cursor: pointer;
    }
    .trash_icon{
        color: #073763;
        font-size: 30px;
        margin: -35px 0 0 217px;
        cursor: pointer;

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
    height: auto;
    margin-right: 100px;
    background: none;
    .items{
        width: 100%;
        height: 24px;
        margin-top: 21px;
    }
    .items_title{
        font-size: 18px;
        font-family: Segoe UI;
        font-weight: bold;
        float: left;
        background: none;
    }
    .items_text{
        width: 54.4%;
        height: 24px;
        font-family: Segoe UI;
        float: right;
        background: none;
        border: none;
        border-bottom: 1px solid #C0C0C0;
        color: black;
        padding: 0 5px;
    }
`
export  const Formtwo = styled.div`

    width: 500px;
    height: 135px;
    background: none;
    .items{
        width: 100%;
        height: 24px;
        margin-top: 21px;
    }
    .items_title{
        font-size: 18px;
        font-family: Segoe UI;
        font-weight: bold;
        float: left;
        background: none;
    }
    .items_text{
        width: 54.4%;
        height: 24px;
        font: 15px Segoe UI;
        float: right;
        background-color: #FCFCFC;
        border: none;
        border-bottom: 1px solid #C0C0C0;
        color: black;
        padding: 0 5px;

    }
    .active{
        color: #07BE07;
    }
    .active:hover{
        color: #07BE07;
    }
    .passiv{
        color: red;
    }
    .passiv:hover{
        color: red;
    }
`
export const SecondFormDiv = styled.div`

    height: auto;
    margin: 30px  0 0 3.52%;
    display: flex;
    background: none;
    .second_one{       
        width: 500px;
        height: auto;
        background: none;
        float: left;
        margin-right: 100px;
    }
    .second_two{       
        width: 500px;
        height: 404px;
        background: none;
        float: right;
        margin-top: -105px;
    }
    .items{
        width: 100%;
        height: 24px;
        margin-top: 21px;
    }
    .items_title{
        font-size: 18px;
        font-family: Segoe UI;
        font-weight: bold;
        float: left;
        background: none;
    }
    .items_text{
        width: 54.4%;
        height: 24px;
        font-family: Segoe UI;
        float: right;
        background-color: #FCFCFC;
        border: none;
        border-bottom: 1px solid #C0C0C0;
        padding: 0 5px;
        color: black;
    }
    .items_text_big{
        width: 100%;
        height: 251px;
        font-family: Segoe UI;
        float: right;
        border: 2px solid #C0C0C0;
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
    }
    .contract{
        float :right;
        font: bold 15px Segoe UI;
    }
` 

export const Bottombtn = styled.button`

    font: 15px Segoe UI ;
    padding: 11px 15px;
    color: white;
    background: #24619A;
    box-shadow: 0px 1px 1px #00000080;
    border-radius: 20px;
    float: right;
    margin: 0 30px 40px 0 ;
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
        border-bottom: 1px solid #C0C0C0;

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
        // border-bottom: 1px solid #C0C0C0;
        color: #C0C0C0;
        width: 100%;
        font-family: Segoe UI;
        font-size: 14px;
        padding: 0;
        
    }
    .search::placeholder{
        color:#C0C0C0
    }
    .search_icon{
        font-size: 18px;
        color: #C0C0C0;
        float: right;
        position: absolute;
        right: 37px;
        top: 120px;
    }
    @media(max-width: 1550px){
        .cancel_icon{
        margin-right: 28%;
        }
        .search_icon{
            right: 25px;
            top: 120px;
        }
    }
`

export const Holdingcheck = styled.div`

    height: 20px;
    width: 73%;
    padding: 0;
    border: 0;
    background-color: white;
    font-size: 13px;
    color: #C0C0C0;
    font-family: Segoe UI;
    margin: 0 auto 13px auto;
    display: block;
    .checkbox{
        float: left;
        border-color: #C0C0C0;  

    }
    .holding{
        float: right;
        font: 600 15px Segoe UI;
        color: black;
    }
    [type="checkbox"] {
    color: #C0C0C0;  
     --tw-shadow: none;


    }
    
`