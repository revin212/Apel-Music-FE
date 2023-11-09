// Import library
import { ThemeProvider } from "@mui/material/styles";

// Import components and pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NewPassword from "./pages/New Password/New Password";
import theme from "./theme"
import ForgotPassword from "./pages/Forgot Password/Forgot Password";

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
