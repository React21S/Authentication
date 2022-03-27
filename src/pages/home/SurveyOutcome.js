import { useState, useEffect} from "react";
import useFirestore from "../../hooks/useFirestore";

const SurveyOutcome = ({uid}) => {

  // const [userNPS, setUserNPS]= useState({id:"", User_id:"", Name:"" })
    // const [id, setId] = useState("")
    // const [displayName, setDisplayName] = useState("")

    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const {addDocument,deleteDocument, response }=useFirestore('NPS')

    const handleSubmit = (e) => {
      e.preventDefault()
      addDocument({ 
        // for special uid for each 
        // uid:uid
        uid,
        name,
        amount
      })
    }

    // clearing the form after success input
    useEffect(() => {
      if(response.success){
        setName('')
        setAmount('')
      }
    }, [response.success]);


// const changeHandler=(event)=>{
//   const {name, value}=event.target
//   setUserNPS((prevState)=>({...prevState, [name]:value,}));
//   console.log(userNPS)
  
// }

  
    return (
      <>

      
        <h3>Net Promoter Score</h3>
        <form onSubmit={handleSubmit}>
          {/* <label>
            <span>Id:</span>
            <input 
              type="number"
              name="id"
              required
              onChange={changeHandler} 
            />
          </label> */}
          <label>
            <span>Name:</span>
            <input
              type="text"
             value={name}
              required
              onChange={(e)=>setName(e.target.value)} 
            />
          </label>
          <label>
            <span>Amount €:</span>
            <input
              type="number"
              value={amount}
              required
              onChange={(e)=>setAmount(e.target.value)} 
            />
          </label>
          {/* <label>
            <span>Name:</span>
            <input
              type="text"
              required
              onChange={(e) => setDisplayName(e.target.value)} 
              value={displayName} 
            />
          </label>
          <label>
            <span>Survey Text:</span>
            <textarea
              type="number"
              required
              onChange={(e) => setDisplayName(e.target.value)} 
              value={displayName} 
            />
          </label>
          
           */}

          <button className="btn">Add Transaction</button>
        </form>
      </>
    )
};

export default SurveyOutcome;

