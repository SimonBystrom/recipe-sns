import React from 'react'
import './css/IngredientsForm.css'

export default function IngredientsForm(props){

    const ingredients = props.ingredients

    // Adds ingredient info to ingredient list
     function addIngredientToList(e, index) {
        const {name, value} = e.target
        const ingredientsList = [...ingredients]
        ingredientsList[index][name] = value;
        props.changeIngredients(ingredientsList)
    }

    // Adds new Ingredient input field
    function addNewInput(){
        props.changeIngredients([...ingredients, {ingredient: "", amount: ""}])
    }


    // removes input field and data for input field from the ingredient list
    function removeInputField(index) {
        const ingredientsList = [... ingredients]
        ingredientsList.splice(index, 1)
        props.changeIngredients(ingredientsList)
    }

    
    

    return(
        <div
        className="IngredientFormContainer">
            
            {ingredients.map((item, i) => {
                return(
                    <div 
                    className="IngredientItem"
                    key={i}>
                        <input
                            className="ingredientInput"
                            type="text"
                            name="ingredient"
                            value={item.ingredient}
                            placeholder="Enter Ingredient"
                            onChange={e => addIngredientToList(e, i)
                            }
                        />
                        <input
                            className="ingredientInputAmount"
                            type="text"
                            name="amount"
                            value={item.amount}
                            placeholder="Enter Amount"
                            onChange={e => addIngredientToList(e, i)}
                        />
                    
                            {ingredients.length !== 1 && 
                           
                                <button
                                    className="ingredientButton"
                                    onClick={() => removeInputField(i)}
                                ><i className="ri-close-circle-line"></i>
                                </button>
                         
                                }
                        
                    </div>
                   
                )
            }
            )}
            <button className="ingredientButton add" onClick={addNewInput}>
                <i className="ri-add-circle-line"></i>
            </button>
        </div>
    )
}