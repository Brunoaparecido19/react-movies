import React, { useEffect, useState } from "react";
import Tmbd from "./Tmbd";
import MovieRow from "./componets/List/MovieRow";
import "./Style/App.css";
import FeaturedMovie from "./componets/FeaturedMovie/FeaturedMovie";
import Header from "./componets/Header/Header";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredDate, setFeaturedDate] = useState();
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmbd.getHomeList();
      setMovieList(list);
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmbd.getMovieInfo(chosen.id, "tv");
      setFeaturedDate(chosenInfo);
      console.log(originals);
      // console.log(randomChosen);
      // console.log(chosen);
      console.log(chosenInfo);
    };
    loadAll();
  }, []);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  // console.log(movieList);
  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredDate && <FeaturedMovie item={featuredDate} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            alt=""
          />
        </div>
      )}
    </div>
  );
};
