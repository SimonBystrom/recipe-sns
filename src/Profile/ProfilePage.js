import React, {useContext, useState} from 'react'
import {useAsync} from 'react-use'
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

export default function ProfilePage(){
    const {isSignedIn, user} = useContext(UserContext)
    const [userRecipes, setUserRecipes] = useState([])


   useAsync(async () => {
        const userRecipesResults =  await getUserRecipeData(user.userID)
            setUserRecipes(userRecipesResults)
   },[user.userID])

// Maps over userRecipes Array and renders AccountRecipes with values from Array
   let accountRecipeRender = () => {
       if(userRecipes.length > 0) {
           return userRecipes.map((item, index) => {
               return (
               <AccountRecipes 
                    Image={item.Image}
                    Author={item.Author}
                    Description={item.Description}
                    Ingredients={item.Ingredients}
                    RecipeName={item.RecipeName}
                    key={index}
               ></AccountRecipes>)
           })
       } else {
           return <p>Loading...</p>
       }
   }

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
                {accountRecipeRender()}
                {}
                <h2>Liked Recipes</h2>
                <LikedRecipes />
                
            </div>
            }
        </div>
    )
}