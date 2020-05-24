import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import Board, { moveCard } from "@lourenci/react-kanban";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import _ from "lodash";

import AppLayout from "../../app-layout";
import LoadingIndicator from "../shared/loadingIndicator";
import * as actionRetrieve from "../../actions/retrieve.action";

const initialBoard = (statuses) => {
  const newStatusData = [];
  if (Array.isArray(statuses)) {
    statuses.forEach((status, index) => {
      newStatusData.push({
        id: status.id,
        title: status.name,
        cards: [
          {
            id: index + 1,
            title: "Job available" + index,
            description: "testing job board content",
          },
        ],
      });
    });
  }
  newStatusData.push({
    id: 90,
    title: "test",
    cards: [],
  });
  return { columns: newStatusData };
};
const createBoard = (statuses, jobslist) => {
  const newDataBoard = [];
  if (Array.isArray(statuses) && Array.isArray(jobslist)) {
    statuses.forEach((status) => {
      const cards = [];
      jobslist.forEach((job) => {
        const {
          status: { id },
        } = job;
        if (id === status.id) {
          cards.push({
            id: job.id,
            title: _.startCase(_.capitalize(job.title)),
            description: _.capitalize(job.description),
          });
        }
      });
      const { id, name } = status;
      newDataBoard.push({
        id,
        title: name,
        cards,
      });
    });
  }
  return { columns: newDataBoard };
};

const board = {
  columns: [
    {
      id: 1,
      title: "Job Todo",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content",
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content",
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content",
        },
      ],
    },
    {
      id: 2,
      title: "Job In Progress",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content",
        },
      ],
    },
    {
      id: 3,
      title: "Job Completed",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content",
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content",
        },
      ],
    },
    {
      id: 4,
      title: "Done",
      cards: [
        {
          id: 12,
          title: "Card title 12",
          description: "Card content",
        },
        {
          id: 13,
          title: "Card title 13",
          description: "Card content",
        },
        {
          id: 14,
          title: "Card title 14",
          description: "Card content",
        },
      ],
    },
  ],
};

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
  cards: {
    width: 300,
  },
}));

const JobToDos = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [boardBeta, setBoardBeta] = useState(null);

  React.useEffect(() => {
    dispatch(actionRetrieve.getAllJobs());
    return () => false;
  }, [dispatch]);

  const statuses = useSelector((state) => state.shared.statuses.list);
  const isLoading = useSelector((state) => state.shared.statuses.isLoading);
  const jobs = useSelector((state) => state.jobs.allJobs.jobs);
  const loadingJobs = useSelector((state) => state.jobs.allJobs.isLoading);

  //   React.useEffect(() => {
  //     const boardBETA = initialBoard(statuses);
  //     console.log({ boardBETA, statuses });
  //     setBoardBeta(boardBETA);
  //     return () => false;
  //   }, [statuses]);

  React.useEffect(() => {
    const boardBETA = createBoard(statuses, jobs);
    console.log({ boardBETA });
    setBoardBeta(boardBETA);
    return () => false;
  }, [jobs, statuses]);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(boardBeta, source, destination);
    setBoardBeta(updatedBoard);
  }

  return (
    <AppLayout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {(isLoading || loadingJobs) && <LoadingIndicator />}
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Job Cart Todos
              </Typography>
              {!!boardBeta && boardBeta.length !== 0 ? (
                <Board onCardDragEnd={handleCardMove} disableColumnDrag>
                  {boardBeta}
                </Board>
              ) : (
                <Alert severity="success">Still loading job cards!</Alert>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};
export default JobToDos;
// <ControlledBoardBETA boardBETA={boardBeta} />
