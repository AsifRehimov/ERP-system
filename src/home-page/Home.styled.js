import styled from 'styled-components';


export const HomePageMainDiv = styled.div`

.small{
    width: 80.96%;
}

.big{
    width: 95%;
}
`;

export const HomePageDiv = styled.div`

    background: #FCFCFC;
    min-height: 100vh;
    float: right;
    
`;
export const TopDiv = styled.div`

    width:100%;
    height: 70px;
    float: left;
    
    .right-left-div{
        width: 103px;
        float: left;
        height: 28px;
        margin: 21px 0 21px 2.85%;
    }
    .right-button{
        font-size:36px;
        color: #073763;
        float: right;
    }
    .left-button{
        font-size:36px;
        color: #073763;
        float: left;   
    }
    .page_name{
        color: #073763;
        font-size: 20px;
        text-align: center;
        width: auto;
        height: 20px;
        margin: 25px 0 25px 0;
    }
`;

export const TopDivRightdiv = styled.div`

    width:289px;
    height: 50px;
    float: right;
    margin: 10px 17px 10px 0;
    .time_icon{
        font-size: 32px;
        color: #073763;
        margin: 9px 12px 9px 0;
        float: left;    
        cursor: pointer;

    }
    .notification_icon{
        font-size: 32px;
        color: #073763;
        margin: 9px 20px 9px 0;
        float: left; 
            
    }
    .card_photo{
        width: 50px;
        height: 50px;
        margin: 0 20px 0 0;
        float: left;    
        border-radius: 50%;

    }
    .toggle_dropdown{
        color: black;
        font-size: 20px;
        width: 123px;
        height: 26px;
        float: left;
        margin: 8px 0;
        cursor: pointer;
        padding: 0;
        background: none;
        border:none;
    }
    .toggle_dropdown: hover{
       
        background: none;
        border:none;
    }
    .dropdown_icon{
        float: right;
        font-size: 10px;
        margin-top: 10px; 
    }
    .open_drop_down{
        width: 250px;
        height: 145px;
        background: white;
        margin-top: 22px;
        position: absolute;
        box-shadow: 0px 4px 20px #0000001F;
        z-index: 2;
    }
    .open_dropdown_choose{
        width: 100%;
        height: 48px;
        font-size: 19px;
    }
    `;

    export const DropdownClick = styled.p`
    
        color: black;
        font-size: 20px;
        width: 123px;
        height: 26px;
        float: left;
        margin: 8px 0;
        cursor: pointer;
        .dropdown_icon{
            float: right;
            font-size: 10px;
            margin-top: 10px; 
        }

    `;

    export const OpenDropdown = styled.div`
    
        width: 250px;
        height: 145px;
        background: white;
        margin: 60px;
        position: absolute;
        box-shadow: 0px 4px 20px #0000001F;
        z-index: 2;
       
       
        
    `
    export const BlueLine = styled.div`
    
        width: 100%;
        height: 40px;
        background: #073763;
        float: left;

    `

    export const PageAbout = styled.div`
    
        
        margin: 50px;
        font: 25px tahoma;
        margin-top: 150px;
        color: #073763;
    `