import React from "react";
import "../Style/MovieRow.css";

export default ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow-listarea">
        <div className="movieRow-list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow-item">
                <img
                  src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
