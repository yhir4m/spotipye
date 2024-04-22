import React from "react";

import "./tracksCard.scss";
export default function TracksCard(track) {
    track = track.track;
    console.log(track);
  return (
    <section className="trackCard-container" >
      <div className="tracksCard-image">
        <img
          src={track.album.images[2].url}
          alt=""
        />
      </div>
      <div className="trackCard-body">
        <span className="track-name">{track.name} </span>
        <span>{track.artists[0].name} </span>
        <div className="trackCard-bar">
          <span>0:00</span>
          <div></div>
          <span>{track.duration} </span>
        </div>
        <div className="trackCard-buttons">
          <button class="trackCard-back">
            <svg
              fill="none"
              height="12"
              viewBox="0 0 20 12"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <clipPath id="a">
                <path d="m0 0h20v12h-20z"></path>
              </clipPath>
              <g>
                <path
                  d="m17 1c0-.265216-.1054-.51957-.2929-.707107-.1875-.187536-.4419-.292893-.7071-.292893h-8v2h7v5h-3l3.969 5 4.031-5h-3zm-14 10c0 .2652.10536.5196.29289.7071.18754.1875.44189.2929.70711.2929h8v-2h-7v-5h3l-4-5-4 5h3z"
                  fill="#fff"
                ></path>
              </g>
            </svg>
          </button>

          <button className="trackCard-back">
            <svg
              width="23"
              height="16"
              viewBox="0 0 23 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 8V0L0 8L11.5 16V8ZM23 0L11.5 8L23 16V0Z"
                fill="#fff"
              ></path>
            </svg>
          </button>

          <button className="trackCard-play">
            <svg
              fill="none"
              height="22"
              viewBox="0 0 18 22"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 0v22l18-11z" fill="#000"></path>
            </svg>
          </button>

          <button className="trackCard-forward">
            <svg
              width="23"
              height="16"
              viewBox="0 0 23 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 8V0L23 8L11.5 16V8ZM0 0L11.5 8L0 16V0Z"
                fill="#fff"
              ></path>
            </svg>
          </button>

          <button class="card__btn">
            <svg
              fill="#fff"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <clipPath id="a">
                <path d="m0 .5h20v19h-20z"></path>
              </clipPath>
              <g fill="#fff">
                <path d="m15 14.5h-1.559l-9.7-10.673c-.09376-.10305-.20802-.18536-.33545-.24168-.12744-.05631-.26523-.08537-.40455-.08532h-3.001v2h2.559l4.09 4.5-4.09 4.501h-2.559v2h3.001c.13932 0 .27711-.029.40455-.0853.12743-.0563.24169-.1387.33545-.2417l4.259-4.687 4.259 4.686c.0938.103.208.1854.3355.2417.1274.0563.2652.0853.4045.0853h2.001v3l5-4-5-4z"></path>
                <path d="m13.4406 5.5h1.559v3l5-3.938-5-4.062v3h-2.001c-.1393-.00005-.2771.02901-.4045.08532-.1275.05632-.2417.13863-.3355.24168l-3.36798 3.707 1.47998 1.346z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
