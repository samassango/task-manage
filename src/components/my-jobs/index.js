import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import DataTable, { createTheme } from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";

import AppLayout from "../../app-layout";
import * as actionRetrieve from "../../actions/retrieve.action";
import LoadingIndicator from "../shared/loadingIndicator";

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
}));

createTheme("solarized", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198",
  },
  background: {
    default: "#002b36",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: "#073642",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

const columns = [
  {
    name: "Job Title",
    selector: "title",
    sortable: true,
  },
  {
    name: "Job Description",
    selector: "description",
    sortable: true,
  },
  {
    name: "Job Current Status",
    selector: "status",
    sortable: true,
  },
  {
    name: "Created By",
    selector: "author",
    sortable: true,
  },
  {
    name: "Creation Date",
    selector: "createdAt",
    sortable: true,
  },
  {
    name: "Budget Amount (R)",
    selector: "budget",
    sortable: true,
    right: true,
  },
];

const createData = (jobs) => {
  const newData = [];
  if (Array.isArray(jobs)) {
    jobs.forEach((job) => {
      const { status, User, ...rest } = job;
      newData.push({ ...rest, status: status.name, author: User.realm });
    });
  }
  return newData;
};

const AllJobsCreatedByCurrentUser = () => {
  const classes = useStyles();
  const [toggledClearRows, setToggledClearRows] = React.useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  React.useEffect(() => {
    dispatch(actionRetrieve.getAllJobsByUserId({ userId: currentUser.userId }));
    return () => false;
  }, [dispatch, currentUser]);

  const jobs = useSelector((state) => state.jobs.currentUserJobs.jobs);
  const loadingIndicator = useSelector(
    (state) => state.jobs.currentUserJobs.isLoading
  );

  const handleSelectedRow = (state) => {
    setToggledClearRows(!toggledClearRows);
    console.log("Selected Rows: ", state.selectedRows);
  };
  //  const updatedJobData = updateJobList(jobs, "status", statuses, "id", "name");
  const updatedJobData = createData(jobs);
  return (
    <AppLayout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {loadingIndicator && <LoadingIndicator />}
              {!!jobs ? (
                <DataTable
                  title="All My Jobs"
                  columns={columns}
                  data={updatedJobData}
                  selectableRows // add for checkbox selection
                  Clicked
                  Selected={handleSelectedRow}
                  clearSelectedRows={toggledClearRows}
                />
              ) : (
                <Alert severity="success">Loading all jobs</Alert>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};
export default AllJobsCreatedByCurrentUser;
