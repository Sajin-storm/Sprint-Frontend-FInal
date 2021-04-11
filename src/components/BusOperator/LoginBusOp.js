import React, { useRef,  } from "react";
// import { connect } from 'react-redux';
import * as actions from "../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {/* <Link color="inherit" href="https://material-ui.com/"> */}
      Your Website
      {/* </Link>*/} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.progress);
  //const login = useSelector(state=>state.login);
  const busOps = useSelector((state) => state.busOps);
  const busOperatorUsername = useRef();
  const password = useRef();
  const errorMessage = useSelector((state) => state.errorMessage);
  const history = useHistory();

  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch({ type: "PROGRESS", payload: true });
      // dispatch({type: "LOGIN", payload: true})
      dispatch(
        actions.checkBusops(
          busOperatorUsername.current.value,
          password.current.value
        )
      );
      // history.push("/home");
    } catch (errorm) {
    }
  }

  console.log(progress);
  console.log(busOps);
  if (busOps !== undefined) {
    history.push("/busoperatorscreen");
  }

  const classes = useStyles;

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              className={classes.avatar}
              style={{ backgroundImage: " linear-gradient(blue, red)" }}
            >
              <SupervisedUserCircleIcon fontSize="large" />
            </Avatar>
          </div>
          <Typography
            component="h1"
            variant="h5"
            style={{ textAlign: "center", textShadow: "2px 2px #E3EEFF" }}
          >
            Welcome Bus Operator
          </Typography>
          <br />
          {errorMessage && (
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
              <Alert severity="error">{errorMessage}</Alert>
            </Snackbar>
          )}
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Enter Username"
                  inputRef={busOperatorUsername}
                  style={{
                    backgroundImage: " linear-gradient(#ECF4FF, white)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  inputRef={password}
                  style={{
                    backgroundImage: " linear-gradient(#ECF4FF, white)",
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
