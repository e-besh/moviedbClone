import { useEffect, useState } from "react";
// import logoImage from "../../../../../Resource/ImagesForInitialUse/image/logo.png";
import styles from "./Banner.module.css";
import { Play, Info } from "lucide-react";
import { movieInstance } from "../../../Utility/movieInstance";
import requests from "../../../Utility/requestUrls";
// import {FaBeer} from "react-icons/fa";

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";
function Banner() {
  const [bannerImage, setBannerImage] = useState({});
  useEffect(() => {
    async function fetchBannerImage() {
      const request = await movieInstance.get(requests.fetchNetflixOriginals);
      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    }
    fetchBannerImage();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}")`,
      }}
    >
      <div className={styles.content}>
        <div className={styles.bannerImg}>
          {/* <img className={styles.logoImg} src={logoImage} alt="Netflix Logo" /> */}
          {/* FAKE LOGO */}
          <div className={styles.logo}>
            <span className={styles.logoIcon}>▶</span>
            <span className={styles.logoText}>Common</span>
          </div>
        </div>
        <h1 className={styles.title}>{bannerImage?.original_name}</h1>
        <h2 className={styles.description}>
          {truncate(bannerImage?.overview, 60)}
        </h2>
        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${styles.myListButton}`}>
            <Play size={30} />
            {/* < FaBeer size={30}/> */}
            Play
          </button>
          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
        {/* fading */}
        <div className={styles.fadeButton}></div>
      </div>
    </div>
  );
}

export default Banner;
