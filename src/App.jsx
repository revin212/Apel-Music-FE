// Import library
import { ThemeProvider } from "@mui/material/styles";

// Import components and pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NewPassword from "./pages/New Password/New Password";
import theme from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <NewPassword />
      </div>
    </ThemeProvider>
  );
}

export default App;
