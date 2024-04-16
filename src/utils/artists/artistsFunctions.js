import axios from "axios";
const artistsFunction = {
    getTopArtists: async function(accessToken, limit = 20) {
      console.log(accessToken);
      const url = `https://api.spotify.com/v1/me/top/artists?limit=${limit}`;
  
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
  
      try {
        const res = await axios.get(url, config);
        return res.data;
      } catch (err) {
        console.log("error al solicitar el perfil", err);
        throw err;
      }
    },
  

  

    getTopArtistsIds : async function(accessToken,limit = 20){
        console.log(accessToken)
        const url = `https://api.spotify.com/v1/me/top/artists?limit=${limit}`
        
        const config = {
            headers: {
            'Authorization': `Bearer ${accessToken}`
            }
        };
        
        try{
            const res = await axios.get(url,config);
            let ids = [];
            console.log(res.data.items);
            
            res.data.items.forEach(track=>{
                ids.push(track.id)
            })
        
                
            console.log(ids)
            return ids;
        } catch(err){
            console.log("error al solicitar el perfil", err);
            throw err;
        }
    },
    getTopGenres: async function(accessToken,ids){
        
        const url = `https://api.spotify.com/v1/artists?ids=${ids}`
        const config = {
            headers: {
            'Authorization': `Bearer ${accessToken}`
            }
        };


        try{
            const res = await axios.get(url,config)
            console.log(res.data.artists)

            let genres = []

            res.data.artists.forEach(artist =>{
                genres.push(artist.genres)
            })
            genres = genres.flat();

            const contador = {};
            genres.forEach(elemento => {
                if (contador[elemento]) {
                contador[elemento] += 1;
                } else {
                contador[elemento] = 1;
                }
            });
            
            const arrayContador = Object.entries(contador);

  // Ordenar el array de pares por el valor (cantidad de repeticiones) de mayor a menor
            arrayContador.sort((a, b) => b[1] - a[1]);

            console.log(genres,arrayContador)
            console.log(contador)
            if(arrayContador.length <= 10) return arrayContador;
            return arrayContador.slice(0,10);
        }catch(err){
            throw err
        }
    }
}

export default artistsFunction;