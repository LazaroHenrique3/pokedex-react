import styled from "styled-components";

export const Header = styled.header`
    position: sticky;
    top: 0;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.bg_color_four};
    padding: 1em 5em;
    transition: 0.4s;
    height: 80px;
`

export const NavSwitchTheme = styled.span`
    cursor: pointer;

    svg{
        color: ${(props) => props.theme.font_color_one};
        font-size: 30px;
        transition: 0.4s;
    }

    svg:hover{
        font-size: 35px;
    }
`

export const LogoImg = styled.img`
  height: 60px;
`