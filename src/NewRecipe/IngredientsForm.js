import React from 'react'

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
        <div>
            {ingredients.map((x, i) => {
                return(
                    <div key={i}>
                        <input
                            type="text"
                            name="ingredient"
                            value={x.ingredient}
                            placeholder="Enter Ingredient"
                            onChange={e => addIngredientToList(e, i)
                            }
                        />
                        <input
                            type="text"
                            name="amount"
                            value={x.amount}
                            placeholder="Enter Amount"
                            onChange={e => addIngredientToList(e, i)}
                        />
                    
                            {ingredients.length !== 1 && 
                                <button
                                    onClick={() => removeInputField(i)}
                                >Remove</button>}
                        
                    </div>
                   
                )
            }
            )}
            <button onClick={addNewInput}>Add</button>
        </div>
    )
}