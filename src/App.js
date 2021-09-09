import React, { useEffect, useState } from "react";
import Tmbd from "./Tmbd";
import MovieRow from "./componets/List/MovieRow";
import './componets/Style/app.css'

export default () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      var list = await Tmbd.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);
  console.log(movieList);
  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
