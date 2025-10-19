import { Link } from "react-router";


export default function Login() {



    return (
        <div className="flex justify-center gap-10">

            <Link to="/register" className="font-semibold text-red-600 transition-all 
                    duration-300 ease-in-out hover:text-blue-800 hover:scale-110">
                Register
            </Link>

            <Link to="/" className="font-semibold text-red-600 transition-all 
                    duration-300 ease-in-out hover:text-blue-800 hover:scale-110">
                Home
            </Link>

            <Link to="/login" className="font-semibold text-red-600 transition-all 
                    duration-300 ease-in-out hover:text-blue-800 hover:scale-110">
                Login
            </Link>

        </div>
    )
}