import React, {useState, useContext} from 'react'
import {UserContext} from '../userContext'

import RecipeName from './RecipeName'
import IngredientsForm from './IngredientsForm'
import RecipeDescription from './RecipeDescription'
import RecipePicture from './RecipePicture'
import TagsForm from './TagsForm'

import saveData from '../saveData'

import "./css/NewRecipe.css"

// Add tags (for search queries)
// recipeName, userName, ingredients, description, tags, userID, picture

export default function NewRecipePage(){
    const {isSignedIn, user} = useContext(UserContext)

    const [picture, setPicture] = useState(null)
    const [recipeName, setRecipeName] = useState('')
    const [ingredients, setIngredients] = useState([{ingredient: "", amount: ""}])
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState([])

    //sets state to new Picture
    function changePicture(value){
        setPicture(value)
    }
    //sets state to new Recipe name
    function changeRecipeName(value){
        setRecipeName(value)
    }
    //sets state to new Ingredients
    function changeIngredients(value){
        setIngredients(value)
    }
    //sets state to new Description 
    function changeDescription(value){
        setDescription(value)
    }   
    //sets state to new Tags
    function changeTags(value){
        setTags(value)
        console.log(tags)
    }
// FIX CLEANUP (PICTURE AND TAGS ARE NOT CLEANING UP)
    function cleanUp(){
        setPicture(null)
        setRecipeName('')
        setIngredients([{ingredient: "", amount: ""}])
        setDescription('')
        setTags([])

        return console.log("Recipe Saved and page cleared")
    }

    return(

        <div>
            {!isSignedIn && 
                <div><h3>Please sign in</h3></div>
            }
            { isSignedIn && 
                <div className="NewRecipeContainer">
                    <div className="RecipeName">
                        <RecipeName
                            changeRecipeName={changeRecipeName} 
                            recipeName={recipeName}
                
                        />
                    </div>
                    <div className="RecipePicture">
                        <h3>Picture</h3>
                        <RecipePicture
                            changePicture={changePicture}
                            currentPicture={picture}
                        />
                    </div>
                    <div className="RecipeIngredients">
                        <h3>Ingredients</h3>
                        <IngredientsForm 
                            changeIngredients={changeIngredients}
                            ingredients={ingredients}
                        />
                    </div>
                    <div className="RecipeDescription">
                        <h3>Description</h3>
                        <RecipeDescription 
                            changeDescription={changeDescription}
                            description={description}
                        />
                        <h3>Tags</h3>
                        <TagsForm 
                            changeTags={changeTags}
                            tags={tags}
                        />
                    </div>
                    <button
                    className="SaveRecipeButton"
                    onClick={() => {
                                    saveData(recipeName, user.userName, ingredients, description, tags, user.userID, picture)
                                    cleanUp()
                                
                                }}
                    >Save</button>
                
                </div>
            }   

        </div>
    )
}