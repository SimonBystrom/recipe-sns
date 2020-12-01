import React, {useState, useContext} from 'react'
import {UserContext} from '../userContext'
import {firestore, storage} from '../firebase'

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

    function changeTags(value){
        setTags(value)
        console.log(tags)
    }

 
    // ?? MOVE THIS FUNCTION ELSEWHERE? 
    // saves recipe and profile data to the firestore 
    function saveData(){
        const recipe = recipeName
        const author = user.userName
        const ingredientsList = ingredients
        const recipeDescription = description
        const tagsList = tags
        const imgPath = `/recipes/${user.userID}/${recipe}`

   
        

        //STORAGE SAVE: saves img to: recipes/{userID}/{recipeName}
        storage.ref(imgPath).put(picture)

        
        //ALL RECIPES: saves recipe to: recipe/{recipeID}
        firestore.collection("recipe").add({
            RecipeName: recipe,
            Author: author,
            Ingredients: ingredientsList,
            Description: recipeDescription,
            Tags: tagsList,
            Image: `${user.userID}/${recipe}`,
            Id: ''
        })
        .then((docRef) => {
            console.log("Recipe written with ID: ", docRef.id)
            firestore.collection("recipe").doc(docRef.id).update({
                Id: docRef.id
            })
            .then(() => console.log("Added docRef ID to recipe")
            )
            .catch((error) => console.log("Error adding docRef ID: ", error))
            
        })
        .catch((error) => console.log("Error adding recipe: ", error))



        // adds user (if not created) to: users/user  
        firestore.collection("users").doc(user.userID).set({
            Username: user.userName,
        } , {merge: true})
        .then((docRef) => console.log("User info added to: users/", docRef.id))
        .catch((error) => console.log("Error adding user: ", error))



        //USER RECIPES: saves recipe to:  users/{current user}/recipes/{recipeID}
        firestore.collection("users").doc(user.userID).collection("recipes").add({
            RecipeName: recipe,
            Author: author,
            Ingredients: ingredientsList,
            Description: recipeDescription,
            Tags: tagsList,
            Image: `${user.userID}/${recipe}`
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
                        <h3>Tags</h3>
                        <TagsForm 
                            changeTags={changeTags}
                            tags={tags}
                        />
                    </div>
                    <button
                    className="SaveRecipeButton"
                    onClick={() => saveData()}
                    >Save</button>
                
                </div>
            }   

        </div>
    )
}