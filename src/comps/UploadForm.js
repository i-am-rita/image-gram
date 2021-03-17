// import { fireEvent } from '@testing-library/dom'
import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {
  // storing the file in a local piece of state
  // const [progress, setProgress] = useState(0)
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  //   checking the type of file to ensure that it's only image and not Mp3 or any type of file
  const types = ['image/png', 'image/jpeg']

  const changeHandler = (e) => {
    //grabbing only the first selected file
    let selected = e.target.files[0]
    // console.log(selected)

    // updating setFile to be anything that's selected
    if (selected && types.includes(selected.type)) {
      // using setFile method to update the state of the file and pass in the selected file
      setFile(selected)

      // if an image is added, we want the error message to be off the page
      setError(' ')
      //   showing an error to the user if trying to upload another type of file
    } else {
      setFile(null)
      setError('Please select an image file(png or jpeg)')
    }
  }
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {/* outputing the error message if the file selected is not an image */}
        {/* note: the right side of the output will only run if the left part return true*/}
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  )
}

export default UploadForm
