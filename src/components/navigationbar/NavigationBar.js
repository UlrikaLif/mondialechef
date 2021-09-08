import React, { useContext } from 'react'
import './NavigationBar.css'
import logotype from "../../shared/images/logotype.svg"
import { useHistory } from 'react-router-dom'
import { UserContext } from "../../shared/global/provider/UserProvider"

export const NavigationBar = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenicatedUser] = useContext(UserContext)

    return(
        <div className="navigationBarWrapper">
            <img onClick={() => history.push('/')}
                className="logotype"
                src={logotype} 
                alt="Error..." />
            <span onClick={() => history.push('/signin')}
                className="signin">Sign in</span>
            <h3> {authenticatedUser}</h3>
        </div>
    )
}