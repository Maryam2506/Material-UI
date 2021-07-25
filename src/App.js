
import { createMuiTheme, ThemeProvider, Container } from "@material-ui/core"
import Typograph from './Component/Typography/Typography'
import Btn from './Component/Button/Button'
import Icon from './Component/Icon/Icon'
import Form from './Component/Form/Form'
import MGrid from './Component/Grid/Grid'
import Notes from './Component/Note/Note'
import Layout from './Component/Layout/Layout'
import { BrowserRouter, Route } from "react-router-dom"
import { purple } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#686363'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Notes} />
          <Route exact path="/Typography" component={Typograph} />
          <Route exact path="/Button" component={Btn} />
          <Route exact path="/Icon" component={Icon} />
          <Route exact path="/Form" component={Form} />
          <Route exact path="/Grid" component={MGrid} />
          </Layout>
        </BrowserRouter>
        
      </ThemeProvider>
    </Container>
  );
}

export default App;
