import React, { useEffect, useState } from "react";
import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
// import { movies } from "../../../Data/Data";
import { movieInstance } from "../../../Utility/movieInstance";
import requests from "../../../Utility/requestUrls";

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netflixRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        docRes,
      ] = await Promise.all([
        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchNetflixOriginals),
        movieInstance.get(requests.fetchTopRatedMovies),
        movieInstance.get(requests.fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchHorrorMovies),
        movieInstance.get(requests.fetchRomanceMovies),
        movieInstance.get(requests.fetchDocumentaries),
      ]);

      setMovies({
        trending: trendingRes.data.results,
        netflixOriginals: netflixRes.data.results,
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: docRes.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <SlideShow
        className={styles.displayGap}
        title="Netflix Trending"
        movie={movies.trending}
      />
      <SlideShow title="Popular on Netflix" movie={movies.netflixOriginals} />

      <SlideShow title="Action" movie={movies.action} />
      <SlideShow title="Top Rated" movie={movies.topRated} />
      <SlideShow title="Comedy Movies" movie={movies.comedy} />
      <SlideShow title="Horror Movies" movie={movies.horror} />
      <SlideShow title="Romance Movies" movie={movies.romance} />
      <SlideShow title="Documentaries" movie={movies.documentaries} />
    </div>
  );
}

export default DisplayRow;
