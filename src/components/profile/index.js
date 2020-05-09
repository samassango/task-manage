import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import AppLayout from "../../app-layout";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  avater: {
    width: "20vh",
    height: "20vh",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

const Profile = () => {
  const classes = useStyles();
  const profile = useSelector((state) => state.user.profile);
  const [fullname, setFullname] = React.useState("");
  const [contactno, setContactno] = React.useState("");
  const [skills, setSkills] = React.useState("");
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    if (profile && profile.id) {
      setFullname(profile.fullname);
      setContactno(profile.contactno);
      setEmail(profile.emailAddress);
      setSkills(profile.skills[0]);
    }
    return () => false;
  }, [profile]);

  return (
    <AppLayout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avater}>
                    <AccountCircleIcon className={classes.avater} />
                  </Avatar>
                </ListItemAvatar>
              </ListItem>
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
                      label="Full Name"
                      autoFocus
                      value={fullname}
                      disabled
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
                      value={contactno}
                      autoComplete="contactno"
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="skills"
                      label="Your Best skills"
                      name="skills"
                      value={skills}
                      autoComplete="skills"
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      value={email}
                      autoComplete="email"
                      disabled
                    />
                  </Grid>

                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled
                  >
                    Update
                  </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};
export default Profile;
