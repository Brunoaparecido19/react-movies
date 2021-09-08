import React, { useEffect, useState } from "react";
import Tmbd from "./Tmbd";
import MovieRow from "./componets/List/MovieRow";


export default () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      var list = await Tmbd.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);
  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          // <div>{item.title}</div>
          <MovieRow key={key} title={item.title} item={item.items} />
        ))}
      </section>
    </div>
  );
};
