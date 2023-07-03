import { GlobalStyle } from "./styles/globalStyle"
import { ResetCSS } from "./styles/reset"
import { RouterMain } from "./Router/RouterMain"

function App() {

  return (
    <>
    <ResetCSS />
    <GlobalStyle />
    <RouterMain />
    </>
  )
}

export default App
