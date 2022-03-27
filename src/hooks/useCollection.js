// for fetching data from database

import { useEffect, useState,useRef } from "react"
import { projectFirestore } from "../firebase/config"

const useCollection = (fetching, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

    // in getting actual array value and to break out the infinite loop
      // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
    const query = useRef(_query).current

    // to allow the input data stay accordingly 
    const orderBy = useRef(_orderBy).current

    useEffect(() => {
        let ref = projectFirestore.collection(fetching)

        // // single line method
        // let ref = projectFirestore.collection(fetching).where().orderBy();


        // For handle separate users in home.js and database
        if (query) {
        ref = ref.where(...query)
        }

        if (orderBy) {
            ref = ref.orderBy(...orderBy)
        }

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

  }, [fetching, query,orderBy])

  return { documents, error, }
}

export default useCollection 