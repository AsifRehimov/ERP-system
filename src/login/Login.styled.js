import styled from 'styled-components';


export const HomePageDiv = styled.div`

    background-image: url('https://images.wallpaperscraft.com/image/single/mountains_clouds_dusk_154131_1920x1080.jpg');
    width: 100%;
    min-height: 100vh;
    float: right;
    position: absolute;
    .form{
        width:500px;
        height: 400px;
        background-color: white;
        margin: 200px auto 0 auto;
        border-radius: 24px;
    }
    .title{
        margin: 0 auto 45px auto;
        font: 30px Segoe UI;
        padding-top: 30px;
        display: block;
        text-align: center;
    }
    .input_title{
        margin: 9px auto 0 auto;
        font: 500 20px Segoe UI;
        display: block;
        text-align: center;
    }
    .input{
        margin: 20px auto 0 auto;
        font: 20px Segoe UI;
        display: block;
        text-align: center;
        border-radius: 10px;
        background-color: #c0c0c0;
    }
    .input:focus{
        outline: none;
        border: 0;
    }
    .submit{
        margin: 0 auto 0 auto;
        font: 600 25px Segoe UI;
        display: block;
        padding: 3px 45px ;
        background-color:  #24619A;
        color:white;
        border-radius: 15px;
        width: fit-content;
        cursor: pointer;
    }
    .alertNow{
        width: 500px;
        background-color: #880808	;
        color: white;
        font:  600  25px Segoe UI;
        text-align: center;
        padding: 20px 0;
        margin: 20px auto 0 100px;
        border-radius: 20px;
        position: absolute;

        animation: marquee 2s ease ;

    }
    @keyframes marquee {
    0% { left: 1000px; }
    40% { left: 0; }

    100% { left: 100px; }
    }
`;


