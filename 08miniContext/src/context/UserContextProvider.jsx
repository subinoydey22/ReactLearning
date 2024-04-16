import React, {useState} from 'react'

import UserContext from './UserContext'

const UserContextProvider= ({children}) => {
    const [user, setUser] = useState({
        name:"-",
        address:"-"
    })
    return (
        <UserContext value={{user, setUser}}>
            {children}
        </UserContext>
    )

}


export default UserContextProvider