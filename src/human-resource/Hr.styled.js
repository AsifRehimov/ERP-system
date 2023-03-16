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
.toggle_dropdown:hover{
   
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
    font-size: 16px;
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
        z-index: 2;
        position: absolute;
        box-shadow: 0px 4px 20px #0000001F;
        .open_dropdown_choose{
            width: 100%;
            height: 48px;
            padding: 12px 0 0 15px;
        }
        
        
    `
    export const BlueLine = styled.div`
    
        width: 100%;
        height: 40px;
        background: #073763;
        float: left;
        .tabs_nav{

            width: auto;
            height: 16px;
            margin: 8px 0 10px 2.85%;
            padding: 0;
            
        }
        .tabs_headers::after{
            content:none;
        }
        .tabs_headers:hover{
            background:none;
        }
        .tabs_headers{
            font-size: 15px;
            color: white;
            font-family: system-ui;
            margin-right: 2.09%;
            display: inline-block;
            letter-spacing: 1px;
            cursor: pointer;
            padding: 0;
            background: 0;
            float: left;
            content: none;
            border: none;
            text-decoration: none;
        }
        .open_drop_down{
            width: 250px;
            height: 170px;
            background: white;
            margin-top: 7px;
            position: absolute;
            box-shadow: 0px 4px 20px #0000001F;
            z-index: 1;
        }
        .open_dropdown_choose{
            width: 100%;
            height: 48px;
            font-size: 19px;
        }
        .open_dropdown_Link:hover{
            background-color: #c0c0c0;
        }
        .open_dropdown_Link{
            width: 100%;
            height: 50px;
            font-size: 15px;
            display: block;
            text-decoration: none;
            text-align: start;
            padding-left: 10px;
            color: black;
            padding-top: 13px;
        }

    `;
    

    export const WorkerDiv = styled.div`
    
        width: 100%;
        height: auto;
        .add_worker{
            padding: 9px 18px;
            background: #24619A;
            text-align: center;
            border-radius:20px;
            float: left;
            margin: 25px 200px 0 2.85%;
            font: 15px Segoe UI;
            color: white;
            box-shadow: 0px 1px 1px #00000080;
            text-decoration: none;

        }
        .search_div{
            width: 33%;
            height: 30px;
            margin: 55px 0 0 5.58%;
            border-bottom: 1px solid #707070;
            float: left;
        }
        .input{
            float: left;
            width: 80%;
            height: 30px;
            background: none;
            border: none;
            font-size: 15px;
            font-family: system-ui;            
        }
        .search_icon{
            float: right;
            font-size:20px;
            color: #707070;
        }
    `;

    export const CardBigDiv = styled.div`
    
    width: auto;
    height: auto;
    float: left;
    margin-top: 40px;
    justify-content: center;

    .card_div{
        width: 342px;
        height: 141px;
        background: white;
        display: block;
        float: left;
        margin-bottom: 27px;
        margin-left: 3.9%;
        box-shadow: 0px 3px 6px #00000029;

    }
    .card_img{
        width: 84px;
        height: 85px;
        margin: 28px 0 28px 22px;
        float: left;
        
    }
    .card_title{
        font-size: 20px;
        font-weight: 600;
        margin: 20px 0 0 20px;
        float: left;
    }
    .position{
        font-size: 13px;
        margin: 3px 0 0 20px;
        color: #686868;
        width: 130px;
        float: left;
    }
    .phone_number{
        font-size: 11px;
        color: #686868;
        float: left;
        margin: 3px 0 0 20px;
        width: 100px;
    }
    .pen_icon{
        float: right;
        font-size: 18px;
        color: #929292;
        margin: 13px 9px 0 0;
    }
    .trash_icon{
        float: right;
        font-size: 18px;
        color: #929292;
        margin: 13px 15px 0 0;

    }
    @media(max-width: 1550px){
        width: calc(100% - 185px);

    }
    ` 

