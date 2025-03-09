import React from "react";
import styles from "./intro.module.css";
import bgImg from "../../assets/images/bg.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const IntroPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.container}>
            <img
                src={bgImg}
                className={styles.bgImg}
                alt="Background Picture"
            />
            <div className={styles.buttonRow}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => navigate("/choose")}
                >
                    <div className={styles.buttonText}>Start</div>
                </Button>
                <Button
                    variant="contained"
                    color="warning"
                    onClick={() => navigate("/instructions")}
                >
                    <div className={styles.buttonText}>Instructions</div>
                </Button>
            </div>
        </section>
    );
};

export default IntroPage;

