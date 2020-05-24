import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

const Title = (props) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const RDataTable = ({ lstHeader, rowData, title }) => {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {lstHeader &&
              lstHeader.map(({ rowDataTitle }) => (
                <TableCell>{rowDataTitle}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData &&
            rowData.map((row) => (
              <TableRow key={row.id}>
                {lstHeader.map(({ rowDataKey }) => (
                  <TableCell>{row[rowDataKey]}</TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

RDataTable.protoType = {
  lstHeader: PropTypes.arrayOf({
    rowDataKey: PropTypes.string,
    rowDataTitle: PropTypes.string,
  }),
  rowData: PropTypes.arrays,
};

export default RDataTable;
