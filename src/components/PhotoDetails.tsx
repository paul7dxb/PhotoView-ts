// import React from 'react'
import "./PhotoDetails.css"

interface PhotoDetailsProps {
    imgSrc?: string
}

export function PhotoDetails({imgSrc}:PhotoDetailsProps){

    const imageSelected = imgSrc !== "";

    let content: JSX.Element;

    if(imageSelected){
        content = (
            <div className="image-details">
            <img className="selected-image" src={imgSrc} alt="Selected Image from Lorem Picsum larger" />
            <p className="image-details-text">{imgSrc}</p>
            </div>
        )
    } else {
        content = (
            <p>Select an image to view information about it</p>
        )
    }

    return content
}