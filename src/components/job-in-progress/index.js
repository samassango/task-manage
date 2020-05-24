import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import DataTable, { createTheme } from "react-data-table-component";
import Alert from "@material-ui/lab/Alert";

import AppLayout from "../../app-layout";
import * as actionRetrieve from "../../actions/retrieve.action";
import LoadingIndicator from "../shared/loadingIndicator";
import { updateJobList } from "../shared/helper/utils.helper";

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
    name: "Title",
    selector: "title",
    sortable: true,
  },
  {
    name: "Description",
    selector: "description",
    sortable: true,
  },
  {
    name: "Status",
    selector: "status",
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

const JobInProgress = () => {
  const classes = useStyles();

  const [toggledClearRows, setToggledClearRows] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actionRetrieve.getInprogressJobs());
    return () => false;
  }, [dispatch]);

  const jobs = useSelector((state) => state.jobs.inprogressJobs.jobs);
  const loadingIndicator = useSelector(
    (state) => state.jobs.inprogressJobs.isLoading
  );
  const statuses = useSelector((state) => state.shared.statuses.list);

  const handleSelectedRow = (state) => {
    setToggledClearRows(!toggledClearRows);
    console.log("Selected Rows: ", state.selectedRows);
  };
  const updatedJobData = updateJobList(jobs, "status", statuses, "id", "name");

  return (
    <AppLayout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {loadingIndicator && <LoadingIndicator />}
              {!!jobs ? (
                <DataTable
                  title="Job In Progress"
                  columns={columns}
                  data={updatedJobData}
                  selectableRows // add for checkbox selection
                  Clicked
                  Selected={handleSelectedRow}
                  clearSelectedRows={toggledClearRows}
                />
              ) : (
                <Alert severity="success">
                  You don't have any jobs in progress! Jost view available jobs
                  to check your job match!
                </Alert>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};
export default JobInProgress;
