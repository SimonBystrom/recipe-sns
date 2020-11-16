import React from 'react'
import "./css/RecipeDescription.css"

export default function RecipeDescription(props){

   const description = props.description

   function handleChange(e){
       props.changeDescription(e.target.value)
   }

    return(
        <div className="RecipeDescriptionContainer">
          
            <textarea
                
                name="description"
                value={description}
                onChange={handleChange}
            ></textarea>
        </div>
    )
}