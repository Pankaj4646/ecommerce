import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function RegisterForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate()

    async function submitForm(e) {
        e.preventDefault();

        try {

            const res = await axios.post(`http://localhost:8080/api/v1/register`, {
                name,
                phone,
                password,
                email
            })

            if (res.data.success) {
                toast.success(`Registration Successfully ${res.data.userData.name} `);
                navigate("/login")
            }

            setName("")
            setPassword("")
            setEmail("")


            setPhone("")

        } catch (err) {
            // console.error("Error:", err);
            toast.error("Registration failed. Please try again.");

        }

    }
    // 
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={submitForm}
                className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Registration
                </h2>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                </div>

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

                {/* Phone */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                    Register
                </button>
            </form>
        </div>
    );
}
