import { useState,useEffect } from "react";
import { projectAuth } from "../firebase/config";
import useAuthContext from "./useAuthContext";

const useLogout = () => {
    const [isCancelled, setIsCancelled]=useState(true)
    const [error, setError]=useState(null);
    const [isPending, setIsPending]=useState(false);
    const {dispatch} = useAuthContext();

    const logout = async ()=>{
        setError(null)
        setIsPending(true)

         // sign out the user try and catch error function 
        try {
            await projectAuth.signOut();

            //dispatch logout action
            dispatch({type: 'LOGOUT'});

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

    return ({logout, isPending,error });

    
};

export default useLogout;