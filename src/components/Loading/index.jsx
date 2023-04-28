import loading from "../../img/loading.gif"

import * as c  from "./styles"

const Loading = () => {
  return (
    <c.LoadingContainer>
      <c.ImgLoading src={loading}/>
    </c.LoadingContainer>
  )
}

export default Loading