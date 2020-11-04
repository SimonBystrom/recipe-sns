import React, {useState} from 'react'


import RecipeName from './RecipeName'
import IngredientsForm from './IngredientsForm'
import RecipeDescription from './RecipeDescription'
import RecipePicture from './RecipePicture'

import "./NewRecipe.css"


// NEEDS


export default function NewRecipePage(){
    const [picture, setPicture] = useState()
    const [recipeName, setRecipeName] = useState()
    const [author, setAuthor] = useState()
    const [ingredients, setIngredients] = useState([{ingredient: "", amount: ""}])
    const [description, setDescription] = useState()


    function changePicture(value){
        setPicture(value)
    }


    //sets state to new Recipe name
    function changeRecipeName(value){
        setRecipeName(value)
    }
    //sets state to new Author name
    function changeAuthor(value){
        setAuthor(value)
    }
    //sets state to new Ingredients
    function changeIngredients(value){
        setIngredients(value)
    }
    //sets state to new Description 
    function changeDescription(value){
        setDescription(value)
    }   



    return(
        <div className="NewRecipeContainer">
            <div className="RecipeName">
                <RecipeName
                    
                    changeRecipeName={changeRecipeName} 
                    changeAuthorName={changeAuthor}
                    recipeName={recipeName}
                    author={author}
                />
            </div>
            <div className="RecipePicture">
                <RecipePicture
                    
                    changePicture={changePicture}
                />
            </div>
            <div className="RecipeIngredients">
                <IngredientsForm 
                    
                    changeIngredients={changeIngredients}
                    ingredients={ingredients}
                />
            </div>
            <div className="RecipeDescription">
                <RecipeDescription 
                    
                    changeDescription={changeDescription}
                    description={description}
                />
            </div>
            <button
            className="SaveRecipeButton"
            >Save</button>
           
        </div>
    )
}