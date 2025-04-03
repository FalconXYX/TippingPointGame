//import React, { useEffect, useState, useCallback } from "react";
import styles from "./infoCard.module.css";
import React from "react";
import FrontActivistCard from "../../assets/images/Activist Card Front.png";
import FrontAnarchistCard from "../../assets/images/Anarchist Card Front.png";
import FrontTycoonCard from "../../assets/images/Tycoon Card Front.png";
import TycoonJson from "../../assets/cards/tycoon.json";
import AnarchistJson from "../../assets/cards/anarchist.json";
import ActivistJson from "../../assets/cards/activist.json";
export interface InfoCardProps {
  deck: string;
  cardIndex: number;
  addInfo: boolean;
}
interface card {
  name: string;
  index: number;
  description: string;
  type: string;
  target?: string;
  effect: number;
  cost: number;
}
const InfoCard: React.FC<InfoCardProps> = ({ deck, cardIndex, addInfo }) => {
  const LoadData = (cardIndex: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let file: { [key: string]: any };
    if (deck === "Activist") {
      file = ActivistJson;
    } else if (deck === "Anarchist") {
      file = AnarchistJson;
    } else {
      file = TycoonJson;
    }
    const card: card = file["card" + cardIndex];
    return card;
  };
  const GetEffect = (c: card) => {
    let outp: string;
    if (c.type == "i") {
      outp = "Gain " + c.effect + " Influence";
    } else if (c.type == "s") {
      outp = "Change Stability by " + c.effect;
    } else {
      outp = "Reduce opponent influence by " + c.effect;
    }

    return outp;
  };

  const GetCard = (deck: string) => {
    if (deck == "Activist") {
      return FrontActivistCard;
    } else if (deck == "Anarchist") {
      return FrontAnarchistCard;
    } else if (deck == "Tycoon") {
      return FrontTycoonCard;
    }
  };
  const getTextColor = (deck: string) => {
    if (deck == "Activist") {
      return styles.grayText;
    } else if (deck == "Anarchist") {
      return styles.whiteText;
    } else if (deck == "Tycoon") {
      return styles.whiteText;
    }
  };

  return (
    <section className={styles.container}>
      <a>
        <div className={styles.card}>
          <img
            src={GetCard(deck)}
            alt="Card Image"
            className={styles.cardImg}
          />
          <div className={styles.cardContent + " " + getTextColor(deck)}>
            {addInfo && (
              <>
                <strong> {LoadData(cardIndex).name}: </strong>
                {LoadData(cardIndex).description}
                <br /> <br />
                Cost: {LoadData(cardIndex).cost} Influence
                <br />
                {GetEffect(LoadData(cardIndex))}
              </>
            )}
          </div>
        </div>
      </a>
    </section>
  );
};

export default InfoCard;
