import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/Auth";
export default function Login() {

    const navigate = useNavigate()
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { auth, setAuth } = useAuth()
    const location = useLocation()

    async function submitForm(e) {

        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:8080/api/v1/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (data && data.user && data.token) {

                setAuth({
                    ...auth, user: data.user, token: data.token

                })
                localStorage.setItem("auth", JSON.stringify({ user: data.user, token: data.token }))

                toast.success(`Login Successful! `);
                navigate("/")
            } else {

                toast.error("Invalid Email or Password.");
            }

            setEmail("");
            setPassword("");
        } catch (err) {

        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={submitForm}
                className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Login
                </h2>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
}



