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


    const [searchInput, setSearchInput] = useState()
    const [searchTarget, setSearchTarget] = useState(null)
    const [searchResult, setSearchResult] = useState([])

 

    function changeSearchInput(value){
        setSearchInput(value)
        console.log(searchInput)
    }

    function changeSearchTarget(value) {
        setSearchTarget(value)
        console.log("Search Target is: ", value)
    }

    return(
    <UserContext.Provider
        value={ {
            isSignedIn,
            user: {userName, userEmail, userPhotoUrl, userID},
            changeSearchInput,
            searchInput,
            changeSearchTarget,
            searchTarget
        }
    }>
        {children}
    </UserContext.Provider>
    )
}

export  {UserProvider, UserContext}