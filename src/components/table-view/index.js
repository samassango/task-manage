import React from "react";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function TableView({ title, tableHeaderArray, tableBodyArray }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {tableHeaderArray.map((row, index) => (
              <TableCell kay={row + "-" + index}>{row}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBodyArray.map((row, index) => (
            <TableRow key={row[tableHeaderArray[index]]}>
              {tableHeaderArray.map((rowData) => (
                <TableCell key={row[rowData]}>{row[rowData]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more
        </Link>
      </div>
    </React.Fragment>
  );
}
