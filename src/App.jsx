// Import library
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

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
import { MyClass } from "./pages/MyClass/MyClass";
import { EmailConfirm } from "./pages/EmailConfirm/EmailConfirm";
import { CheckoutSuccess } from "./pages/CheckoutSuccess/CheckoutSuccess";
import { NotFound } from "./pages/NotFound/NotFound";
import { AuthRoute } from "./components/ProtectedRoutes/AuthRoute";
import LayoutAdmin from "./pages/LayoutAdmin/LayoutAdmin";
import { AdminCourse } from "./pages/Admin/AdminCourse";
import { AdminCategory } from "./pages/Admin/AdminCategory";
import { AdminUser } from "./pages/Admin/AdminUser";
import { AdminInvoice } from "./pages/Admin/AdminInvoice";

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
                    <Route path="/category/:id" element={<CategoryClassList />} />
                    <Route path="/class/:id" element={<DetailClass />}/>
                    <Route path="/" element={<AuthRoute />}> 
                      <Route path="/myclass" element={<MyClass />}/>
                      <Route path="/invoice" element={<Invoice />}/>
                      <Route path="/invoice/:id" element={<InvoiceDetail />}/>
                    </Route>
                  </Route>
                  <Route path="/" element={<Layout2 />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/new-password" element={<NewPassword />} />
                    <Route path="/" element={<AuthRoute />}> 
                      <Route path="/checkout" element={<Checkout />} /> 
                    </Route>
                  </Route>
                  <Route path="/admin" element={<LayoutAdmin />}>
                      <Route path="/admin/category" element={<AdminCategory />} /> 
                      <Route path="/admin/course" element={<AdminCourse />} /> 
                      <Route path="/admin/user" element={<AdminUser />} /> 
                      <Route path="/admin/invoice" element={<AdminInvoice />} /> 
                  </Route>
                  <Route path="/email-confirm" element={<EmailConfirm />} />
                  <Route path="/checkout-success" element={<CheckoutSuccess />} />
                  <Route path="/logout" element={<Navigate to="/" />} />
                  <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
