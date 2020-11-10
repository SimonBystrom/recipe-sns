import React, {createContext, useState, useEffect} from 'react'
import {auth} from './firebase'

const UserContext = createContext()

function ContextProvider({children}){
    const [isSignedIn, setIsSignedIn] = useState(undefined)
    const [userName, setUserName] = useState()

    useEffect(
        ()=> { 
            auth.onAuthStateChanged((user) => {
                setIsSignedIn(!!user)
                setUserName(auth.currentUser.displayName)
            })
        });

    

    return(
    <ContextProvider
        value={ {
            isSignedIn,
            userName
        }
    }>
        {children}
    </ContextProvider>
    )
}

export {ContextProvider, UserContext}