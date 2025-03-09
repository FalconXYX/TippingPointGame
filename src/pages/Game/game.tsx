import React, { useEffect, useState, useCallback } from "react";
import styles from "./game.module.css";
import { Button } from "@mui/material";
const GamePage: React.FC = () => {
    return (
        <section className={styles.container}>
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

export default GamePage;

