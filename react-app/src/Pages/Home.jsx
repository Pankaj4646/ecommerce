import React from 'react'
import { useAuth } from "../context/Auth"
export default function Home() {
    const { auth } = useAuth()
    return (
        <div>
            <pre>{JSON.stringify(auth, null, 4)}</pre>
        </div>
    )
}
