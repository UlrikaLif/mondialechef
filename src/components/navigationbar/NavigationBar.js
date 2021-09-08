import React from 'react'
import './NavigationBar.css'
import logotype from "../../shared/images/logotype.svg"
import { useHistory } from 'react-router-dom'


export const NavigationBar = () => {
    const history = useHistory()

    return(
        <div className="navigationBarWrapper">
            <img onClick={() => history.push('/')}
            className="logotype"
            src={logotype} 
            alt="Error..." />
            <span onClick={() => history.push('/signin')}
            className="signin">Sign in</span>
        </div>
    )
}