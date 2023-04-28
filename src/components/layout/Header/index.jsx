import * as c  from "./styles"

import {BsMoonStarsFill, BsSunFill} from "react-icons/bs"
import logo from "../../../img/logo.png"

const Header = ({switchTheme, isLight}) => {
  return (
    <c.Header>
        <c.Nav>
            <c.LogoImg src={logo} alt="pokemon-logo"/>
            <c.NavSwitchTheme onClick={switchTheme}>
                {(isLight) ? 
                    <BsMoonStarsFill/>
                :
                    <BsSunFill/>
                }
            </c.NavSwitchTheme>
        </c.Nav>
    </c.Header>
  )
}

export default Header