import React, {useState, useEffect} from 'react'
import {storage} from '../../firebase'



// FIX THE RE-RENDER ISSUE
function SelectedRecipe(props){
    const [imgPath, setImgPath] = useState(null)
    const [hidden, setHidden] = useState(true)


    /* "hides" the current excess re-render issue 
    (and props for Image coming in multiple times for the wrong path causing a "flickering" img) 
    */
    useEffect(() => {
        setTimeout(() => {
            setHidden(false)
        }, 650)
    })

    //Creates storage Reference with img path from props
    const storageRef = storage.ref('recipes/').child(props.Image)

    // downloads Useable imgPath from the storage reference and sets imgPath to said value
    storageRef.getDownloadURL()
    .then(url => {
        setImgPath(url)
    })
    .catch(error => 
        console.log(error))

    let ingredients = props.Ingredients.map((item, index) => {
        return(
        <div key={index}>
            <h3>{item.ingredient}</h3>
            <h4>{item.amount}</h4>
        </div>
        )
    })

    return(
        <div>
            {!hidden ? 
            <div>
                {imgPath !== props.Image ?
                        <div className="SearchItemImg">
                            <img src={imgPath} alt=""></img>
                        </div>
                    : <p>loading...</p> }
                <h2>{props.RecipeName}</h2>
                <p>{props.Description}</p>
                <div>
                    {ingredients}
                </div>
            </div>
            : 
            <p>loading...</p>
            }
            
        </div>
    )
}

export default React.memo(SelectedRecipe)

