import React from 'react'
import "./RecipeName.css"

export default function RecipeNameForm(props){

    function recipeNameChange(e){
        props.changeRecipeName(e.target.value)
    }

    function authorNameChange(e){
        props.changeAuthorName(e.target.value)
    }
    
    const recipeName = props.recipeName
    const author = props.author

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