import * as c  from "./styles"

const Card = ({pokemon}) => {
  return (
    <c.Container>
        <c.PokemonId>{`#${pokemon.data.id}`}</c.PokemonId>
        <c.CardImg src={pokemon.data.sprites.front_default}/>
        <c.PokemonTitle>{pokemon.data.name}</c.PokemonTitle>
    </c.Container>
  )
}

export default Card