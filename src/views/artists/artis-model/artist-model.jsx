import React,{useContext,useEffect} from "react";
import "./artist-model.scss"

import {handleClick} from "./handleClick";
import { ArtistContext } from "../artists";
import { defineFontSize } from "./fontSize";

export default function ArtistModel(artist){

  const { actualArtist,setActualArtist,animationFinished,setAnimationFinished,setOnSimilar} = useContext(ArtistContext);
  
  useEffect(()=>{
  
    console.log(actualArtist)
  },[]) 
  
    return(
        <article className="top_artists" key={artist.index} onClick={()=> handleClick(artist,animationFinished,setAnimationFinished,setActualArtist,setOnSimilar)}>
          <div className="top_artists-element">
            <div className="tier-container">
                <span className="top_artist-tier">{artist.index +1} </span>
                <img src={artist.artist.images[2].url} />
            </div>
              <span className="top_artist-name" id={"top_artist-name" + (artist.index +1)} >{artist.artist.name} </span>
          </div>
        </article>
    )
}