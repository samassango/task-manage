import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import { AlertTitle } from "@material-ui/lab";

import AppLayout from "../../app-layout";
import LoadingIndicator from "../shared/loadingIndicator";
import * as actionsGet from "../../actions/retrieve.action";
import * as actionCreate from "../../actions/create.action";

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
  const dispatch = useDispatch();

  const [jobTitle, setJobTitle] = React.useState("");
  const [jobDescription, setJobDescription] = React.useState("");
  const [budgetAmount, setBudgetAmount] = React.useState("");
  const [skills, setSkills] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    dispatch(actionsGet.getJobStatus());
    return () => false;
  }, [dispatch]);

  //   const statuses = useSelector((state) => state.shared.statuses.list);
  const currentUser = useSelector((state) => state.user.currentUser);
  const job = useSelector((state) => state.jobs.createJob.job);
  const isLoading = useSelector((state) => state.jobs.createJob.isLoading);
  const success = useSelector((state) => state.jobs.createJob.success);

  React.useEffect(() => {
    setJobDescription("");
    setJobTitle("");
    setBudgetAmount("");
    setSkills("");
    setStatus("");
    setError("");
    return () => false;
  }, [job]);

  const handleCreateJob = () => {
    const skillList = skills.split(",");
    console.log(skillList);
    if (validationData()) {
      return dispatch(
        actionCreate.createJob({
          title: jobTitle,
          description: jobDescription,
          skills: skillList,
          status: "5eb72dcd04c7b90017494208",
          budget: budgetAmount,
          verified: false,
          author: currentUser.userId,
        })
      );
    }
  };

  const validationData = () => {
    if (jobTitle) {
      if (jobDescription) {
        if (skills) {
          if (budgetAmount) {
            return true;
          } else {
            setError("Budget Amount is required!");
          }
        } else {
          setError("Skills is required!");
        }
      } else {
        setError("Job description is required!");
      }
    } else {
      setError("Job title is required!");
    }
    return false;
  };

  return (
    <AppLayout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {isLoading && <LoadingIndicator />}
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Create new job request!
              </Typography>
              {error && (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {error}
                </Alert>
              )}
              {success && (
                <Alert severity="success">
                  Successfully created a new job card. User with matching skills
                  will be notified.
                </Alert>
              )}
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
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
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
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
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
                      value={budgetAmount}
                      onChange={(e) => setBudgetAmount(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="skills"
                      label="Required Skills (separated by comma eg: teacher, leader)!"
                      name="skills"
                      autoComplete="skills"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={handleCreateJob}
                      disabled={isLoading}
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

// <Grid item xs={12}>
//                     <Select
//                       variant="outlined"
//                       fullWidth
//                       labelId="status"
//                       id="status"
//                       label="Status"
//                       value={status}
//                       onChange={(e) => setStatus(e.target.value)}
//                     >
//                       <MenuItem value="">
//                         <em>Select Status</em>
//                       </MenuItem>
//                       {statuses &&
//                         statuses.map((status) => {
//                           return (
//                             <MenuItem value={status.id}>{status.name}</MenuItem>
//                           );
//                         })}
//                     </Select>
//                   </Grid>
