import React, { useEffect, useState } from "react";
import "../FeaturedMovie/style/FeaturedMovie.css";

export default ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  let description = item.overview;
  if (description.length > 300) {
    description = description.substring(0, 200) + "...";
  }
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: ` url(https://www.themoviedb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">{item.original_name}</div>
          <div className="featured-info">
            <div className="featured-points">{item.vote_average}</div>
            <div className="featured-year">{firstDate.getFullYear()}</div>
            <div className="featured-seasons">
              {item.number_of_seasons} Temporada{""}
              {item.number_of_seasons != 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured-description">{description} </div>
          <div className="featured-buttons">
            <a
              href={`/tv/${item.id}/watch/providers/`}
              className="featured-watchButton"
            >
              ►&nbsp;Assita
            </a>
            <a href={`/list/add/${item.id}`} className="featured-addButton">
              ✚&nbsp;Minha Lista
            </a>
          </div>
          <div className="featured-genres">
            <strong>Genres: &nbsp;</strong> {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};
