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

    getTopGenres: async function(accessToken,limit){
        
        const url = `https://api.spotify.com/v1/me/top/artists?limit=${limit}`
        const config = {
            headers: {
            'Authorization': `Bearer ${accessToken}`
            }
        };


        try{
            const res = await axios.get(url,config);
            console.log(res);
            let genres = [];
            res.data.items.forEach(artist =>{
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
            console.log(arrayContador)
            arrayContador.sort((a, b) => b[1] - a[1]);
            console.log(genres,arrayContador);
            console.log(contador);
            if(arrayContador.length <= 10) return arrayContador;
            return arrayContador.slice(0,10);
        }catch(err){
            throw err
        }
    },

    getRelatedArtists: async function(accessToken,id,limit = 10){
        const url = `https://api.spotify.com/v1/artists/${id}/related-artists?limit=${limit}`;
        const config = {
            headers: {
            'Authorization': `Bearer ${accessToken}`
            }
        };
        console.log(accessToken)
        console.log(id)

        try{
            const res = await axios.get(url,config);
            console.log(res);
            return res;
        }catch(err){
            throw "error en la solicitud" + err;
        }
    }
}

export default artistsFunction;