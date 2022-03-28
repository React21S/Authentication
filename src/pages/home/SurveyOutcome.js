import { useState, useEffect} from "react";
import useFirestore from "../../hooks/useFirestore";

const SurveyOutcome = ({uid}) => {

  // const [userNPS, setUserNPS]= useState({id:"", User_id:"", Name:"" })
    // const [id, setId] = useState("")
    // const [displayName, setDisplayName] = useState("")

    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [quantity, setQuantity] = useState("")
    const {addDocument, response }=useFirestore('NPS')

    const handleSubmit = (e) => {
      e.preventDefault()
      addDocument({ 
        // for special uid for each 
        // uid:uid
        uid,
        name,
        amount,
        quantity
      })
    }

    // clearing the form after success input
    useEffect(() => {
      if(response.success){
        setName('')
        setAmount('')
        setQuantity('')
      }
    }, [response.success]);


// const changeHandler=(event)=>{
//   const {name, value}=event.target
//   setUserNPS((prevState)=>({...prevState, [name]:value,}));
//   console.log(userNPS)
  
// }

  
    return (
      <>

      
        <h3>Enter Your Demand</h3>
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
            <span>Quantity:</span>
            <input
              type="number"
              value={quantity}
              required
              onChange={(e)=>setQuantity(e.target.value)} 
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

          <button className="btn">Save Your Demand</button>
        </form>
      </>
    )
};

export default SurveyOutcome;

