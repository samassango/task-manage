import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

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
}));

const Reports = () => {
  const classes = useStyles();
  return (
    <AppLayout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Alert severity="success">
                Report still under constructions... coming soon!
              </Alert>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};
export default Reports;
