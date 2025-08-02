import { Outlet } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { useState } from "react"
import { theme } from "./styles/theme"
//components
import HeaderComponent from "./components/HeaderComponent/HeaderComponent"

import NavBarComponent from "./components/NavBarComponent/NavBarComponent"
import CategoryComponent from "./components/CategoryComponent/CategoryComponent"

// axios
import axios from "axios"
import GlobalStyle from "./styles/GlobalStyle"

axios.defaults.baseURL = "https://dummyjson.com"



function App() {
  
  const [activeHeader, setActiveHeader] = useState(true)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      {activeHeader && <HeaderComponent setActiveHeader={setActiveHeader}/>}
      <NavBarComponent/>
      <CategoryComponent/>
      <Outlet/>
    </ThemeProvider>
  )
}

export default App
