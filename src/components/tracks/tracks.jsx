import React, {useEffect,useState} from "react";
import tracksFunction from "../../../Spotipye/src/utils/Tracks/tracksFunctions";

export default function Tracks(){

    const [tracks, setTracks] = useState(undefined)

    useEffect(() => {
      const fetchTopTracks = async () => {
        const access_token = localStorage.getItem("access_token")
        const topTracks = await tracksFunction.getTopTracks(access_token, 10);
        console.log(topTracks.items);
        setArtists(topTracks.items);
      };
      fetchTopTracks();
      
    }, []); 


    return(
        <>
        <h1>a</h1>
        </>
    )
}