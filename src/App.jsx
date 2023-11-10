// Import library
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import components and pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
import NewPassword from "./pages/New Password/New Password";
import theme from "./theme"
import ForgotPassword from "./pages/Forgot Password/Forgot Password";
import Layout from "./pages/Layout";
import Layout2 from "./pages/Layout2";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                  </Route>
                  <Route path="/" element={<Layout2 />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/new-password" element={<NewPassword />} />
                  </Route>
                  {/* <Route path="*" element={<NoMatch />} /> */}
              </Route>
            </Routes>
          </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
