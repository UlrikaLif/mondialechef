import React, { useEffect, useState } from 'react'

export const HomeView = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        alert('Component is being rendered')
        return () => {
            alert('Component is being removed')
        }
    }, [count])

    return(
        <div>
            <h1> {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment with 1
            </button>
        </div>
    )
}