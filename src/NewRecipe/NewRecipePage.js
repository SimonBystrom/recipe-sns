import React, {useState, useContext} from 'react'
import {UserContext} from '../userContext'
import {firestore} from '../firebase'

import RecipeName from './RecipeName'
import IngredientsForm from './IngredientsForm'
import RecipeDescription from './RecipeDescription'
import RecipePicture from './RecipePicture'

import "./css/NewRecipe.css"


// fix so adding a picture works (saves to storage and links said picture url)


export default function NewRecipePage(){
    const {isSignedIn, user} = useContext(UserContext)

    const [picture, setPicture] = useState()
    const [recipeName, setRecipeName] = useState()
    const [ingredients, setIngredients] = useState([{ingredient: "", amount: ""}])
    const [description, setDescription] = useState()

    


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


    // saves recipe and profile data to the firestore 
    function saveData(){
        const recipe = recipeName
        const author = user.userName
        const ingredientsList = ingredients
        const recipeDescription = description

        // saves recipe to: recipes/{recipeID}
        firestore.collection("recipe").add({
            RecipeName: recipe,
            Author: author,
            Ingredients: ingredientsList,
            Description: recipeDescription,
            // Image: recipe + authorName
        })
        .then((docRef) => console.log("Recipe written with ID: ", docRef.id))
        .catch((error) => console.log("Error adding recipe: ", error))



        // adds user (if not created) to: users/user  
        firestore.collection("users").doc(user.userID).set({
            Username: user.userName,
        } , {merge: true})
        .then((docRef) => console.log("User info added to: users/", docRef.id))
        .catch((error) => console.log("Error adding user: ", error))



        // adds recipe to:  users/{current user}/recipes/{recipeID}
        firestore.collection("users").doc(user.userID).collection("recipes").add({
            RecipeName: recipe,
            Author: author,
            Ingredients: ingredientsList,
            Description: recipeDescription,
            // Image: recipe + authorName
        })
        .then((docRef) => console.log("Recipe added to: /" + user.userName  + "/recipes/ ", docRef.id))
        .catch((error) => console.log("Error adding Recipe: ", error))

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
                    </div>
                    <button
                    className="SaveRecipeButton"
                    onClick={saveData}
                    >Save</button>
                
                </div>
            }   

        </div>
    )
}