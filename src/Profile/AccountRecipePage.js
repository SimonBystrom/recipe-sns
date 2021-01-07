import React, {useState, useEffect} from 'react'
import {useAsync} from 'react-use'
import AccountRecipes from './AccountRecipes'
import {getUserRecipeData} from "../getData"
import Loading from '../Components/Loading'

import './css/RecipesPages.css'

// STYLE THE RENDERED DIV


export default function AccountRecipePage(props){
    const [userRecipes, setUserRecipes] = useState([])
    const [loading, setLoading] = useState(true)

    useAsync(async () => {
        const userRecipesResults =  await getUserRecipeData(props.userID)
        
            setUserRecipes(userRecipesResults)

   },[props.userID])

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

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300)
    })

    return(
        <div className='RecipesPages-Container'>
            
            {loading ? <Loading/> : (!loading && userRecipes.length > 0) ? accountRecipeRender() : <h3>No Account Recipes</h3>}
        </div>
    )
}