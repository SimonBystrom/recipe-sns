import React from 'react'

import AccountRecipes from './AccountRecipes'
import LikedRecipes from "./LikedRecipes"

/* 
    NEEDS:
    recieve props to display username 
*/

export default function ProfilePage(props){

    return(
        <div>
            <h1>Hello {props.user}</h1>
            <h2>Your Recipes</h2>
            <AccountRecipes />
            <h2>Liked Recipes</h2>
            <LikedRecipes />
        </div>
    )
}