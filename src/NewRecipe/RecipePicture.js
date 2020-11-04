import React, {useState} from 'react'


export default function PictureUpload(props){
    const [imgSource, setImgSource] = useState()

    function handleChange(e){
        let picture = e.target.files[0]
        let picturePath = URL.createObjectURL(e.target.files[0])
        setImgSource(picturePath)
        props.changePicture(picture)
    
    }

    return (
        <div>
            {imgSource ? <img width="200px" height="200px"src={imgSource}></img> : null}
            <input type="file" onChange={handleChange}></input>
        </div>
    )
}