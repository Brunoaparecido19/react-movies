import React from "react";
import "./Style/MovieRow.css";

export default ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="movieRow-listarea">
          {items.results.length > 0 && items.results.map((item,key) =>(
             <img src={`https://api.themoviedb.org/3/collection/${item.poster_path}/images?api_key=b8e73380ce5d3ad93b45bb5fd6ff74bc&language=pt-BR`} alt="" />
          ))}
      </div>
    </div>
  );
};
