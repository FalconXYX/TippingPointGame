import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StabilityBar from "../../components/StabilityBar/stabilityBar";
import styles from "./game.module.css";
import PlayingCard from "../../components/Cards/playingCard";
import AnarchistJson from "../../assets/cards/anarchist.json";
import ActivistJson from "../../assets/cards/activist.json";
import TycoonJson from "../../assets/cards/tycoon.json";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

interface player {
  faction: string;
  influence: number;
  hand: number[];
  deck: number[];
  vp: number;
  activeCard?: number;
}

interface card {
  name: string;
  description: string;
  type: string;
  target?: string;
  effect: number;
  cost: number;
}

const GamePage: React.FC = () => {
  const location = useLocation();
  const faction = location.state?.faction;
  const navigate = useNavigate();
  const otherFactions = ["Tycoon", "Activist", "Anarchist"].filter(
    (f) => f !== faction
  );

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const getStartingDeck = () => {
    const arr = Array.from({ length: 13 }, (_, i) => i + 1);
    const hand: number[] = [];
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      hand.push(arr.splice(randomIndex, 1)[0]);
    }

    return { hand: hand, deck: arr };
  };

  const LoadData = (cardIndex: number, deck: string): card => {
    console.log("Loading data for card", cardIndex);

    let file: { [key: string]: any };
    if (deck === "Activist") file = ActivistJson;
    else if (deck === "Anarchist") file = AnarchistJson;
    else file = TycoonJson;
    const c = file["card" + cardIndex];
    if (c.cost == 100) {
      c.cost = 0;
    }
    return c;
  };

  const getPlayer = (faction: string): player => {
    const p: player = { faction, influence: 5, hand: [], deck: [], vp: 0 };
    const data = getStartingDeck();
    p.hand = data.hand;
    p.deck = data.deck;
    return p;
  };
  const [pc, setPc] = useState<player>(getPlayer(faction));
  const [e1, setE1] = useState<player>(getPlayer(otherFactions[0]));
  const [e2, setE2] = useState<player>(getPlayer(otherFactions[1]));
  const [stability, setStability] = useState(50);

  const [vp, setVP] = useState([0, 0, 0]);

  const doTurn = async (c: card, cardIndex: number) => {
    console.log("Card clicked", cardIndex);
    if (cardIndex === -1) {
      // Skip turn and properly update state
      setPc((prevPc) => ({ ...prevPc, influence: prevPc.influence + 2 }));
      console.log("Skipped turn", pc.influence + 2);
      return;
    }

    //check if the card is playable
    if (c.cost > pc.influence) {
      handleOpen();
      return;
    }
    let rand = LoadData(Math.floor(Math.random() * 13) + 1, e1.faction);
    setE1(doCard(rand, e1));
    rand = LoadData(Math.floor(Math.random() * 13) + 1, e2.faction);
    setE2(doCard(rand, e2));

    const tempplayer = { ...pc };

    //remove the cardIndex from the hand
    const cardIndexInHand = tempplayer.hand.indexOf(cardIndex);
    tempplayer.hand.splice(cardIndexInHand, 1);

    tempplayer.deck.push(cardIndex);
    setPc(doCard(c, tempplayer));
    const rando = Math.floor(Math.random() * pc.deck.length);
    pc.hand.push(pc.deck[rando]);
    pc.deck.splice(rando, 1);

    if (stability >= 57) {
      setVP([vp[0], vp[1], vp[2] + 1]);
    } else if (stability <= 43) {
      setVP([vp[0] + 1, vp[1], vp[2]]);
    } else if (stability > 43 && stability < 57) {
      setVP([vp[0], vp[1] + 1, vp[2]]);
    }
  };
  const doCard = (c: card, p: player) => {
    if (c.type === "s" || c.type === "s") {
      p.influence -= c.cost;
      console.log("Stability", c.effect);
      setStability(stability + c.effect);
    } else if (c.type === "i") {
      p.influence += c.effect;
    } else if (c.type === "d") {
      p.influence -= c.cost;
      if (c.target == "Activist") {
        setVP([vp[0], vp[1], vp[2] + c.effect]);
      } else if (c.target == "Anarchist") {
        setVP([vp[0] + c.effect, vp[1], vp[2]]);
      } else {
        setVP([vp[0], vp[1] + c.effect, vp[2]]);
      }
    }
    if (vp[0] >= 9) {
      navigate("/win", { state: { faction: "Anarchist" } });
    }
    if (vp[1] >= 9) {
      navigate("/win", { state: { faction: "Tycoon" } });
    }
    if (vp[2] >= 9) {
      navigate("/win", { state: { faction: "Activist" } });
    }

    return p;
  };

  // Create state for all players

  return (
    <section className={styles.container}>
      <div className={styles.buttonRow}>
        <StabilityBar stability={stability} influence={pc.influence} />
      </div>
      <div>
        <h3 className={styles.title}>Scores</h3>
        <ul className={styles.scoreList}>
          <li>Anarchists: {vp[0]}</li>
          <li>Tycoon: {vp[1]}</li>
          <li>Activists: {vp[2]}</li>
        </ul>
      </div>
      <div>
        <h3 className={styles.title}>Opponent Actions</h3>
      </div>
      <div>
        <h3 className={styles.title}>Your Cards</h3>
        <div className={styles.cardRow}>
          {pc.hand.map((cardIdx) => (
            <PlayingCard
              key={cardIdx}
              deck={faction}
              cardIndex={cardIdx}
              cardClicked={doTurn}
            />
          ))}
          <Button
            variant="contained"
            color="error"
            onClick={() =>
              doTurn(
                { name: "", description: "", type: "", effect: 0, cost: 0 },
                -1
              )
            }
          >
            <div className={styles.buttonText}>Skip</div>
          </Button>
        </div>
      </div>

      <Modal open={openModal} onClose={handleClose}>
        <Box className={styles.modal}>
          <h2>Not Enough Influence</h2>
        </Box>
      </Modal>
    </section>
  );
};

export default GamePage;
