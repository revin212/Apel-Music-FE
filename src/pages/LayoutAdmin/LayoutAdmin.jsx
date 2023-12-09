import { Navigate, Outlet } from "react-router-dom"
import AdminNavbar from "../../components/navbar/AdminNavbar";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import { Box } from "@mui/material";

const wrapperStyle = {
    paddingInline:{xs:'30px', md:'70px'},
    paddingTop:'40px',
    paddingBottom:'60px',
  }

const LayoutAdmin = () => {
    const { token, roleName } = useContext(AuthContext);

    return(
            token && roleName == `${import.meta.env.VITE_ROLE_ADMIN_KEY}` ? 
            <>
                <AdminNavbar />
                <Box sx={wrapperStyle}>
                    <Outlet /> 
                </Box>
            </>
            :
            <Navigate to='/' />
    )
}

export default LayoutAdmin;