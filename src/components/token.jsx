import { useEffect,useState } from "react";
import React from "react";
import { getToken } from "../utils/login";
import axios from "axios";
import { getAlbum,getProfile } from "../utils/request";
export default function Token(){
    const [token,setToken] = useState("");

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Obtener el nuevo token
            const newToken = await getToken();
            console.log('Nuevo token de acceso:', newToken);
    
            // Guardar el nuevo token en localStorage
            localStorage.setItem("access_token", newToken);
    
            // Actualizar el estado `token` con el nuevo token
            setToken("aaa");
    
            // Obtener el álbum y el perfil usando el nuevo token
            const album = await getAlbum("4aawyAB9vmqN3uQ7FjRGTy", newToken);
            console.log('Álbum:', album);
    
            const profile = await getProfile(newToken);
            console.log('Perfil:', profile);
            console.log(token)
    
          } catch (error) {
            console.error('Error al obtener el token en el componente Token:', error);
          }
        };
    
        fetchData();
      }, []);
      

    


    return( 
        <h1>a</h1>
    )
}