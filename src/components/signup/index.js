import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import { AlertTitle } from "@material-ui/lab";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../actions/user.actions";

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#b2dfdb",
  },
  barColorPrimary: {
    backgroundColor: "#00695c",
  },
})(LinearProgress);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Ghost The Dev
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contactno, setContactno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [skills, setSkill] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const isLoadingSignup = useSelector((state) => state.user.isSignUpLoading);
  const signup = useSelector((state) => state.user.signup);

  useEffect(() => {
    setFirstname("");
    setLastname("");
    setContactno("");
    setEmail("");
    setPassword("");
    setTerms(false);
    setError("");
    setSkill("");

    return () => false;
  }, [signup]);

  const handleOnClickSubmit = () => {
    setSubmitted(true);
    if (dataValidation()) {
      return dispatch(
        actions.createUserAccount({
          firstname,
          lastname,
          contactno,
          skills: [skills],
          email,
          password,
          terms,
        })
      );
    }
  };

  const dataValidation = () => {
    console.log(terms);
    if (firstname) {
      if (lastname) {
        if (contactno) {
          if (email) {
            if (password) {
              if (skills) {
                if (terms) {
                  return true;
                } else {
                  setError("Terms of use is required!");
                }
              } else {
                setError("Skill is required!");
              }
            } else {
              setError("Password is required!");
            }
          } else {
            setError("Email is required!");
          }
        } else {
          setError("Contact number is required!");
        }
      } else {
        setError("Lastname is required!");
      }
    } else {
      setError("Firstname is required!");
    }
    return false;
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="contactno"
                label="Contact number"
                name="contactno"
                autoComplete="contactno"
                value={contactno}
                onChange={(e) => setContactno(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="skills"
                label="Enter your best skills"
                name="skills"
                autoComplete="skills"
                value={skills}
                onChange={(e) => setSkill(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    // value="allowExtraEmails"
                    value={terms}
                    onChange={(e) => setTerms(!terms)}
                    color="primary"
                  />
                }
                label="Terms of use"
              />
            </Grid>
          </Grid>
          {isLoadingSignup && <ColorLinearProgress />}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleOnClickSubmit}
            disabled={isLoadingSignup}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default SignUp;
