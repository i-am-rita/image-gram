import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

// creating the hook
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([])

  //   useEffect hook for database communication so that it can re-run when the collection changes
  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = []
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id })
        })
        setDocs(documents)
      })
    return () => unsub()
  }, [collection])
  return { docs }
}

export default useFirestore
