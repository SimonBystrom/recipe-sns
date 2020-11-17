import {firestore} from "./firebase"



// update this to be used for query for searches
export function getRecipeData(){

    let recipeDataArr = []

    firestore.collection("recipe").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.id + " => " , doc.data() )
            recipeDataArr.push(doc.data())

        })
    })

    return console.log(recipeDataArr)
}



export function getUserRecipeData(user){
    let userRecipeArr = []

    firestore.collection("users").doc(user).collection("recipes").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((dataPoint) => {
            userRecipeArr.push(dataPoint.data())
        })
    })
    console.log(userRecipeArr)
    return userRecipeArr
}