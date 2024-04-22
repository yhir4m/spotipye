import React, { useContext, createContext, useEffect, useState } from "react";
import artistsFunction from "../../utils/artists/artistsFunctions";
import "./artists.scss";
import ArtistModel from "./artis-model/artist-model";

import SimilarArtists from "./similar-artists/similarArtists";

export const ArtistContext = createContext(undefined);

export default function ArtistsComponent() {
  const [onSimilar, setOnSimilar] = useState(false);
  const [actualArtist, setActualArtist] = useState(undefined)
  const [animationFinished,setAnimationFinished] = useState(true);

  const [artists, setArtists] = useState(undefined)
  

  useEffect(() => {
    const fetchTopArtist = async () => {
      const access_token = localStorage.getItem("access_token")
      const topArtist = await artistsFunction.getTopArtists(access_token,10);
      console.log(topArtist.items);
      setArtists(topArtist.items);
      setActualArtist(topArtist.items[0])
    };
    fetchTopArtist();
    
  }, []);  

  
  

  return (
    <ArtistContext.Provider value ={{actualArtist,setActualArtist,animationFinished,setAnimationFinished, setOnSimilar} }>
<section className="artists">
  <section className="top_artists-container">
    {artists && artists.length > 0 && (
      
      <div className="card" id="card" >
        {!onSimilar?(
          
          <>
            <div className="card_img-container">
              <img src={actualArtist.images[0].url} alt="" id="card-img"/>
            </div>
            <span id="card-span">{actualArtist.name}</span>
          </>
        ): (
          <div className="card-similar">
            <SimilarArtists></SimilarArtists>
          </div>
        )}
         
        <button className="similar-artist" onClick={()=>onSimilar? setOnSimilar(false): setOnSimilar(true)}>Artistas parecidos</button> 
        
      </div>
    )}
    <div className="artists-items">
      {artists && artists.length > 0 ? (
        artists.map((artist, index) => (
          <ArtistModel artist={artist} index={index} key={index}  />
        ))
      ) : (
        <p>Cargando artistas...</p>
      )}
    </div>
        {/* <ScrollButton></ScrollButton> */}
  </section>
</section>

   </ArtistContext.Provider>
  );
}
