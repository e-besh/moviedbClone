import React from "react";
import styles from "./Movie.module.css";
import { movieInstance } from "../../../Utility/movieInstance";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdown } from "react-icons/io";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
  10759: "Action & Adventure",
  10762: "Kids",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
};
function MovieCard({ movie }) {
  const title = movie?.title || movie?.name || "Untitled";

  const mediaType =
    movie?.media_type === "tv" || movie?.name ? "TV Show" : "Movie";

  const genres =
    movie?.genre_ids
      ?.map((id) => GENRE_MAP[id])
      .filter(Boolean)
      .slice(0, 3) || [];

  const image = movie?.poster_path
    ? `${IMAGE_BASE}${movie?.poster_path}`
    : "/placeholder.jpg";
  return (
    <div>
      <div className={styles.cardContainer}>
        {/* Main Movie Poster */}
        <img className={styles.poster} src={image} alt={title} />
        {/* hover */}
        <div className={styles.hoverCard}>
          <img
            className={styles.hoverImage}
            src={`${IMAGE_BASE}${movie?.poster_path}`}
            alt="hover image"
          />
          {/* badge */}
          <div className={styles.badge}>Recently added</div>

          {/* Movie Title */}
          <h3 className={styles.cardTitle}>{title}</h3>

          {/* Button row */}
          <div className={styles.buttonRow}>
            <FaCirclePlay className={styles.circleButton} size={35} />
            <BsPlusCircle
              className={`${styles.circleButton} ${styles.plusButton}`}
              size={35}
            />
            <GoCheckCircleFill className={styles.circleButton} size={35} />
            <IoIosArrowDropdown
              className={`${styles.circleButton} ${styles.circleButtonSmall}`}
              size={35}
            />
          </div>
          {/* meta data */}
          <div className={styles.metaRow}>
            <span className={styles.tag}>
              {movie?.adult ? "18+" : "U/A 16+"}
            </span>

            <span className={styles.tag}>{mediaType}</span>
            <span className={styles.tag}>HD</span>
          </div>
          {/* genres */}
          <div className={styles.genres}>
            {genres.map((g, index) => {
              return (
                <span key={index}>
                  {g}
                  {index < genres.length - 1 && (
                    <span className={styles.dot}> • </span>
                  )}
                </span>
              );
            })}
          </div>

          {/* Overview */}
          {movie?.overview && (
            <p className={styles.overview}>{movie.overview}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
