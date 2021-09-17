import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Service from "./commonComponents/Service";
import CallToAction from "./ui/CallToAction";

import chakras from "../assets/chakras.svg";
import hands from "../assets/hands.svg";
import healing from "../assets/healing.svg";

const useStyles = makeStyles((theme) => ({}));

export default function Reflexology({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const info = {
    title: "Reflexology",
    text: "Refloxology is often classed as an alternative, complementary health therapy. It is non-invasive and is centered around the theory that the different points on the hands, feet, lower leg, face and ears correspond to different areas of the body. These are the areas through which the Reflexologist focuses in order to provide healing to different ailments in the body. Refloxology is a touch therapy and can be used to treat phsyical, emotional and psychological issues.",
    imageInfo: [
      {
        title: "Healing the Body",
        image: healing,
        alt: "woman on one knee",
      },
      {
        title: "The Hands and Feet",
        image: hands,
        alt: "two hands passing a key",
      },
      { title: "The Chakras", image: chakras, alt: "woman meditating" },
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
