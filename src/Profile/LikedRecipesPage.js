import React, {useState, useEffect} from 'react'
import {useAsync} from 'react-use'
import LikedRecipes from './LikedRecipes'
import {getUserLikedRecipeData} from "../getData"

import Loading from '../Components/Loading'
import './css/RecipesPages.css'


// STYLE THE RENDERED DIV

export default function LikedRecipePage(props){
    const [likedRecipes, setLikedRecipes] = useState([])
    const [loading, setLoading] = useState(true)

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

useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 300)
})

    return(
        <div className='RecipesPages-Container'>
            {loading ? <Loading/> : (!loading && likedRecipes.length > 0) ? likedRecipeRender() : <h3>No Liked Recipes</h3>}
            
        </div>
    )
}