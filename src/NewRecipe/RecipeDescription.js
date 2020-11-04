import React from 'react'

export default function RecipeDescription(props){

   const description = props.description

   function handleChange(e){
       props.changeDescription(e.target.value)
   }

    return(
        <div>
            <textarea
                name="description"
                value={description}
                onChange={handleChange}
            ></textarea>
        </div>
    )
}