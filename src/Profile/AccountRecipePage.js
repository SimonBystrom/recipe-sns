import React, {useState} from 'react'
import {useAsync} from 'react-use'
import AccountRecipes from './AccountRecipes'
import {getUserRecipeData} from "../getData"

// STYLE THE RENDERED DIV


export default function AccountRecipePage(props){
    const [userRecipes, setUserRecipes] = useState([])

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

    return(
        <div>
            {userRecipes.length > 0 ? accountRecipeRender() : <h3>No Account Recipes</h3>}
        </div>
    )
}