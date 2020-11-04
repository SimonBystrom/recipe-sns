import React, {useState} from 'react'

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
        
        <form>
            <input
                type="text"
                name="recipeName"
                value={recipeName}
                onChange={recipeNameChange}
                placeholder="Recipe Name"
            />
            <h6>by</h6>
            <input
                type="text"
                name="author"
                value={author}
                onChange={authorNameChange}
                placeholder="Author"
            />
        </form>
        
        
    )
}