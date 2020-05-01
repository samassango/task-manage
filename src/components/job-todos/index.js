import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import Board, { moveCard } from "@lourenci/react-kanban";

import AppLayout from "../../app-layout";

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

const ControlledBoard = () => {
  // You need to control the state yourself.
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <Board onCardDragEnd={handleCardMove} disableColumnDrag>
      {controlledBoard}
    </Board>
  );
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
}));

const JobToDos = () => {
  const classes = useStyles();
  return (
    <AppLayout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Job Accepted
              </Typography>
              <ControlledBoard />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};
export default JobToDos;
