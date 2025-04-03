//import React, { useEffect, useState, useCallback } from "react";
import styles from "./stabilityBar.module.css";
import React from "react";
import StablityBarImg from "../../assets/images/StablityBar.png";
import ArrowImg from "../../assets/images/arrow.png";
import InfluenceImg from "../../assets/images/influence.png";
export interface StabilityBarProps {
  stability: number;
  influence: number;
}

const StabilityBar: React.FC<StabilityBarProps> = ({
  stability,
  influence,
}) => {
  const getStability = (stability: number) => {
    if (stability == 50) {
      return 0;
    } else if (stability > 50) {
      return (stability - 50) * 7.25;
    } else if (stability < 50) {
      return Math.abs(stability - 50) * -7.25;
    } else {
      return 0;
    }
  };
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <img
          src={ArrowImg}
          alt=""
          style={{
            display: "flex",
            position: "relative",
            left: `${getStability(stability)}px`,
          }}
        />
        <img src={StablityBarImg} alt="" />
      </div>
      <div className={styles.top}>
        {influence}
        <img src={InfluenceImg} alt="" className={styles.logo} />
      </div>
    </section>
  );
};

export default StabilityBar;
