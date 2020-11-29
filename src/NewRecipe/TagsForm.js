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
            <div className="Meats">
                <input type="checkbox"  name="Beef" value="Beef" onChange={addTag}/>
                <label htmlFor="Beef"> Beef</label>
                <input type="checkbox"  name="Pork" value="Pork" onChange={addTag}/>
                <label htmlFor="Pork"> Pork</label>
                <input type="checkbox"  name="Chicken" value="Chicken" onChange={addTag}/>
                <label htmlFor="Chicken"> Chicken</label>
            </div>
           
        </div>
    )
}