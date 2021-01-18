import React from 'react'

import './css/TagsForm.css'

export default function TagsForm(props){

    function addTag(e){
        let prevTags = props.tags
        let {value} = e.target
        if(e.target.checked){
            props.changeTags([...prevTags, value])
        }
        if(!e.target.checked){
           props.changeTags(prevTags.filter(tag => tag !== value))
        }
    }


    return(
        <div className="TagsFormContainer">
            <div className="Tags-Container">
                <input type="checkbox"  name="Beef" value="Beef" onChange={addTag}/>
                <label htmlFor="Beef"> Beef</label>
                <input type="checkbox"  name="Pork" value="Pork" onChange={addTag}/>
                <label htmlFor="Pork"> Pork</label>
                <input type="checkbox"  name="Chicken" value="Chicken" onChange={addTag}/>
                <label htmlFor="Chicken"> Chicken</label>
                <input type="checkbox"  name="Fish" value="Fish" onChange={addTag}/>
                <label htmlFor="Fish"> Fish</label>
                <input type="checkbox"  name="Vegetarian" value="Vegetarian" onChange={addTag}/>
                <label htmlFor="Vegetarian"> Vegetarian</label>
                <input type="checkbox"  name="Vegan" value="Vegan" onChange={addTag}/>
                <label htmlFor="Vegan"> Vegan</label>
            </div>
           
        </div>
    )
}