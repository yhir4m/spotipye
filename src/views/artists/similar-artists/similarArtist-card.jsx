import React, { useEffect, useState } from "react";
import { ArtistContext } from "../artists";
import { useContext } from "react";

import artistsFunction from "../../../utils/artists/artistsFunctions";
import "./similarArtist-card.scss"

export default function SimilarArtistsCard(artist){
    
    

    return(
        <>
            <section class="cardContainer">
                <div class="card-image">
                    <img src={artist.artist.images[0].url} alt="" />
                    
                </div>
                <div className="card-body">
                    <span>{artist.artist.name} </span>
                    <span className="similar_artist-genres">{artist.artist.genres.join(",")} </span>
                </div>
            </section>
        </>
    )
}