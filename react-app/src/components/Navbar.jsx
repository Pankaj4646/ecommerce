import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/Auth';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function Navbar() {
    const { auth, setAuth } = useAuth()

    function handleLogout() {
        setAuth({
            ...auth, user: null, token: null
        })
        localStorage.removeItem("auth")
        toast.success("Logout ")


    }


    const Pages = [
        { href: "/", name: "Home" },
        { href: "/about", name: "About" },
        { href: "/service", name: "Service" },
        { href: "/contact", name: "Contact" },
    ];


    return (

        <nav className='   shadow-md  '>
            <div className='flex justify-between w-[1200px]  mx-auto  items-center ' >

                {/* Logo */}
                <Link to="/" >
                    <p className='text-2xl cursor-pointer'> 🛒 <span className='italic font-semibold'> Ecommerce </span> </p>
                </Link>

                {/* Navbar */}
                <div>

                    <ul className="flex gap-5 justify-center h-16 items-center list-none m-0 p-0">

                        {/* Map pages */}

                        {Pages.map((item, index) => (
                            <li key={index} className="cursor-pointer">
                                <Link to={item.href} className="text-decoration-none text-dark fw-semibold">
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                        {/* Bootstrap dropdown */}
                        <li className="dropdown">
                            <button
                                className="btn  dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {auth?.user?.name || "User"}
                            </button  >
                            <ul className="dropdown-menu">


                                <li><Link className="dropdown-item" to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>Dashboard</Link></li>
                            </ul>
                        </li>

                    </ul>
                </div>

                {/* Auth-Button */}
                <div className="space-x-10 flex gap-3 ">
                    {auth?.user ? (
                        <>
                            <button onClick={handleLogout} className="cursor-pointer">
                                <Link to="/login"> Logout</Link>
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="cursor-pointer text-black">
                                <Link className='text-black' to="/register">Register</Link>
                            </button>
                            <button className="cursor-pointer underline-none text-black">
                                <Link className='text-black underline-none' to="/login">Login</Link>
                            </button>
                        </>
                    )}
                </div>

            </div >
        </ nav >
    )
}
