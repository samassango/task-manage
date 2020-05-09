import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import AppLayout from "../../app-layout";

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
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CreateJob = () => {
  const classes = useStyles();
  return (
    <AppLayout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="jobTitle"
                      label="Job title (short description of the job)!"
                      name="jobTitle"
                      autoComplete="jobTitle"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="jobDescription"
                      label="Job full Description (detailed description of the required task)!"
                      name="jobDescription"
                      autoComplete="jobDescription"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="budgetAmount"
                      label="Job Budgets Amount (Amount willing to pay for job done)!"
                      name="budgetAmount"
                      autoComplete="budgetAmount"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="skills"
                      label="Skills!"
                      name="skills"
                      autoComplete="skills"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Select
                      variant="outlined"
                      fullWidth
                      labelId="status"
                      id="status"
                      label="Status"
                    >
                      <MenuItem value="">
                        <em>Select Status</em>
                      </MenuItem>
                      <MenuItem value={10}>Job In progress</MenuItem>
                      <MenuItem value={20}>Job Available</MenuItem>
                      <MenuItem value={30}>Job Completed</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Create Job
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};
export default CreateJob;
