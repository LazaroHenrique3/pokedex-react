import { useState, useEffect } from "react";

import axios from "axios";

import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "./styles/theme";
import GlobalStyle from "./styles/global"

import Header from "./components/layout/Header";
import SearchInput from "./components/SearchInput";
import MainContainer from "./components/layout/MainContainer";
import CardContainer from "./components/CardContainer";
import Loading from "./components/Loading";

function App() {

  const [theme, setTheme] = useState(themeLight)
  const [isLight, setIsLight] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])

  async function getPokemons() {
    setIsLoading(true)

    //Gerando dinamicamente os endpoints
    var endpoints = []
    for (let i = 1; i <= 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    const response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
                    .then((res) => { setPokemons(res) })
                    .catch((e) => console.log(e))
                    .finally(() => {setIsLoading(false)})

  }


  function switchTheme() {
    const newTheme = (theme === themeLight) ? themeDark : themeLight
    setIsLight(!isLight)
    setTheme(newTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header switchTheme={switchTheme} isLight={isLight} />
      <MainContainer>
        <SearchInput />
        {(isLoading) ?
          (<Loading />)
          :
          (<CardContainer pokemons={pokemons} />
          )}
      </MainContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
