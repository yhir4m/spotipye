import React, { useContext, useState, useEffect } from "react";
import { timeFormat } from "./timeFormat";

import { TracksContext } from "../topTracks/topTracks";

import "./tracksList.scss";
export default function TracksList(track) {
  const { setActualTrack } = useContext(TracksContext);

  track = track.track;
  console.log(track);
  return (
    <div className="spotify-list" onClick={() => setActualTrack(track)}>
      <li key={track.id} className="spotify-list-item">
        <img
          src={track.album.images[2].url}
          alt={track.name}
          className="spotify-list-item-image"
        />
        <div className="spotify-list-item-details">
          <h3 className="spotify-list-item-name">{track.name}</h3>
          <p className="spotify-list-item-artist">{track.artists[0].name}</p>
          <p className="spotify-list-item-duration">{track.duration}</p>
        </div>
      </li>
    </div>
  );
}
