import { useState, useEffect } from 'react'

// importing the project storage from the config file
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

//function responsible for uploading files and returning useful infos about the upload progress and success
const useStorage = (file) => {
  // states
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  // using the storage SDK to upload the file gotten from the parameter passed in the useStorage function(hook)

  // Get the image url and store it in the database and the database will contain the list of image urls and the data can be used to load images in our react components
  // The function in useEffect will fire everytime we have a new file value
  useEffect(() => {
    // logic to upload the files will go here
    // reference for storage
    // creating a reference to a file inside the default firebase bouquet
    const storageRef = projectStorage.ref(file.name)
    const collectionRef = projectFirestore.collection('images')
    // using 'put' method on storageRef will take the file and put it in the reference location
    //this is asynchronous(can take some time to do) attaching a listener to it, which will fire a function when certain events happen

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        // figuring out the progress of the upload
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        // setting the value of progress to the gotten percentage
        setProgress(percentage)
      },
      (err) => {
        setError(err)
      },
      async () => {
        // gets the url from projectStorage.ref, downloads it and sends it to the url func
        const url = await storageRef.getDownloadURL()
        const createdAt = timestamp()
        collectionRef.add({ url, createdAt })
        // only updating the value, it doesn't override the above declared url because its in a different scope and its only updating the value
        setUrl(url)
      }
    )
  }, [file])
  return { progress, url, error }
}

export default useStorage
