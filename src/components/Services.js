import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CallToAction from "./ui/CallToAction";

import rightArrow from "../assets/rightArrow.svg";
import counselling from "../assets/counselling.svg";
import tarot from "../assets/tarot.svg";
import reiki from "../assets/reiki.svg";
import reflexology from "../assets/reflexology.svg";

const useStyles = makeStyles((theme) => ({
  servicesContainer: {
    border: `1px solid ${theme.palette.common.gold}`,
  },
  siteLinksIcon: {
    height: "15em",
    [theme.breakpoints.down("xs")]: {
      height: "10em",
    },
  },
  siteLinksText: {
    fontSize: "1.25rem",
    color: theme.palette.grey[700],
  },
  specialText: {
    fontFamily: "Cookie",
    color: theme.palette.common.gold,
    fontSize: "1.5rem",
  },
  learnButton: {
    ...theme.typography.learnButton,
  },
}));

export default function Services({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item style={{ marginTop: "1em" }}>
      <Grid container direction="column" className={classes.servicesContainer}>
        <Grid
          item
          align={matchesSM ? "center" : undefined}
          style={{ marginTop: "1em", marginLeft: matchesSM ? 0 : "5em" }}
        >
          <Typography variant="h1">Services</Typography>
        </Grid>
        {/* --- ALL SERVICES BLOCK --- */}
        <Grid item>
          {/* --- REIKI BLOCK --- */}
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em", marginBottom: "5em" }}
            alignItems="center"
          >
            <Grid
              item
              md
              container
              direction="column"
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                marginRight: matchesSM ? 0 : "1em",
                maxWidth: "40em",
              }}
              justifyContent="center"
              alignItems={matchesSM ? "center" : undefined}
            >
              <Grid item align={matchesSM ? "center" : undefined}>
                <Typography variant="h2">Reiki</Typography>
              </Grid>
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? "1em" : 0,
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                  align={matchesSM ? "center" : undefined}
                >
                  Reiki is a healing technique based on the principle that the
                  therapist can channel energy into the patient by means of
                  touch.
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? "1em" : 0,
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                  align={matchesSM ? "center" : undefined}
                >
                  This energy activates the natural healing processes of the
                  patient???s body and restore{" "}
                  <span className={classes.specialText}>
                    physical and emotional well-being.
                  </span>
                </Typography>
              </Grid>
              <Grid item style={{ marginBottom: matchesSM ? "2em" : 0 }}>
                <Button
                  component={Link}
                  to="/reiki"
                  onClick={() => {
                    setValue(1);
                    setSelectedIndex(1);
                  }}
                  className={classes.learnButton}
                >
                  Learn More
                  <img
                    src={rightArrow}
                    alt="right arrow"
                    className={classes.rightArrow}
                    style={{ marginLeft: "1em" }}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid item md>
              <img
                src={reiki}
                alt="woman giving reiki healing"
                className={classes.siteLinksIcon}
              />
            </Grid>
          </Grid>
          {/* --- REFLEXOLOGY BLOCK --- */}
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "5em", marginBottom: "5em" }}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Grid
              item
              md
              container
              direction="column"
              style={{
                maxWidth: "40em",
              }}
              justifyContent="center"
              alignItems={matchesSM ? "center" : "flex-end"}
            >
              <Grid item>
                <Typography variant="h2">Reflexology</Typography>
              </Grid>
              <Grid
                item
                align={matchesSM ? "center" : "right"}
                style={{
                  marginLeft: matchesSM ? "1em" : "1em",
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                >
                  Reflexology is a system of massage used to relieve tension and
                  treat illness.
                </Typography>
              </Grid>
              <Grid
                item
                align={matchesSM ? "center" : "right"}
                style={{
                  marginLeft: matchesSM ? "1em" : "1em",
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                >
                  It is based on the theory that there are reflex points on the
                  feet, hands and head - linked to{" "}
                  <span className={classes.specialText}>
                    every part of the body.
                  </span>
                </Typography>
              </Grid>
              <Grid
                item
                style={{ marginBottom: matchesSM ? "2em" : undefined }}
              >
                <Button
                  component={Link}
                  to="/reflexology"
                  onClick={() => {
                    setValue(1);
                    setSelectedIndex(2);
                  }}
                  className={classes.learnButton}
                >
                  Learn More
                  <img
                    src={rightArrow}
                    alt="right arrow"
                    className={classes.rightArrow}
                    style={{ marginLeft: "1em" }}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              md
              align={matchesSM ? "center" : "left"}
              style={{
                maxWidth: "20em",
                marginRight: matchesSM ? 0 : "5em",
                marginLeft: matchesSM ? 0 : "1.5em",
              }}
            >
              <img
                src={reflexology}
                alt="woman giving reflexology"
                className={classes.siteLinksIcon}
              />
            </Grid>
          </Grid>
          {/* --- TAROT READING BLOCK --- */}
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "5em", marginBottom: "5em" }}
            alignItems="center"
          >
            <Grid
              item
              md
              container
              direction="column"
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                marginRight: matchesSM ? 0 : "1em",
                maxWidth: "40em",
              }}
              justifyContent="center"
              alignItems={matchesSM ? "center" : undefined}
            >
              <Grid item align={matchesSM ? "center" : undefined}>
                <Typography variant="h2">Tarot Reading</Typography>
              </Grid>
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? "1em" : 0,
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                  align={matchesSM ? "center" : undefined}
                >
                  Tarot cards are a form of divination - i.e. working with the
                  divine, or your higher self, in order to receive messages and
                  insights which seek to{" "}
                  <span className={classes.specialText}>
                    bring us guidance.
                  </span>
                </Typography>
              </Grid>
              <Grid item style={{ marginBottom: matchesSM ? "2em" : 0 }}>
                <Button
                  component={Link}
                  to="/tarot"
                  onClick={() => {
                    setValue(1);
                    setSelectedIndex(3);
                  }}
                  className={classes.learnButton}
                >
                  Learn More
                  <img
                    src={rightArrow}
                    alt="right arrow"
                    className={classes.rightArrow}
                    style={{
                      marginLeft: "1em",
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid item md style={{ marginRight: matchesSM ? 0 : "1em" }}>
              <img
                src={tarot}
                alt="woman giving tarot reading"
                className={classes.siteLinksIcon}
                style={{ height: matchesXS ? "9em" : undefined }}
              />
            </Grid>
          </Grid>
          {/* --- SPIRITUAL COUNSELLING BLOCK --- */}
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "5em", marginBottom: "5em" }}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Grid
              item
              md
              container
              direction="column"
              style={{
                maxWidth: "40em",
              }}
              justifyContent="center"
              alignItems={matchesSM ? "center" : "flex-end"}
            >
              <Grid item>
                <Typography variant="h2">Spiritual Conselling</Typography>
              </Grid>
              <Grid
                item
                align={matchesSM ? "center" : "right"}
                style={{
                  marginLeft: matchesSM ? "1em" : "1em",
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                >
                  Spiritual therapy is a form of counselling that attempts to
                  treat a person???s soul as well as their mind and body.
                </Typography>
              </Grid>
              <Grid
                item
                align={matchesSM ? "center" : "right"}
                style={{
                  marginLeft: matchesSM ? "1em" : "1em",
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                >
                  This is achieved through accessing individual belief systems
                  and using that faith in a higher power to explore{" "}
                  <span className={classes.specialText}>
                    areas of conflict in life.
                  </span>
                </Typography>
              </Grid>
              <Grid
                item
                style={{ marginBottom: matchesSM ? "2em" : undefined }}
              >
                <Button
                  component={Link}
                  to="/counselling"
                  onClick={() => {
                    setValue(3);
                    setSelectedIndex(0);
                  }}
                  className={classes.learnButton}
                >
                  Learn More
                  <img
                    src={rightArrow}
                    alt="right arrow"
                    className={classes.rightArrow}
                    style={{ marginLeft: "1em" }}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              md
              align={matchesSM ? "center" : "left"}
              style={{
                maxWidth: "20em",
                marginRight: matchesSM ? 0 : "5em",
                marginLeft: matchesSM ? 0 : "1.5em",
              }}
            >
              <img
                src={counselling}
                alt="woman giving spiritual counselling"
                className={classes.siteLinksIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
