import React, { useState, useContext } from 'react'
import { UserContext } from '../shared/global/provider/UserProvider'

export const SigninView = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [authenticatedUser, setAuthenicatedUser] = useContext(UserContext)

    const login = () => {
        setAuthenicatedUser(username)
    }


    return(
        <div>
            <span> Username:  </span><input onChange={event =>setUsername(event.target.value)} /> <br />
            <span> Password:  </span><input type="password" onChange={event =>setPassword(event.target.value)} /> <br />
            <button onClick={() => login()}>Login</button>
        </div>

    )
}