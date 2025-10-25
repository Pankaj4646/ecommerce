import React, { useState } from "react";
// import { useAuth } from "../../context/Auth"

// import AdminMenu from "../../components/compo/AdminMenu";

export default function AdminDashboard() {
    const { auth } = useAuth()


    const SideBarItems = [{
        path: "/dashboard/admin/create-category", name: "Category"
    },
    { path: "/dashboard/admin/products", name: "Products" }, { path: "/dashboard/admin/users", name: "Users" }
    ]

    return (

        <div className="min-h-screen flex bg-gray-100">

            <AdminMenu Sidebar={SideBarItems} />

            {/* ===== Right Content Area ===== */}
            <main main className="flex-1 p-10" >


                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                        Welcome, {auth?.user?.name} 👋
                    </h1>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white p-6 shadow rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
                            <p className="text-2xl font-bold mt-2">124</p>
                        </div>

                        <div className="bg-white p-6 shadow rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-700">Orders</h3>
                            <p className="text-2xl font-bold mt-2">58</p>
                        </div>

                        <div className="bg-white p-6 shadow rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
                            <p className="text-2xl font-bold mt-2">$12,300</p>
                        </div>
                    </div>
                </div>






            </main >
        </div >
    );
}
