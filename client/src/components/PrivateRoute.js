import { Navigate, Outlet } from "react-router-dom";
import SignIn from "./Logins/LogIn";


export const PrivateRoute = ({isLogged}) =>{
    return isLogged ? <Outlet /> : <SignIn />
}