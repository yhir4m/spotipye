import { useEffect,useState } from "react";
import React from "react";
import ChartPie from "../components/pie";
import { fetchData } from "../utils/callToken";
import axios from "axios";

export default function Token(){
    const [token,setToken] = useState("");

    useEffect(() => {
        fetchData();
      }, []);
      

    


    return( 
        <>
        <h1></h1>
        <ChartPie></ChartPie>
        </>
        
    )
}