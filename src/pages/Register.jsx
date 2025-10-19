import { useState } from "react";
import { Link } from "react-router";

export default function Register() {

    const [form, setForm] = useState({

        username: "",
        email: "",
        password: "",
        role: "ADMIN"
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(name, ":", value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("form submitted:", form);
    }

    return (
        <div>

            <form onChange={handleSubmit}
            className="h-screen flex flex-col justify-center w-80 mx-auto gap-5">

                <div className="flex justify-center gap-10">

                    <h1>Register</h1>

                    <Link to="/" className="font-semibold text-red-600 transition-all duration-300 ease-in-out hover:text-blue-800 hover:scale-110">
                        Home
                    </Link>
                </div>

                <input type="text" name="username" placeholder="username"
                    value={form.username} onChange={handleChange}
                    className="border rounded-lg p-1 mt-5" />

                <input type="email" name="email" placeholder="email"
                    className="border rounded-lg p-1" />

                <input type="password" name="password" placeholder="password"
                    className="border rounded-lg p-1" />

                <select name="role" placeholder="role" className="border rounded-lg p-1">
                    <option value="ADMIN">ADMIN</option>
                    <option value="MEMBER">MEMBER</option>
                </select>

                <button type="submit" className="border rounded-lg p-1 mt-10">
                    Create account
                </button>

            </form>

        </div>
    )

}