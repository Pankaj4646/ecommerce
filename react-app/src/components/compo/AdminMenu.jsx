import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";

export default function AdminMenu({ Sidebar }) {
    const { auth } = useAuth(""
    )

    return (

        <div className="min-h-screen flex bg-gray-100">

            {/* ===== Left Sidebar ===== */}
            <aside className="w-64 bg-white shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    <Link className="" to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}> {auth?.user?.role === 1 ? "Admin" : "User"} Panel </Link>
                </h2>

                <ul className="space-y-3 text-gray-700">
                    {Sidebar.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className="block w-full text-left p-2 rounded hover:bg-blue-100 transition"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside >


        </div >
    );
}
