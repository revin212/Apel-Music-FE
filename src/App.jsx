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
import CategoryClassList from "./pages/CategoryClassList/CategoryClassList";
import { DetailClass } from "./pages/DetailClass/DetailClass";
import ScrollToTop from "./utils/scrollToTop";
import { Invoice } from "./pages/Invoice/Invoice";
import { InvoiceDetail } from "./pages/InvoiceDetail/InvoiceDetail";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/category/:type_name" element={<CategoryClassList />} />
                    <Route path="/class/:id" element={<DetailClass />}/>
                    <Route path="/invoice" element={<Invoice />}/>
                    <Route path="/invoice/:id" element={<InvoiceDetail />}/>
                  </Route>
                  <Route path="/" element={<Layout2 />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/new-password" element={<NewPassword />} />
                    <Route path="/checkout" element={<Checkout />} />
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
