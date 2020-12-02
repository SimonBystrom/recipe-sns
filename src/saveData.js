import {firestore, storage} from './firebase'


export default function saveData(recipeName, userName, ingredients, description, tags, userID, picture){
    const recipe = recipeName
    const author = userName
    const ingredientsList = ingredients
    const recipeDescription = description
    const tagsList = tags
    const imgPath = `/recipes/${userID}/${recipe}`

    

    //STORAGE SAVE: saves img to: recipes/{userID}/{recipeName}
    storage.ref(imgPath).put(picture)

    
    //ALL RECIPES: saves recipe to: recipe/{recipeID}
    firestore.collection("recipe").add({
        RecipeName: recipe,
        Author: author,
        Ingredients: ingredientsList,
        Description: recipeDescription,
        Tags: tagsList,
        Image: `${userID}/${recipe}`
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
    firestore.collection("users").doc(userID).set({
        Username: userName,
    } , {merge: true})
    .then((docRef) => console.log("User info added to: users/", docRef.id))
    .catch((error) => console.log("Error adding user: ", error))



    //USER RECIPES: saves recipe to:  users/{current user}/recipes/{recipeID}
    firestore.collection("users").doc(userID).collection("recipes").add({
        RecipeName: recipe,
        Author: author,
        Ingredients: ingredientsList,
        Description: recipeDescription,
        Tags: tagsList,
        Image: `${userID}/${recipe}`
    })
    .then((docRef) => console.log("Recipe added to: /" + userName  + "/recipes/ ", docRef.id))
    .catch((error) => console.log("Error adding Recipe: ", error))

}