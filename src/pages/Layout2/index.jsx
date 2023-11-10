import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar";

const Layout2 = () => {
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout2;