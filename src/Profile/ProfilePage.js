import React, {useContext} from 'react'

import AccountRecipes from './AccountRecipes'
import LikedRecipes from "./LikedRecipes"
import {UserContext} from '../userContext'

import {getUserRecipeData} from "../getData"

/* 
    NEEDS:
    Design and setup to feed props (from liked recipes and Account recipes -> JSX comps)

    make async await for this info (getUserRecipeData(`${user.userID}`))  
    =>  
    feed this info to Account Recipe and build it out! 
*/

export default function ProfilePage(props){
    const {isSignedIn, user} = useContext(UserContext)


    return(
        <div>
            {!isSignedIn && 
                <div>
                    <h3>Not signed in</h3>
                </div>
            } 
            {isSignedIn && 
                <div>
                <h1>Hello {user.userName}</h1>
                <h5>Email: {user.userEmail}</h5>
                <h2>Your Recipes</h2>
                <AccountRecipes />
                <h2>Liked Recipes</h2>
                <LikedRecipes />
            </div>
            }
        </div>
    )
}