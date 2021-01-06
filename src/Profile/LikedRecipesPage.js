import React, {useState} from 'react'
import {useAsync} from 'react-use'
import LikedRecipes from './LikedRecipes'
import {getUserLikedRecipeData} from "../getData"


// STYLE THE RENDERED DIV

export default function LikedRecipePage(props){
    const [likedRecipes, setLikedRecipes] = useState([])

    useAsync(async () => {
            const likedRecipesResults = await getUserLikedRecipeData(props.userID)

            setLikedRecipes(likedRecipesResults)


   },[props.userID])

    
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
            {likedRecipes.length > 0 ? likedRecipeRender() : <h3>No Liked Recipes</h3>}
        </div>
    )
}