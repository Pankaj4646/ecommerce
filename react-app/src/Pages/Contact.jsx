import React from 'react'

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Contact Us
                </h2>

                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"

                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"

                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Message</label>
                        <textarea
                            name="message"

                            required
                            rows="4"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
