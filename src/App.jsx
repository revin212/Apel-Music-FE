// Import library
import { ThemeProvider } from "@mui/material/styles";

// Import components and pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import theme from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Home />
          <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
