import React from "react";
import styles from "./Movie.module.css";
import { movieInstance } from "../../../Utility/movieInstance";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdown } from "react-icons/io";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
function MovieCard({movie}) {
  let genres = ['Adventure','Action','Thriller']
  return (
    <div>
      <div className={styles.cardContainer}>
        <img
          className={styles.poster}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt="poster image"
        />
        {/* hover */}
        <div className={styles.hoverCard}>
          <img
            className={styles.hoverImage}
            src={`${IMAGE_BASE}${movie?.poster_path}`}
            alt="hover image"
          />
          {/* badge */}
          <div className={styles.badge}>Recently added</div>
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
            <span className={styles.tag}>U/A 16+</span>
            <span className={styles.tag}>Movie</span>
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
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
