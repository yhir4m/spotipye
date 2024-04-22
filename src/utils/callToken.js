import { getProfile,check_token } from "../utils/request";
import { getToken, getRefreshToken } from "../utils/login";
import tracksFunctions from "./Tracks/tracksFunctions";
import artistsFunction from "./artists/artistsFunctions";

export const fetchData = async () => {
    try {
      // Obtener el nuevo token
      let newToken = localStorage.getItem("access_token");
      const validToken = await check_token(newToken)
      let expirationTime = localStorage.getItem("expirationTime")
      if (!validToken){
        newToken = await getToken();
        console.log('Nuevo token de acceso:', newToken);
        localStorage.setItem("access_token", newToken);
        expirationTime = Date.now()+3600000 ; 
        localStorage.setItem("expirationTime",expirationTime);
      }
      // Guardar el nuevo token en localStorage
      localStorage.setItem("access_token", newToken);

      const profile = await getProfile(newToken);
      console.log('Perfil:', profile);
      return {newToken,expirationTime}

    } catch (error) {
      console.error('Error al obtener el token en el componente Token:', error);
    }
  };


  export const getTopGenres = async () => {
    try {

      let newToken = localStorage.getItem("access_token");
      const limit = 50;
      const topGenres = await artistsFunction.getTopGenres(newToken,limit);
      console.log(topGenres)
      return topGenres;
    } catch (error) {
      console.error('Error al obtener el token en el componente Token:', error);
    }
  };