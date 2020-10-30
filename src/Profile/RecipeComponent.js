import React from 'react'


/*
    NEEDS:

    Hover ref function (create hover ref and context to share?)
    onClick for selecting -> displaying recipe + all info
*/

export default function RecipeComponent(props){

    return(
        <div>
            <img src={props.img}></img>
            <div>
                {/* <i>star<i>
                  <p>likes<p> */}
            </div>
        </div>
    )
}