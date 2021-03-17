import React, { useState } from 'react'
import ImageGrid from './comps/ImageGrid'
import Title from './comps/Title'
import UploadForm from './comps/UploadForm'
import Modal from './comps/Modal'
// import ProgressBar from './comps/ProgressBar'
function App() {
  const [selectedImg, setSelectedImg] = useState(null)
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      {/* <ProgressBar /> */}
    </div>
  )
}

export default App
