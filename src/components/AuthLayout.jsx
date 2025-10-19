import { Navigate, Outlet } from "react-router"


function AuthLayout () {

    if (!localStorage.getItem("access_token")){

        return <Navigate to="/login" />

    }

    return(
        <>

        <Outlet/>

        </>
    )

}

export default AuthLayout