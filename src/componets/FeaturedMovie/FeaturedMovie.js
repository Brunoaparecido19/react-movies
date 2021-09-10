import React from "react";
import "../Style/featuredMovie.css";

export default ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
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
          <div className="featured_name">{item.original_name}</div>
          <div className="featured_info">
            <div className="featured_points">{item.vote_average}</div>
            <div className="featured-year">{firstDate.getFullYear()}</div>
            <div className="featured-seasons">{item.number_of_seasons} &nbsp; Temporadas
            </div>
          </div>
          <div className="featured-description">{item.overview} </div>
          <div className="featured-buttons"></div>
          <div className="featured-genres">
            <strong>Genres: &nbsp;</strong> {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  );
};
