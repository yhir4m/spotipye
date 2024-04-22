import React, { useEffect, useState, useContext, createContext } from "react";
import ChartPie from "../components/pie/pie";
import { fetchData } from "../utils/callToken";
import axios from "axios";

import ArtistsComponent from "./artists/artists";
import SimilarArtists from "./artists/similar-artists/similarArtists";
import TracksComponent from "./tracks/topTracks/topTracks";
import GenresComponent from "./genres/topGenres/topGenres";

import { getRefreshToken } from "../utils/login";

export default function Token() {

  const [token,setToken] = useState(undefined);
  const [expirationTime, setExpirationTime] = useState(undefined);


  useEffect(() => {
    const fetchToken = async () => {
      try {
        // Llamar a tu función fetchData() para obtener el access_token
        const {token,expirationTime} = await fetchData();
        setToken(token);
        
      } catch (error) {
        console.error("Error al obtener el token:", error);
      }
    };
    fetchToken();
  }, [token]);

  setInterval(() => {
    console.log("aaaa")
    const expireTime = localStorage.getItem("expirationTime");
    setExpirationTime(Date.now())
  
         if(expirationTime >= expireTime){
           getRefreshToken()
         }
        
    },3600000 );

  // useEffect(() => {
    
  //   
  // }, []);

  return (
    <>
    <GenresComponent/>
      {token && (  
        /* <ArtistsComponent></ArtistsComponent> */
        //<ArtistsComponent></ArtistsComponent>
        <TracksComponent/>
        /* <ChartPie /> */
      )}


    </>
  );
}
