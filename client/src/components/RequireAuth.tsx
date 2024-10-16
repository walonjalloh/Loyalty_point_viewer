import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const userAuth = useAuth()
    const location = useLocation()

    return(
        userAuth?.isAuthenticated  
        ? <Outlet/>  
        : <Navigate to='/login' state={{from:location}} replace />
    )

}

export default RequireAuth