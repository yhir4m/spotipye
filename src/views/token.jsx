import React, { useEffect, useState, useContext, createContext } from "react";
import ChartPie from "../components/pie/pie";
import { fetchData } from "../utils/callToken";
import axios from "axios";

import ArtistsComponent from "../components/artists/artists";
export const ThemeContext = createContext(null);

export default function Token() {
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
      <ThemeContext.Provider>
        {/* Renderizar tu componente ChartPie */}
        <h1></h1>
        <ArtistsComponent></ArtistsComponent>
        {/* <ChartPie /> */}
      </ThemeContext.Provider>
    </>
  );
}
