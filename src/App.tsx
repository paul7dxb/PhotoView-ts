// import React from 'react'
import {useState} from 'react'

import './App.css'
import { PhotoDetails } from './components/PhotoDetails/PhotoDetails'
import { createImageUrls } from './util/imageFunctions'
import { PhotoGallery } from './components/PhotoGallery/PhotoGallery'


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
      <PhotoGallery images={images} onClickHandler={handlePhotoClick} />
    </main>
  )
}

export default App
