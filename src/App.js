import React, { useEffect, useState } from "react";
import Tmbd from "./Tmbd";
import MovieRow from "./componets/List/MovieRow";
import "./componets/Style/app.css";
import FeaturedMovie from "./componets/FeaturedMovie/FeaturedMovie";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredDate, setFeaturedDate] = useState();
  useEffect(() => {
    const loadAll = async () => {
      var list = await Tmbd.getHomeList();
      setMovieList(list);
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmbd.getMovieInfo(chosen.id, "tv");
      setFeaturedDate(chosenInfo);
      // console.log(originals);
      // console.log(randomChosen);
      // console.log(chosen);
      console.log(chosenInfo);
    };
    loadAll();
  }, []);
  // console.log(movieList);
  return (
    <div className="page">
      {featuredDate && <FeaturedMovie item={featuredDate} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
