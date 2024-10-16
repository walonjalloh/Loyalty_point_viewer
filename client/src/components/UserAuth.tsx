import useAuth from "../hooks/useAuth";
import { Outlet,Navigate,useLocation } from "react-router-dom";

const UserAuth = () => {
    const auth = useAuth();
    const location = useLocation()

    return(
        auth?.userLogin 
        ? <Outlet/>
        : <Navigate to='/login' state={{from:location}} replace />
    )
}
export default UserAuth