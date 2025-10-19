import { Link } from "react-router";

export default function Register() {

    return (
        <div>

            <div className="flex justify-center gap-10">

                <h1>Register</h1>

                <Link to="/" className="font-semibold text-red-600 transition-all duration-300 ease-in-out hover:text-blue-800 hover:scale-110">
                Home
                </Link>
            </div>

        </div>
    )

}