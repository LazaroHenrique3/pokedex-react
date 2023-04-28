import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 5em;
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 1em;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color:  ${(props) => props.theme.bg_color_two};
    color: ${(props) => props.theme.font_color_one};
`

export const SearchButton = styled.button`
    min-width: 100px;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    cursor: pointer;
    border-radius: 10px;
    color: ${(props) => props.theme.btn_color_one};
    font-weight: bold;
    font-size: 14px;
    border: solid 2px ${(props) => props.theme.btn_color_one};
    background-color: transparent;
    transition: 0.4s;

    &:hover{
        color: white;
        background-color: ${(props) => props.theme.btn_color_one_hover};
    }

    svg{
        margin-left: 10px;
        font-size: 20px;
    }

`