import React, { useEffect,useState } from "react";
import { generateRandomString, sha256, base64encode, getCode } from '../utils/login';


export default function Home() {
    const [codeChallenge, setCodeChallenge] = useState("");
    
    const handleClick = async () => {
        const codeVerifier  = generateRandomString(64); 
        const hashed = await sha256(codeVerifier);
        const codeChallenge = base64encode(hashed);
        setCodeChallenge(codeChallenge);
        getCode(codeVerifier,codeChallenge)
    };

    useEffect(()=>{
      //if(localStorage.getItem("access_token") != "") handleClick();
    },[])
    
      return <button onClick={handleClick}>Login</button>;
    }
    