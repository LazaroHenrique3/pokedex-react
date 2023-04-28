import * as c from "./styles"
const MainContainer = (props) => {
  return (
    <c.Container>
       {props.children}
    </c.Container>
  )
}

export default MainContainer