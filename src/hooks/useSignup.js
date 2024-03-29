import { useState, useEffect} from 'react';
import { projectAuth } from '../firebase/config';
import useAuthContext from './useAuthContext';


const useSignup = () => {
    const [isCancelled, setIsCancelled]=useState(false)
    const [error, setError]=useState(null);
    const [isPending, setIsPending]=useState(false);
    const {dispatch} = useAuthContext();

    const signup = async(email, password, displayName)=>{
        setError(null)
        setIsPending(true)

        try{
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        
        if(!res){
            throw new Error('Not able to sign up')
        }
        // add name to user
        await res.user.updateProfile({displayName})
        //dispatch login action
        dispatch({type: 'LOGIN', payload: res.user})

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

    return (
            {error, isPending, signup}
    );
};

export default useSignup;