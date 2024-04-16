import React,{ useContext } from 'react';
import { artistContext } from '../../App';

const getRandom  = (max,min)=> Math.floor(Math.random()*(max-min))+min

export function handleClick(artist, animationFinished,setAnimationFinished) {
  if (animationFinished) {
    const img = document.getElementById('card-img')
    setAnimationFinished(false);
    artist = artist.artist;

    document.getElementById('card').classList.toggle('card-animation');
    document.getElementById('card-span').innerHTML = artist.name;

    img.src = artist.images[0].url;
    img.style.boxShadow = `15px 13px 5px 4px rgba(${getRandom(255,16)}, ${getRandom(255,16)}, ${getRandom(255,16)}, 0.5)`;

    setTimeout(() =>{
        setAnimationFinished(true)
        document.getElementById('card').classList.toggle('card-animation');
    }, 800);
  }
}
