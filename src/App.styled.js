import styled from 'styled-components';


export const EmptyMaindiv = styled.nav`

background: #FCFCFC;
.main_div{
    width: 100%;
}
`
export const Nav = styled.nav`

    float: left;
    width: 19.04%;
    height: 100vh;
    background: #073763;
    position: fixed;
    
    .active {
        width: 100%;
        height: 60px;
        border-radius: 10px;
        display: block;
        floa: left;
        background: white;
        padding: 20px 0 20px 0;
        color: #073763;
        text-decoration: none;

    }
    .deactive{
        width: 100%;
        height: 60px;
        display: block;
        floa: left;
        padding: 20px 0 20px 0;
        color: white;
        text-decoration: none;

    }
    .icon{
        font-size: 25px;
        margin-left: 7.75%;
        margin-right: 6.25%;
        float: left;
    }
    .hamburger_menu{
            float: right;
            margin: 20px 5.5% 0 0;
            font-size: 30px;
            color: white;
    }
`;
export const NavSmall = styled.nav`

    float: left;
    width: 5%;
    height: 100vh;
    background: #073763;
    position: fixed;
    .actives{
        width: 100%;
        height: auto;
        border-radius: 10px;
        display: block;
        background: white;
        color: #073763;
        text-align: center; 
        padding: 20px 0;
    }
    .deactives{
        width: 100%;
        height: auto;
        display: block;
        padding: 20px 0;
        color: white;
        text-align: center; 
        padding: 20px 0;

    }
    .icon_small{
        font-size: 25px;
        margin: auto;
        text-align: center;
    }
    .hamburger_menu_small{
                font-size: 30px;
            color: white;
            display: block;
            margin:20px auto 50px auto ;
    }
`;


export const Logo = styled.img`

    float:left;
    margin: 25px 0 31px 0.76%;
    width: 49.25%;
`;
export const NavlinkDiv = styled.div`

    width: 100%;
    height: 481px;
    float: left;
    display: block;
`