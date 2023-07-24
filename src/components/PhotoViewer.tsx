// import React from 'react'
import './PhotoViewer.css'

interface PhotoViewerProps {
    imgSrc?: string;
    onclickHandler: (url: string) => void;
}

export function PhotoViewer({imgSrc, onclickHandler}:PhotoViewerProps){

    return (
        <>
            {imgSrc ? <img onClick={() => onclickHandler(imgSrc)} className='picture' src={imgSrc} alt="An image from Lorem Picsum" /> : <p>No Image source</p> } 
        </>
    )

}