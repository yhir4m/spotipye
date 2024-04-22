import React, { useContext, useState, useEffect } from "react";
import { ArtistContext } from "../artists";
import SimilarArtistsCard from "./similarArtist-card";
import artistsFunction from "../../../utils/artists/artistsFunctions";

import "./similarArtists.scss"

export default function SimilarArtists() {
    const { actualArtist, setActualArtist } = useContext(ArtistContext);
    const token = localStorage.getItem("access_token");

    const [similarArtists, setSimilarArtists] = useState(undefined);

    useEffect(() => {
        const fetchSimilar = async () => {
            const limit = 10;
            const ranNums = [Math.floor(Math.random()*(limit-7)),Math.floor((Math.random()*(limit-7))+4),Math.floor(Math.random()*(limit-7))+7];

            let related = await artistsFunction.getRelatedArtists(token, actualArtist.id, limit);
            related = related.data.artists.splice(0,limit);

            console.log([related[ranNums[0]],related[ranNums[1]],related[ranNums[2]]])
            setSimilarArtists([related[ranNums[0]],related[ranNums[1]],related[ranNums[2]]]);
        };
        fetchSimilar();
    }, []);


    return (
        <>
            {similarArtists && (
        
                <section className="similar_artists-container">
                        {console.log(similarArtists)}
                        <SimilarArtistsCard artist = {similarArtists[0]} />
                        <SimilarArtistsCard artist = {similarArtists[1]} />
                        <SimilarArtistsCard artist = {similarArtists[2]} />

                </section>
            )}
        </>
    );
}
