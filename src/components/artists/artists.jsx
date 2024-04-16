import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../views/token";
import artistsFunction from "../../utils/artists/artistsFunctions";
import "./artists.scss";
import ArtistModel from "../artis-model/artist-model";


export default function ArtistsComponent() {
  const [artists, setArtists] = useState(undefined)

  useEffect(() => {
    const fetchTopArtist = async () => {
      const access_token = localStorage.getItem("access_token")
      const topArtist = await artistsFunction.getTopArtists(access_token, 10);
      console.log(topArtist.items);
      setArtists(topArtist.items);
    };
    fetchTopArtist();
    
  }, []); 

  return (
<section className="artists">
  <section className="top_artists-container">
    {artists && artists.length > 0 && (
      
      <div className="card" id="card" >
        <img src={artists[0].images[0].url} alt="" id="card-img"/>
        <span id="card-span">{artists[0].name}</span>
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
  </section>
</section>

  );
}
