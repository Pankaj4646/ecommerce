import React, { useEffect, useState } from 'react'
import { Spinner } from '../ui/spinner'
import { useNavigate } from 'react-router-dom'


export default function Spiner() {

    const navigate = useNavigate()
    const [time, setTime] = useState(2)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => --prev)
        }, 1000)

        return () => clearInterval(interval)

    }, [time, navigate])

    if (time === 0) navigate("/")

    return (
        <div className='flex justify-center items-center h-[80vh]  ' >
            <div className='flex  justify-center items-center  flex-col-reverse gap-5 ' >
                <p className='text-2xl   p-5' > Redirect in Homepage in  {time} seconds</p>
                <Spinner className="size-8" />
            </div>
        </div>
    )
}
