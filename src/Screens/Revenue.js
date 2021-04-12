import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography, Button } from "@material-ui/core";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import HomeIcon from "@material-ui/icons/Home";
import EventNoteIcon from "@material-ui/icons/EventNote";

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

export default function Revenue() {
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
          <MonetizationOnIcon fontSize="large" />
        </div>

        <br />
        <Typography
          variant="h5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <b>Route Revenue</b>
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Revenue based on which route you travel
        </Typography>
        <br />
        <div style={{ textAlign: "center" }}>
          <Link to="/routerev">
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
          <EventNoteIcon fontSize="large" />
        </div>

        <br />
        <Typography
          variant="h5"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <b>Dated Revenue</b>
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Revenue based on route on a particular day
        </Typography>
        <br />
        <div style={{ textAlign: "center" }}>
          <Link to="/datedrouterev">
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
          <EventNoteIcon fontSize="large" />
        </div>

        <br />
        <Typography
          variant="h5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <b>Monthly Revenue</b>
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Revenue based on route for that particular month
        </Typography>
        <br />
        <div style={{ textAlign: "center" }}>
          <Link to="/monthlyrouterev">
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
          <EventNoteIcon fontSize="large" />
        </div>

        <br />
        <Typography
          variant="h5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <b>Yearly Revenue</b>
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Revenue based on route for that particular year
        </Typography>
        <br />
        <div style={{ textAlign: "center" }}>
          <Link to="/yearlyrevenue">
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
