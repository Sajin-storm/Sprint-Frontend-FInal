import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, Button } from "@material-ui/core";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import HomeIcon from "@material-ui/icons/Home";

import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function BusOperatorScreen() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Paper
        elevation={3}
        style={{
          height: "200px",
          width: "200px",
          backgroundImage: " linear-gradient(#ECF4FF, white)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "lightBlue",
          }}
        >
          <CollectionsBookmarkIcon fontSize="large" />
        </div>

        <br />
        <Typography
          variant="h5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <b>Bookings</b>
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          View all bookings made by users
        </Typography>
        <br />
        <div style={{ textAlign: "center" }}>
          <Link to="/view">
            <Button variant="contained" color="primary">
              View
            </Button>
          </Link>
        </div>
      </Paper>
      <Paper
        elevation={3}
        style={{
          height: "200px",
          width: "200px",
          backgroundImage: " linear-gradient(#ECF4FF, white)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "lightBlue",
          }}
        >
          <DirectionsBusIcon fontSize="large" />
        </div>

        <br />
        <Typography
          variant="h5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <b>Bus</b>
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Add a new Bus
        </Typography>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <Link to="/busoperator/addbus">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </Paper>
      <Paper
        elevation={3}
        style={{
          height: "200px",
          width: "200px",
          backgroundImage: " linear-gradient(#ECF4FF, white)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "lightBlue",
          }}
        >
          <MonetizationOnIcon fontSize="large" />
        </div>

        <br />
        <Typography
          variant="h5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <b>Revenue</b>
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          View revenue generated
        </Typography>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <Link to="/revenue">
            <Button variant="contained" color="primary">
              View
            </Button>
          </Link>
        </div>
      </Paper>

      <Paper
        elevation={3}
        style={{
          height: "200px",
          width: "200px",
          backgroundImage: " linear-gradient(#ECF4FF, white)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "lightBlue",
          }}
        >
          <HomeIcon fontSize="large" />
        </div>

        <br />
        <Typography
          variant="h5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <b>Home</b>
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Go to homepage
        </Typography>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <Link to={"/"}>
            <Button variant="contained" color="primary">
              Go
            </Button>
          </Link>
        </div>
      </Paper>
    </div>
  );
}
