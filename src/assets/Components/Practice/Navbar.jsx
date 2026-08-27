import React, { useState } from "react";
// import logo from "../../../../../Resource/ImagesForInitialUse/image/logo.png";
import styles from "./Navbar.module.css"
export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.box}>1</div>
        <div className={styles.box}>2</div>
        <div className={styles.box}>3</div>
        <div className={styles.box}>4</div>
        <div className={styles.box}>5</div>
        <div className={styles.box}>6</div>
        <div className={styles.box}>8</div>
      </div>
      <div className={styles.gridRightSection}>
        <div>Home</div>
        <div>ABout</div>
      </div>
    </>
  );
}
