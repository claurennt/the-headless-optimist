import "./App.css";
// import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

import Header from "./Header";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
