import React from 'react'
import "./css/RecipeName.css"

export default function RecipeNameForm(props){

    function recipeNameChange(e){
        props.changeRecipeName(e.target.value)
    }

    const recipeName = props.recipeName

    return (
        
        <form className="RecipeNameContainer">
            <input
                type="text"
                name="recipeName"
                value={recipeName}
                onChange={recipeNameChange}
                placeholder="New Recipe"
            />
        </form>
        
        
    )
}