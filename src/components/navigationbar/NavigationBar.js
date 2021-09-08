import React, { useContext } from 'react'
import './NavigationBar.css'
import logotype from "../../shared/images/logotype.svg"
import { useHistory } from 'react-router-dom'
import { UserContext } from "../../shared/global/provider/UserProvider"
import { Profile } from "../profile/Profile"

export const NavigationBar = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenicatedUser] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
        return (authenticatedUser) 
            ? <div className="profile"><Profile /></div>
            : <span onClick={() => history.push('/signin')}
            className="signin">Sign in</span>
    }

    return(
        <div className="navigationBarWrapper">
            <img onClick={() => history.push('/')}
                className="logotype"
                src={logotype} 
                alt="Error..." />
            {displayUserIfAuthenticated()}    

        </div>
    )
}