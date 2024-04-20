import React from "react";
import { ArtistContext } from "../../views/token";
import { useContext } from "react";

export default function SimilarArtists(){

    const {actualArtist,setActualArtist} = useContext(ArtistContext)
    console.log(actualArtist)
    return(
        <>
            <h1>a</h1>
        </>
    )
}