import React from "react";
import styles from "./instructions.module.css";
import bgImg from "../../assets/images/bg.png";
import { Button } from "@mui/material";
const InstructionsPage: React.FC = () => {
    return (
        <section className={styles.container}>
            <img
                src={bgImg}
                className={styles.bgImg}
                alt="Background Picture"
            />
            <div className={styles.buttonRow}>
                <Button variant="contained" color="success">
                    <div className={styles.buttonText}>Start</div>
                </Button>
                <Button variant="contained" color="warning">
                    <div className={styles.buttonText}>Instructions</div>
                </Button>
            </div>
        </section>
    );
};

export default InstructionsPage;

