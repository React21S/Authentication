// for fetching data from database

import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

const useCollection = (fetching) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

    useEffect(() => {
    const ref = projectFirestore.collection(fetching)

    const unsubscribe = ref.onSnapshot((snapshot) => {
      let results = []
      snapshot.docs.forEach((doc)=> {
        results.push({...doc.data(), id: doc.id})
      });
      
      // update state
      setDocuments(results)
      setError(null)
    }, (error) => {
      console.log(error)
      setError('could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [fetching])

  return { documents, error }
}

export default useCollection 