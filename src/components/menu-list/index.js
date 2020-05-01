import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import WorkIcon from "@material-ui/icons/Work";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ListIcon from "@material-ui/icons/List";
import ViewListIcon from "@material-ui/icons/ViewList";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { useHistory } from "react-router-dom";
import { List } from "@material-ui/core";

export const MainListItems = () => {
  const history = useHistory();
  const handleListItemClick = (event, link) => {
    return history.push(link);
  };

  return (
    <List>
      <ListItem button onClick={(event) => handleListItemClick(event, "/")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        button
        onClick={(event) => handleListItemClick(event, "/create-job")}
      >
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Create Job" />
      </ListItem>
      <ListItem
        button
        onClick={(event) => handleListItemClick(event, "/available-job")}
      >
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Available Jobs" />
      </ListItem>
      <ListItem
        button
        onClick={(event) => handleListItemClick(event, "/job-todos")}
      >
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>
        <ListItemText primary="Jobs ToDos" />
      </ListItem>
      <ListItem
        button
        onClick={(event) => handleListItemClick(event, "/all-jobs")}
      >
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="All Jobs" />
      </ListItem>
      <ListItem
        button
        onClick={(event) => handleListItemClick(event, "/job-in-progress")}
      >
        <ListItemIcon>
          <ViewListIcon />
        </ListItemIcon>
        <ListItemText primary="Jobs In Progress" />
      </ListItem>
    </List>
  );
};

export const SecondaryListItems = () => {
  const history = useHistory();
  const handleListItemClick = (event, link) => {
    return history.push(link);
  };

  return (
    <List>
      <ListSubheader inset>Reports</ListSubheader>
      <ListItem
        button
        onClick={(event) => handleListItemClick(event, "/reports")}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="View Reports" />
      </ListItem>
    </List>
  );
};
