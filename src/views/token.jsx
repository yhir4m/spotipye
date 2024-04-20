import React, { useEffect, useState, useContext, createContext } from "react";
import ChartPie from "../components/pie/pie";
import { fetchData } from "../utils/callToken";
import axios from "axios";

import ArtistsComponent from "../components/artists/artists";
import SimilarArtists from "../components/similar-artists/similarArtists";

export const ArtistContext = createContext(undefined);


export default function Token() {
  const [actualArtist, setActualArtist] = useState("aaa")
  // State para guardar el access_token
  useEffect(() => {
    const fetchToken = async () => {
      try {
        // Llamar a tu función fetchData() para obtener el access_token
        const token = await fetchData();
        console.log(token)
      } catch (error) {
        console.error("Error al obtener el token:", error);
      }
    };
    fetchToken();
  }, []);

  return (
    <>
      <ArtistContext.Provider value ={{actualArtist,setActualArtist} }>
        <SimilarArtists></SimilarArtists>

        <ArtistsComponent></ArtistsComponent>
        {/* <ChartPie /> */}
      </ArtistContext.Provider>
    </>
  );
}
