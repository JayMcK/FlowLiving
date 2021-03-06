import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Service from "./commonComponents/Service";
import CallToAction from "./ui/CallToAction";
import Quote from "./commonComponents/Quote";

import therapy from "../assets/therapy.svg";
import meditation from "../assets/meditation.svg";
import activities from "../assets/activities.svg";

const useStyles = makeStyles((theme) => ({
  counsellingContainer: {
    border: `1px solid ${theme.palette.common.gold}`,
  },
}));

export default function Tarot({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const info = {
    title: "Spiritual Counselling",
    text: "Spiritual counselling provides a holistic approach to healing. As the emotional, physical, psychological and spiritual aspects of ones life is intertwined, the treatment of just one of these aspects can often lead to incomplete healing. Therefore, spiritual counselling, much like homeopathy, seeks to treat issues on all four of these levels; aiming to lead to full healing as opposed to only the reduction of symptoms.",
    imageInfo: [
      {
        title: "Therapy",
        image: therapy,
        alt: "woman meditating",
      },
      {
        title: "Meditation",
        image: meditation,
        alt: "two women talking",
      },
      { title: "Activities", image: activities, alt: "notepad and pen" },
    ],
  };

  return (
    <Grid item>
      <Grid
        container
        direction="column"
        className={classes.counsellingContainer}
      >
        {/* --- REIKI BLOCK --- */}
        <Service
          info={info}
          value={value}
          selectedIndex={selectedIndex}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
        {/* --- QUOTE BLOCK --- */}
        <Quote text="I had never even heard of spiritual counselling before learning about Flow Living. Now, it is my preferred form of therapy!" />
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
