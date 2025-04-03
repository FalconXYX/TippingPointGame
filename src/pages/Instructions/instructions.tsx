import React from "react";
import styles from "./instructions.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const InstructionsPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.container}>
      <div className={styles.textRow}>
        <h2 className={styles.titleText}>Instructions</h2>
        <p className={styles.bodyText}>
          Tipping point is a virtual card game that is played by spending your
          currency called influence to play cards to try to change the stability
          of the game. You will start by choosing faction both the Anarchists
          and Activists are trying to change the stability to their side of the
          scale. The tycoons are trying to keep the stability close to the
          middle. If when the turn ends, the stability is in your zone you gain
          a victory point, if you have 10 victory points, you win the game.
          <br />
          There are three different types of cards, Stability cards, which
          change the stability bar that you can see at the top, Influence which
          gives you more currency to work with or Sabotage, which can sabotage
          your opponents influence.
          <br />
          A card contains its cost, as well as its effect at the bottom, along
          with some description of what the action you're taking to enact these
          effects are.
          <br />
          You gain one influence per round as an income, and if you don't have
          enough influence to make an action, you can always keep your return
          for an extra income that round.
        </p>
      </div>
      <div className={styles.buttonRow}>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/choose")}
        >
          <div className={styles.buttonText}>Start</div>
        </Button>
      </div>
    </section>
  );
};

export default InstructionsPage;
