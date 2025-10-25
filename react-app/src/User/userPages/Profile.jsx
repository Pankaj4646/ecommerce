import React, { useState } from "react";

import { useAuth } from "../../context/Auth";

import AdminMenu from "../../components/compo/AdminMenu";

export default function Profile() {
    const { auth } = useAuth()


    const SideBarItems = [{
        path: "/dashboard/user/order", name: "Order",

    }, {
        path: "/dashboard/user/profile", name: "Profile",
    }

    ]

    return (

        <div className="min-h-screen flex bg-gray-100">

            <AdminMenu Sidebar={SideBarItems} />

            {/* ===== Right Content Area ===== */}
            <main main className="flex-1 p-10" >


                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                        Welcome, Profile 👋
                    </h1>


                </div>






            </main >
        </div >
    );
}
