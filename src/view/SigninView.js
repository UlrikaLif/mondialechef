import React, {useState} from 'react'

export const SigninView = () => {
    const [loggedInUser, setLoggedInUser] = useState("Arasto")

    return(
        <div>
            <h1>{loggedInUser}</h1>
            <button onClick={() =>setLoggedInUser("Hulken")}>Update the state value</button>
        </div>

    )
}