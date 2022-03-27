import { useState,useEffect } from "react";
import { projectAuth } from "../firebase/config";
import useAuthContext from "./useAuthContext";

const useLogin = () => {
    const [isCancelled, setIsCancelled]=useState(false)
    const [error, setError]=useState(null);
    const [isPending, setIsPending]=useState(false);
    const {dispatch} = useAuthContext();

    const login = async (email,password)=>{
        setError(null)
        setIsPending(true)

         // sign out the user try and catch error function 
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password);

            //dispatch logout action
            dispatch({type: 'LOGIN', payload:res.user});

            //update the state
            if(!isCancelled){
                setError(null);
                setIsPending(false);
            }
        }
        catch(err){
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return ()=>setIsCancelled(true)
    }, []);

    return ({login, isPending,error });

    
};

export default useLogin;