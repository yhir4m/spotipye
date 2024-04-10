import axios from 'axios';

export async function check_token(token){ 
    try{
      let url = "https://api.spotify.com/v1/me"
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  
      const response = await axios.get(url, config);
      console.log(response)
      if(response.status == 200) return true;
      return false;
    }catch(err){
      return false
    }

    
}


export const getAlbum = async (albumId, accessToken) => {
  const url = `https://api.spotify.com/v1/albums/${albumId}`;

  const config = {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  };

  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el álbum:', error);
    throw error; // Re-lanza el error para que el componente que llama a getAlbum pueda manejarlo
  }
};

export const getProfile = async(accessToken)=>{
    console.log(accessToken)
    const url = 'https://api.spotify.com/v1/me'
    
    const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
    };
    
    try{
        const res = await axios.get(url,config);
        console.log(res.data);
        return res.data;
    } catch(err){
        console.log("error al solicitar el perfil", err);
        throw err;
    }
};
