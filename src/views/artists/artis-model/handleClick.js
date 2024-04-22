import React,{ useContext } from 'react';
import { ArtistContext } from '../artists';

const getRandom  = (max,min)=> Math.floor(Math.random()*(max-min))+min

export function handleClick(artist, animationFinished,setAnimationFinished,setActualArtist,setOnSimilar) {
  console.log("aña")
  setOnSimilar(false)
  if (animationFinished) {
    
    try{

    setAnimationFinished(false);
    artist = artist.artist;
    setActualArtist(artist);
    
    
    document.getElementById('card').classList.toggle('card-animation');
 
    setTimeout(() =>{
        setAnimationFinished(true)
        document.getElementById('card').classList.toggle('card-animation');
    }, 800);
    }catch(err){
      console.log(err)
    }
  }
}
