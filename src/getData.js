import {firestore, auth} from "./firebase"



// update this to be used for query for searches
export function getRecipeData(){

    let recipeDataArr;

    firestore.collection("recipe").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.id + " => " , doc.data() )
            recipeDataArr.push(doc.data())

        })
    })

    return console.log(recipeDataArr)
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