import {firestore} from "./firebase"



// write query that accepts tags (comes in array)
export async function getRecipeData(searchTarget, tags){

    const searchResultsArr = [];

    //only matches exact recipe name
    if(searchTarget){
        await firestore.collection("recipe").where("RecipeName", "==", searchTarget)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(doc.id + " => " , doc.data() )
                searchResultsArr.push(doc.data())
    
            })
        })
        
    }

    //fetches all recipes with tags that match any of the tags saved to recipe/Tags: []  (up to 10 tags)
    if(tags.length > 0){
        await firestore.collection("recipe").where("Tags", "array-contains-any", tags)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(doc.id + " => " , doc.data() )
                searchResultsArr.push(doc.data())
    
            })
        })

    }
   
   

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