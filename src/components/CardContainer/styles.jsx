import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    background-color: ${(props) => props.theme.bg_color_three};
    margin-top: 4em;
    padding-top: 5em;
    padding-bottom: 5em;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: space-around;
    margin-bottom: 2em;
`