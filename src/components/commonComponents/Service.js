import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CallToAction from "../ui/CallToAction";

import servicesRightArrow from "../../assets/servicesRightArrow.svg";
import servicesLeftArrow from "../../assets/servicesLeftArrow.svg";

const useStyles = makeStyles((theme) => ({
  arrow: {
    height: "2em",
    width: "2em",
  },
  iconImage: {
    height: "15em",
    [theme.breakpoints.down("xs")]: {
      height: "12.5em",
    },
  },
  navArrow: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default function Service({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
  info,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const iconInfo = info.imageInfo;

  const handlePageForward = () => {
    switch (window.location.pathname) {
      case "/reiki":
        setValue(1);
        setSelectedIndex(2);
        return "/reflexology";
      case "/reflexology":
        setValue(1);
        setSelectedIndex(3);
        return "/tarot";
      case "/tarot":
        setValue(1);
        setSelectedIndex(4);
        return "/counselling";
      case "/counselling":
        setValue(1);
        setSelectedIndex(5);
        return "/reiki";
      default:
        break;
    }
  };

  const handlePageBack = () => {
    switch (window.location.pathname) {
      case "/reiki":
        setValue(1);
        setSelectedIndex(4);
        return "/counselling";
      case "/reflexology":
        setValue(1);
        setSelectedIndex(3);
        return "/reiki";
      case "/tarot":
        setValue(1);
        setSelectedIndex(2);
        return "/reflexology";
      case "/counselling":
        setValue(1);
        setSelectedIndex(1);
        return "/tarot";
      default:
        break;
    }
  };
  return (
    <Grid item>
      <Grid container direction="column" style={{ marginTop: "2em" }}>
        {/* --- SERVICE BLOCK --- */}
        <Grid item align="center">
          <Typography variant="h1">{info.title}</Typography>
        </Grid>
        <Grid
          item
          container
          direction={matchesXS ? "column" : "row"}
          alignItems="center"
          style={{
            marginBottom: "5em",
            marginTop: "2em",
          }}
        >
          <Grid
            item
            sm
            align="right"
            style={{ marginBottom: matchesXS ? "1em" : 0 }}
          >
            <Button
              disableRipple
              className={classes.navArrow}
              onClick={() => {
                handlePageBack();
              }}
              component={Link}
              to={handlePageBack}
            >
              <img
                src={servicesLeftArrow}
                alt="arrow back to previous page"
                className={classes.arrow}
                style={{ marginRight: matchesXS ? 0 : "2em" }}
              />
            </Button>
          </Grid>
          <Grid
            item
            sm={8}
            align="center"
            style={{
              marginLeft: matchesXS ? "1em" : 0,
              marginRight: matchesXS ? "1em" : 0,
            }}
          >
            <Typography variant="body1">{info.text}</Typography>
          </Grid>
          <Grid item sm style={{ marginTop: matchesXS ? "1em" : 0 }}>
            <Button
              disableRipple
              className={classes.navArrow}
              onClick={() => {
                handlePageForward();
              }}
              component={Link}
              to={handlePageForward}
            >
              <img
                src={servicesRightArrow}
                alt="arrow forward to next page"
                className={classes.arrow}
                style={{ marginLeft: matchesXS ? 0 : "2em" }}
              />
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          {/* --- ICON BLOCK --- */}
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginBottom: "5em" }}
          >
            {iconInfo.map((icon) => (
              <Grid
                item
                sm
                container
                direction="column"
                key={icon.alt}
                style={{ marginBottom: matchesSM ? "2em" : 0 }}
              >
                <Grid item align="center" style={{ marginBottom: "1em" }}>
                  <Typography variant="h2">{icon.title}</Typography>
                </Grid>
                <Grid item align="center">
                  <img
                    src={icon.image}
                    alt={icon.alt}
                    className={classes.iconImage}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
