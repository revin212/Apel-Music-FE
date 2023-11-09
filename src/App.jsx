// Import library
import { ThemeProvider } from "@mui/material/styles";

// Import components and pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/Forgot Password/Forgot Password";
import theme from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <ForgotPassword />
      </div>
    </ThemeProvider>
  );
}

export default App;
