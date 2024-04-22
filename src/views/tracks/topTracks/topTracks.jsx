import React, { useContext, createContext, useEffect, useState } from "react";
import tracksFunction from "../../../utils/Tracks/tracksFunctions";

import TracksCard from "../tracksCard/tracksCard";
import TracksList from "../tracksList/tracksList";

import { timeFormat } from "../tracksList/timeFormat";
import "./topTracks.scss";

export const TracksContext = createContext();

export default function TracksComponent() {
  const [tracks, setTracks] = useState(undefined);
  const [actualTrack, setActualTrack] = useState(undefined);

  useEffect(() => {
    const fetchTopTracks = async () => {
      const token = localStorage.getItem("access_token");
      const topTracks = await tracksFunction.getTopTracks(token);
      console.log(topTracks);
      setTracks(topTracks.items);
      setActualTrack(topTracks.items[0]);
    };
    fetchTopTracks();
  }, []);

  return (
    <TracksContext.Provider
      value={{ tracks, setTracks, actualTrack, setActualTrack }}
    >
      <h2>Top Tracks</h2>
      {console.log(tracks)}
      <section className="tracks">
        {tracks && <TracksCard track={actualTrack}></TracksCard>}
        {tracks &&
          tracks.map((track) => {
            track.duration = timeFormat(track.duration_ms);
            return <TracksList key={track.id} track={track}></TracksList>;
          })}
      </section>
    </TracksContext.Provider>
  );
}
