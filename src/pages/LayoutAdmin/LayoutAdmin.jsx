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
    const { token } = useContext(AuthContext);

    return(
        <>
            {token? 
            <>
                <AdminNavbar />
                <Box sx={wrapperStyle}>
                    <Outlet /> 
                </Box>
            </>
            : 
            <Navigate to='/' /> 
            }
        </>
    )
}

export default LayoutAdmin;