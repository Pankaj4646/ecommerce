import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext()


function AuthProvider({ children }) {
    const [auth, setAuth] = useState({
        token: null,
        user: null
    })


    useEffect(() => {
        const data = localStorage.getItem("auth")
        if (data) {
            const parseData = JSON.parse(data)


            setAuth({
                ...auth, user: parseData.user, token: parseData.token
            })
        }

    }, [])

    return <AuthContext.Provider value={{ auth, setAuth }} >
        {children}

    </AuthContext.Provider>

}

const useAuth = () => useContext(AuthContext)



export { useAuth, AuthProvider }