import React, {useState} from 'react'
import './css/RecipePicture.css'


export default function PictureUpload(props){
    const [imgSource, setImgSource] = useState(props.currentPicture)

    function handleChange(e){
        let picture = e.target.files[0]
        let picturePath = URL.createObjectURL(e.target.files[0])
        setImgSource(picturePath)
        props.changePicture(picture)
    
    }

    return (
        <div className="PictureUploadContainer">
            {imgSource ? <img src={imgSource} alt=""></img> : null}
            <label htmlFor="pictureUpload" className="FileUploadButton">
                <i className="ri-add-line"></i>
            </label>
            <input id="pictureUpload" type="file" onChange={handleChange}></input>
        </div>
    )
}