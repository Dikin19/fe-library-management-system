import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export default function Login() {

    const [form, setForm] = useState({
        username: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false)

    if (localStorage.getItem('access_token')) {
        return <Navigate to="/" />
    }





    return (

        <div>

            <form className="h-screen flex flex-col justify-center w-80 mx-auto gap-5">

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

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                    <div className="relative w-full border border-gray-300 rounded-lg px-3 py-2">

                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password"
                            className="border-none outline-none" />

                        <button type="button" onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}

                        </button>
                    </div>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-10">
                    Login
                </button>

                <p className="mt-1 text-center text-sm text-gray-600">
                    Don’t have an account yet?{' '}
                    <Link to="/register" className="text-[#D3232A] font-semibold hover:underline">
                        Register
                    </Link>
                </p>

            </form>

        </div>


    )
}