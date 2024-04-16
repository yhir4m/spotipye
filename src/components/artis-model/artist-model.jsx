import React,{useContext} from "react";
import "./artist-model.scss"

import {handleClick} from "./handleClick";
import { artistContext } from "../../App";
import { defineFontSize } from "./fontSize";

export default function ArtistModel(artist){

  const { animationFinished, setAnimationFinished} = useContext(artistContext);
    return(
        <article className="top_artists" key={artist.index} onClick={()=> handleClick(artist,animationFinished,setAnimationFinished)}>
          <div className="top_artists-element">
            <div className="tier-container">
                <span className="top_artist-tier">{artist.index +1} </span>
                <img src={artist.artist.images[2].url} />

            </div>
              <span className="top_artist-name" id={"top_artist-name" + (artist.index +1)} onLoad={defineFontSize("top_artist-name"+(artist.index +1), artist.artist.name ) }>{artist.artist.name} </span>
              
          </div>
        </article>
    )
}