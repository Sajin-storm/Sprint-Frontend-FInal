import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/action";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5),
      width: "25ch",
    },
  },
}));

class AddFeedback extends Component {
  constructor() {
    super();
    this.username = React.createRef();
    this.rating = React.createRef();
    this.comment = React.createRef(); 
    this.routeName = React.createRef();

    this.state = { addFeedbackMessage: " " };
  }

  addFeedback(event) {
    this.setState ({ addFeedbackMessage: "" })   
    this.props.onAddFeedback({
      username: this.props.match.params.username,
      rating: this.rating.current.value,
      comment: this.comment.current.value,
      routeName: this.routeName.current.value,
    });
  }

  render() {
    const classes = useStyles;

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textShadow: "2px 2px #E3EEFF",
          }}
        >
          <h3>Add New Feedback</h3>
        </div>
        <br />

        <Container component="main" maxWidth="xs">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                style={{ backgroundImage: " linear-gradient(#ECF4FF, white)" }}
              >
                <TextField
                  fullWidth
                  required={true}
                  defaultValue={this.props.match.params.username}
                  label="Enter Username"
                  variant="outlined"
                  disabled
                ></TextField>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                style={{ backgroundImage: " linear-gradient(#ECF4FF, white)" }}
              >
                <TextField
                  fullWidth
                  type="number"
                  required={true}
                  inputRef={this.rating}
                  label="Enter Rating"
                  variant="outlined"
                ></TextField>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                style={{ backgroundImage: " linear-gradient(#ECF4FF, white)" }}
              >
                <TextField
                  fullWidth
                  required={true}
                  inputRef={this.comment}
                  label="Enter Comment"
                  variant="outlined"
                ></TextField>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                style={{ backgroundImage: " linear-gradient(#ECF4FF, white)" }}
              >
                <TextField
                  fullWidth
                  required={true}
                  inputRef={this.routeName}
                  label="Enter RouteName"
                  variant="outlined"
                ></TextField>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                //className={classes.submit}
                onClick={this.addFeedback.bind(this)}
              >
                Add Feedback
              </Button>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                disabled
                label={this.props.addFeedbackMessage}
                variant="standard"
                InputProps={{ readOnly: true }}
              ></TextField>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addFeedbackMessage: state.addFeedbackMessage,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onAddFeedback: (payload) => dispatch(actions.addFeedback(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(AddFeedback);
