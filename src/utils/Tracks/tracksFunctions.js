import axios from "axios";
const tracksFunction = {

    
    getTopTracks : async function(accessToken,limit = 20){
        console.log(accessToken)
        const url = `https://api.spotify.com/v1/me/top/tracks?limit=${limit}`
        
        const config = {
            headers: {
            'Authorization': `Bearer ${accessToken}`
            }
        };
        
        try{
            const res = await axios.get(url,config);
            return res.data;
        } catch(err){
            console.log("error al solicitar el perfil", err);
            throw err;
        }
    },

    getTopTracksIds : async function(accessToken,limit = 20){
        console.log(accessToken)
        const url = `https://api.spotify.com/v1/me/top/tracks?limit=${limit}`
        
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
        
        const url = `https://api.spotify.com/v1/audio-features?ids=${ids}`
        console.log(ids)
        const config = {
            headers: {
            'Authorization': `Bearer ${accessToken}`
            }
        };

        try{
            const res = await axios.get(url,config)

            console.log(res)
        }catch(err){
            throw err
        }
    }
}

export default tracksFunction;