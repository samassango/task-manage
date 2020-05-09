import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import AppFooter from "../components/app-footer";
import AppHeader from "../components/app-header";
import DrawerUI from "../components/drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

const AppLayout = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const currentUser = useSelector((state) => state.user.currentUser);
  const profile = useSelector((state) => state.user.profile);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    if (currentUser === null && profile === null) {
      history.push("/signin");
    }
    return () => false;
  }, [currentUser, history, profile]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppHeader open={open} handleDrawerOpen={handleDrawerOpen} />
      <DrawerUI open={open} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {children}
      </main>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
