import React from "react";
import ChartPie from "../../../components/pie/pie";

import "./topGenres.scss";

export default function GenresComponent(){

    return(
        <section className="top-genres">
            <h2>top genres</h2>            
            <ChartPie></ChartPie>
        </section>
    )
}