import {firestore, storage} from "./firebase"



// update this to be used for query for searches
export async function getRecipeData(searchTarget){

    const searchResultsArr = [];
    await firestore.collection("recipe").where("RecipeName", "==", searchTarget)
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