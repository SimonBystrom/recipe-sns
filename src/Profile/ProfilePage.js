import React, {useContext, useState} from 'react'
import {useAsync} from 'react-use'
import AccountRecipes from './AccountRecipes'
import LikedRecipes from "./LikedRecipes"
import {UserContext} from '../userContext'

import {getUserRecipeData, getUserLikedRecipeData} from "../getData"

import Loading from '../Components/Loading'
import Slider from '../Slider'

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
    const [likedRecipes, setLikedRecipes] = useState([])


   useAsync(async () => {
        const userRecipesResults =  await getUserRecipeData(user.userID)
        const likedRecipesResults = await getUserLikedRecipeData(user.userID)
            setUserRecipes(userRecipesResults)
            setLikedRecipes(likedRecipesResults)

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
           return null
       }
   }

   let likedRecipeRender = () => {
    if(likedRecipes.length > 0) {
        return likedRecipes.map((item, index) => {
            return (
            <LikedRecipes 
                 Image={item.Image}
                 Author={item.Author}
                 Description={item.Description}
                 Ingredients={item.Ingredients}
                 RecipeName={item.RecipeName}
                 key={index}
            ></LikedRecipes>)
        })
    } else {
        return null
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
                    {userRecipes.length > 0 ? <Slider options={{imagesLoaded: true}}>{accountRecipeRender()}</Slider> : null}
                    
                    <h2>Liked Recipes</h2>
                    {likedRecipes.length > 0 ? <Slider>{likedRecipeRender()}</Slider> : null}
                
            </div>
            }
        </div>
    )
}