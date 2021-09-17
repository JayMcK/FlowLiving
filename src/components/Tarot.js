import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Service from "./commonComponents/Service";
import CallToAction from "./ui/CallToAction";

import cards from "../assets/cards.svg";
import meaning from "../assets/meaning.svg";
import visions from "../assets/visions.svg";

const useStyles = makeStyles((theme) => ({}));

export default function Tarot({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const info = {
    title: "Tarot",
    text: "Tarot card reading is where practioners use tarot cards to gain insight into the past, future or present. Tarot cards can either be used as the main source of insight, or they can be used alongside the practioners clairvoyant, clairsentient or clairaudient abilities. Tarot Cards can be used to provide clarity on decisions, guidance on questions or support and comfort through difficult life experiences.",
    imageInfo: [
      {
        title: "The Cards",
        image: cards,
        alt: "two tarot cards",
      },
      {
        title: "Visions",
        image: visions,
        alt: "woman with eyes closed",
      },
      { title: "Meaning", image: meaning, alt: "looking glass" },
    ],
  };

  return (
    <Grid item>
      <Grid container direction="column">
        {/* --- REIKI BLOCK --- */}
        <Service
          info={info}
          value={value}
          selectedIndex={selectedIndex}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
