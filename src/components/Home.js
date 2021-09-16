import React, { useState, Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Quote from "./commonComponents/Quote";

import homeHeroBackground from "../assets/homeHeroBackground.jpg";
import rightArrow from "../assets/rightArrow.svg";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    border: `1px solid ${theme.palette.common.gold}`,
  },
  heroBackground: {
    backgroundImage: `url(${homeHeroBackground})`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.up("md")]: {
      backgroundAttachment: "fixed",
    },
  },
  sessionButton: {
    ...theme.typography.sessionButton,
    fontSize: "1.75rem",
    borderRadius: 50,
    paddingLeft: "1em",
    paddingRight: "1em",
    marginRight: "1em",
    height: 80,
    width: 300,
    color: theme.palette.common.gold,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  heroTitle: {
    color: "#fff",
  },
  learnButton: {
    ...theme.typography.learnButton,
  },
  rightArrow: {
    marginLeft: "1em",
  },
}));

export default function Home({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const fullHome = (
    <Grid
      container
      direction="row"
      className={classes.heroBackground}
      style={{ height: "50em", marginTop: "1em" }}
      alignItems="center"
    >
      <Grid item md align="center">
        <Button
          variant="contained"
          color="primary"
          className={classes.sessionButton}
          disableRipple
          component={Link}
          to="/freesession"
          onClick={() => setValue(false)}
        >
          Free first session
        </Button>
      </Grid>
      <Grid item md container direction="column" style={{ marginRight: "5em" }}>
        <Grid item align="right">
          <Typography variant="h2" className={classes.heroTitle}>
            Reiki, Reflexology, Tarot Reading {matchesMD ? null : <br />} and
            Spiritual Counselling
          </Typography>
        </Grid>
        <Grid item align="right">
          <Button
            variant="contained"
            color="primary"
            className={classes.learnButton}
            component={Link}
            to="/services"
            onClick={() => {
              setValue(0);
              setSelectedIndex(0);
            }}
          >
            Learn More
            <img
              src={rightArrow}
              alt="right arrow"
              className={classes.rightArrow}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );

  const smallHome = (
    <Grid
      container
      direction="column"
      className={classes.heroBackground}
      style={{
        height: "50em",
        marginTop: "1em",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item md container direction="column" style={{}}>
        <Grid
          item
          align="right"
          style={{
            marginLeft: matchesXS ? "1em" : matchesSM ? "2em" : 0,
            marginRight: matchesXS ? "1em" : matchesSM ? "2em" : 0,
          }}
        >
          <Typography align="center" variant="h2" className={classes.heroTitle}>
            Reiki, Reflexology, Tarot Reading {matchesMD ? null : <br />} and
            Spiritual Counselling
          </Typography>
        </Grid>
        <Grid
          item
          align="center"
          style={{ marginTop: "2em", marginBottom: "2em" }}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.learnButton}
            component={Link}
            to="/services"
            onClick={() => {
              setValue(0);
              setSelectedIndex(0);
            }}
          >
            Learn More
            <img
              src={rightArrow}
              alt="right arrow"
              className={classes.rightArrow}
            />
          </Button>
        </Grid>
      </Grid>
      <Grid item md align="center">
        <Button
          variant="contained"
          color="primary"
          className={classes.sessionButton}
          disableRipple
          component={Link}
          to="/freesession"
          onClick={() => setValue(false)}
          style={{ marginRight: 0 }}
        >
          Free first session
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <Grid item>
      <Grid container direction="column" className={classes.homeContainer}>
        <Grid item>
          {/* --- HERO BLOCK --- */}
          <Hidden smDown>{fullHome}</Hidden>
          <Hidden mdUp>{smallHome}</Hidden>
        </Grid>
        <Quote text="Since starting my spiritual conselling sessions, I have a new found trust in myself, more clarity of thought and feel more like myself." />
      </Grid>
    </Grid>
  );
}
