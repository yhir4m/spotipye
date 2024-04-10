import { getAlbum,getProfile,check_token } from "../utils/request";
import { getToken, getRefreshToken } from "../utils/login";
import tracksFunctions from "./Tracks/tracksFunctions";
import artistsFunction from "./artists/artistsFunctions";

export const fetchData = async () => {
    try {
      // Obtener el nuevo token
      let newToken = localStorage.getItem("access_token");
      const validToken = await check_token(newToken)

      console.log(validToken)
      if (!validToken){
        newToken = await getToken();
        console.log('Nuevo token de acceso:', newToken);
        localStorage.setItem("access_token", newToken);
      }
      // Guardar el nuevo token en localStorage
      localStorage.setItem("access_token", newToken);

      // Obtener el álbum y el perfil usando el nuevo token
      const album = await getAlbum("4aawyAB9vmqN3uQ7FjRGTy", newToken);
      console.log('Álbum:', album);

      const profile = await getProfile(newToken);
      console.log('Perfil:', profile);

    } catch (error) {
      console.error('Error al obtener el token en el componente Token:', error);
    }
  };


  export const getTopGenres = async () => {
    try {

      let newToken = localStorage.getItem("access_token");


      const artistsId = await artistsFunction.getTopArtistsIds(newToken,50)


      const topGenres = await artistsFunction.getTopGenres(newToken,artistsId)
      console.log(topGenres)
      return topGenres;
    } catch (error) {
      console.error('Error al obtener el token en el componente Token:', error);
    }
  };