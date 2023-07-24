// import React from 'react'
import {useState} from 'react'

import './App.css'
import { PhotoDetails } from './components/PhotoDetails'
import { PhotoViewer } from './components/PhotoViewer'
import { createImageUrls } from './util/imageFunctions'


const images = createImageUrls()



function App() {
  
  const [photoDetails, setPhotoDetails] = useState("");

  const handlePhotoClick = (url: string) => {
    setPhotoDetails(url)
  }

  return (
    <main>
      <h1>React Photo Viewer</h1>
      <PhotoDetails imgSrc={photoDetails} />
      {images.map((img) => (
        <>
        <PhotoViewer key={img.id} imgSrc={img.imgUrl} onclickHandler={handlePhotoClick}/>
        </>
      ))}
    </main>
  )
}

export default App
