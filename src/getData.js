import {firestore, storage} from "./firebase"



// make querry option to search better (not only 1 specific exact search for recipe name)
export async function getRecipeData(searchTarget){

    const searchResultsArr = [];
    await firestore.collection("recipe").where("RecipeName", ">=", searchTarget)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.id + " => " , doc.data() )
            searchResultsArr.push(doc.data())

        })
    })

    return searchResultsArr;
}



export async function getUserRecipeData(userID){
 
  
    const recipeArr = []
      await firestore.collection("users").doc(userID).collection("recipes").get()
      .then(querySnapshot => {
          querySnapshot.forEach(dataPoint => {
              recipeArr.push(dataPoint.data())
          })
      })
      
    
    
    return recipeArr
}