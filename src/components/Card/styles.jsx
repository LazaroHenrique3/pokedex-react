import styled from "styled-components";

export const Container = styled.div`
     background-color: ${(props) => props.theme.bg_color_two};
     width: 250px;
     height: 300px;
     padding: 1em;
     display: flex;
     flex-direction: column;
     align-items: center;
`

export const CardImg = styled.img`
     width: 100%;
     height: auto;
`

export const PokemonId = styled.p`
     color: ${(props) => props.theme.font_color_one};
     font-weight: bold;
     font-size: 20px;
`
export const PokemonTitle = styled.p`
     color: ${(props) => props.theme.font_color_one};
     font-weight: bold;
     font-size: 20px;
     text-transform: capitalize;
`