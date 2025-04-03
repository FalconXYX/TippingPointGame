//import React, { useEffect, useState, useCallback } from "react";
import styles from "./win.module.css";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import BackActivistCard from "../../assets/images/Activist Card Back.png";
import FrontActivistCard from "../../assets/images/Activist Card Front.png";
import FrontAnarchistCard from "../../assets/images/Anarchist Card Front.png";
import BackAnarchistCard from "../../assets/images/Anarchist Card Back.png";
import FrontTycoonCard from "../../assets/images/Tycoon Card Front.png";
import BackTycoonCard from "../../assets/images/Tycoon Card Back.png";
import ReactFlipCard from "reactjs-flip-card";

const WinPage: React.FC = () => {
  const location = useLocation();
  const faction = location.state?.faction;
  console.log("Faction: ", faction);
  const navigate = useNavigate();

  let frontimg = FrontActivistCard;
  let backimg = FrontActivistCard;

  if (faction == "Activist") {
    frontimg = FrontActivistCard;
    backimg = BackActivistCard;
  } else if (faction == "Anarchist") {
    frontimg = FrontAnarchistCard;
    backimg = BackAnarchistCard;
  } else if (faction == "Tycoon") {
    frontimg = FrontTycoonCard;
    backimg = BackTycoonCard;
  }
  return (
    <section className={styles.container}>
      <div className={styles.cardRow}>
        <ReactFlipCard
          flipTrigger="onClick"
          frontComponent={
            <div className={styles.card}>
              <img src={backimg} alt="Card Image" className={styles.cardImg} />
            </div>
          }
          backComponent={
            <div className={styles.card}>
              <img src={frontimg} alt="Card Image" className={styles.cardImg} />
              <div className={styles.cardContent + " " + styles.grayText}></div>
            </div>
          }
        />
      </div>

      <div className={styles.menu}>
        <div className={styles.menuText}>
          <h2>The {faction}'s Have Won</h2>
        </div>
        <div className={styles.buttonRow}>
          <Button
            variant="contained"
            color="warning"
            onClick={() => navigate("/", { state: { faction: faction } })}
          >
            <div className={styles.buttonText}>Play Again</div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WinPage;
