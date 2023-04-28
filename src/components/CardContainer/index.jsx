import Card from "../Card"

import * as c  from "./styles"

const CardContainer = ({pokemons}) => {
  return (
    //Aqui eu valido se esta sendo passado um array para eu executar o map()
    //Uma vez que eu reaproveito esse compinent para a pesquisa
    <c.Container>
      {(pokemons && Array.isArray(pokemons)) ? 
        pokemons?.map((pokemon) => (<Card key={pokemon.data.id} pokemon={pokemon}/>))
      : (pokemons) ? (<Card pokemon={pokemons}/>) : ""}
    </c.Container>
  )
}

export default CardContainer