import { useEffect,useState } from "react";
import React from "react";
import ChartPie from "../components/pie";
import { fetchData, getTopGenres } from "../utils/callToken";
import axios from "axios";

export default function Token(){
 
    useEffect(() => {
        fetchData();
        console.log(getTopGenres());

      }, []);
      

    


    return( 
        <>
        <h1></h1>
        <ChartPie></ChartPie>
        </>
        
    )
}