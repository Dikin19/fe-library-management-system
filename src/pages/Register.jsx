import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../config/axios.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {

    const nav = useNavigate();

    const [form, setForm] = useState({ //1

        username: "",
        email: "",
        password: "",
        role: "",
    });

    if (localStorage.getItem("access_token")) {
        return <Navigate to="/" />
    }

    const [message, setMessage] = useState(""); //7
    const [showPassword, setShowPassword] = useState(false); //10

    const handleChange = (e) => { //3
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
        console.log(name, ":", value);
    };

    const handleSubmit = async (e) => { //5
        e.preventDefault();
        console.log("form submitted:", form);

        try {

            const res = await api.post("/auth/register", form)
            setMessage(`Data ${res.data.username || form.username} berhasil terdaftar`) //8
            nav("/login")
            setForm({ username: "", email: "", password: "", role: "" });


        } catch (error) {
            setMessage(`Gagal Register ${error.response?.data?.message || error.message}`);//8 //9 deklare dalam return

        }

    }

    return (
        <div>

            <form onSubmit={handleSubmit} //6
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

                <input type="text" name="username" placeholder="username"
                    value={form.username} onChange={handleChange}
                    className="border rounded-lg p-1 mt-5" />

                <input type="email" name="email" placeholder="email" //2
                    value={form.email} onChange={handleChange} //4
                    className="border rounded-lg p-1" />

                <div className="relative border rounded-lg p-1">
                    <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" //11
                        value={form.password} onChange={handleChange}
                        className="border-none outline-none"
                    />
                    <button //12
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>


                <select name="role" value={form.role} onChange={handleChange}
                    className="border rounded-lg p-1">

                    <option value="">-- Select Role --</option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="MEMBER">MEMBER</option>
                </select>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-20">
                    Create account
                </button>

                {message && (<p className="text-center mt-3 text-sm text-gray-700">{message}</p>)}

            </form>

        </div>
    )

}