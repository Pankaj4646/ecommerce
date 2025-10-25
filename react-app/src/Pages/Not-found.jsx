import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
            <h1 className="text-9xl font-bold text-red-500">404</h1>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold">Page Not Found</h2>
            <p className="mt-2 text-gray-600 text-center">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>

            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
            >
                Go Back Home
            </Link>
        </div>
    )
}
