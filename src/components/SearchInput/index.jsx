import { useState } from "react"

import * as c from "./styles"
import {BsSearch} from "react-icons/bs"

import axios from "axios"
import Loading from "../Loading"
import SearchResult from "../SearchResult"

const SearchInput = () => {
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [pokemon, setPokemon] = useState([])

  function getPokemon(idOrName){
    if(!idOrName){
      alert("Informe o nome ou ID no Pokemon que deseja pesquisar!")
      return
    }

    setIsLoading(true)

    const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${idOrName.toLowerCase()}/`)
                    .then((res) => {
                      setPokemon(res)
                      setIsSearch(true)
                    })
                    .catch((e) => console.log(e))
    
    setIsLoading(false)
  }

  return (
    <>
      <c.SearchContainer>
          <c.SearchInput value={search} type="text" placeholder="Procurar por nome ou ID" onChange={(e) => setSearch(e.target.value)}/>
          <c.SearchButton onClick={() => getPokemon(search)}>
              Procurar
              <BsSearch/>
          </c.SearchButton>
      </c.SearchContainer>

      {(isLoading) ?
        (<Loading/>)
      : (isSearch) ? 
        (<SearchResult pokemon={pokemon}/>)
      : ""}
    </>
  )
}

export default SearchInput