
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

      <h1>Hello World</h1>
    </ThemeProvider>
    
  )
}


