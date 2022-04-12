import React from "react";
import styles from "./footer.module.css";

const Footer = () => {

  const who = "https://www.who.int/"
  const mohfw = "https://www.mohfw.gov.in/"
  const icmr = "https://www.icmr.gov.in/"

  return (
    <div className={styles.footer}>
      <p className={styles.links}>Important Links</p>
     <p className={styles.links}><a href={who} target="_blank" rel="noopener noreferrer">World Health Organisation</a></p>
     <p className={styles.links}><a href={mohfw} target="_blank" rel="noopener noreferrer">Ministry of Health and Family Welfare</a></p>
     <p className={styles.links}><a href={icmr} target="_blank" rel="noopener noreferrer">Indian Council of Medical Research</a></p>
    </div>
  );
};

export default Footer;
