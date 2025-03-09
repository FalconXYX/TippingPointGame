//import React, { useEffect, useState, useCallback } from "react";
import styles from "./choose.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";
import BackActivistCard from "../../assets/images/Activist Card Back.png";
import FrontActivistCard from "../../assets/images/Activist Card Front.png";
import FrontAnarchistCard from "../../assets/images/Anarchist Card Front.png";
import BackAnarchistCard from "../../assets/images/Anarchist Card Back.png";
import FrontTycoonCard from "../../assets/images/Tycoon Card Front.png";
import BackTycoonCard from "../../assets/images/Tycoon Card Back.png";
import ReactFlipCard from "reactjs-flip-card";

const ChoosePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.container}>
            <div className={styles.cardRow}>
                <ReactFlipCard
                    flipTrigger="onClick"
                    frontComponent={
                        <div className={styles.card}>
                            <img
                                src={BackActivistCard}
                                alt="Card Image"
                                className={styles.cardImg}
                            />
                        </div>
                    }
                    backComponent={
                        <div className={styles.card}>
                            <img
                                src={FrontActivistCard}
                                alt="Card Image"
                                className={styles.cardImg}
                            />
                            <div
                                className={
                                    styles.cardContent + " " + styles.grayText
                                }
                            >
                                <strong> Activists: </strong>
                                Champion environmental balance by striving to
                                maintain high global stability and avert
                                ecological collapse.
                            </div>
                        </div>
                    }
                />
                <ReactFlipCard
                    flipTrigger="onClick"
                    frontComponent={
                        <div className={styles.card}>
                            <img
                                src={BackAnarchistCard}
                                alt="Card Image"
                                className={styles.cardImg}
                            />
                        </div>
                    }
                    backComponent={
                        <div className={styles.card}>
                            <img
                                src={FrontAnarchistCard}
                                alt="Card Image"
                                className={styles.cardImg}
                            />
                            <div className={styles.cardContent}>
                                <strong>Anarchists:</strong> Embrace chaos by
                                driving the world toward apocalyptic instability
                                to expose systemic failures.
                            </div>
                        </div>
                    }
                />
                <ReactFlipCard
                    flipTrigger="onClick"
                    frontComponent={
                        <div className={styles.card}>
                            <img
                                src={BackTycoonCard}
                                alt="Card Image"
                                className={styles.cardImg}
                            />
                        </div>
                    }
                    backComponent={
                        <div className={styles.card}>
                            <img
                                src={FrontTycoonCard}
                                alt="Card Image"
                                className={styles.cardImg}
                            />
                            <div className={styles.cardContent}>
                                <strong>Tycoons:</strong> Exploit precarious
                                conditions by manipulating instability for
                                profit while keeping collapse at bay.
                            </div>
                        </div>
                    }
                />
            </div>

            <div className={styles.menu}>
                <div className={styles.menuText}>
                    <h2>Choose Faction</h2>
                    <p>
                        Click each fractions card above to see more information
                        about it, and then choose the faction you want to play
                        as
                    </p>
                </div>
                <div className={styles.buttonRow}>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => navigate("/game")}
                    >
                        <div className={styles.buttonText}>Activists</div>
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => navigate("/game")}
                    >
                        <div className={styles.buttonText}>Anarchists</div>
                    </Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={() => navigate("/game")}
                    >
                        <div className={styles.buttonText}>Tycoons</div>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ChoosePage;

