import React, {createContext, useState, useEffect} from 'react'
import {auth} from './firebase'

 const UserContext = createContext()

function UserProvider({children}){
    const [isSignedIn, setIsSignedIn] = useState(null)
    const [userName, setUserName] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const [userPhotoUrl, setUserPhotoUrl] = useState(null)
    const [userID, setUserID] = useState(null)

    useEffect(
        ()=> { 
            auth.onAuthStateChanged((user) => {
                if(user){
                setIsSignedIn(!!user)
                setUserName(user.displayName)
                setUserEmail(user.email)
                setUserPhotoUrl(user.photoURL)
                setUserID(user.uid)

                } else  {
                    setUserName(null)
                    setUserEmail(null)
                    setUserPhotoUrl(null)
                    setUserID(null)
                }
            }
            )
        });


   

    return(
    <UserContext.Provider
        value={ {
            isSignedIn,
            user: {userName, userEmail, userPhotoUrl, userID},
        }
    }>
        {children}
    </UserContext.Provider>
    )
}

export  {UserProvider, UserContext}