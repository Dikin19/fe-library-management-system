    import { useState } from "react";
    import { Link, Navigate, useNavigate } from "react-router-dom";
    import { FaEye, FaEyeSlash } from "react-icons/fa";
    import api from "../config/axios.config";


    export default function Login() {

        const Nav = useNavigate()
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const [showPassword, setShowPassword] = useState(false)

        if (localStorage.getItem('access_token')) {
            return <Navigate to="/" />
        }

        const handleSubmit = async (e) => {

            e.preventDefault();
            console.log("form submitted:", username, password);


            try {

                const { data } = await api.post('/auth/login', { username, password })
                console.log('ada ?', data)

                localStorage.setItem('access_token', data.data.token);

                Nav('/');

            } catch (error) {
                if (error.response) {
                    message = error.response.data.message;
                }

            }

        }

        return (

            <div>

                <form onSubmit={handleSubmit}
                    className="h-screen flex flex-col justify-center w-80 mx-auto gap-5">

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
                            value={username}
                            onChange={(e) => {console.log("username:", e.target.value); setUsername(e.target.value)}}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <div className="relative w-full border border-gray-300 rounded-lg px-3 py-2">

                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password"
                                value={password}
                                onChange={(e) => {console.log("password:", e.target.value); setPassword(e.target.value)}}
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