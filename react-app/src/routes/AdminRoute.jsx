import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from '../context/Auth'
import { Outlet } from 'react-router-dom'
import Spiner from '../components/compo/Spinner'

export default function AdminRoute() {
    const [ok, setOk] = useState(false)
    const { auth } = useAuth()

    useEffect(() => {
        const authCheck = async () => {
            const res = await fetch("http://localhost:8080/api/v1/admin-auth", {
                method: "GET",
                headers: {
                    Authorization: auth?.token,
                },
            })
            const data = await res.json()

            if (data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }

        }

        if (auth?.token) {
            authCheck();
        }

    }, [auth?.token])


    return ok ? <Outlet /> : <Spiner />

}
