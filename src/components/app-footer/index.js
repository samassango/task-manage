import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./index.css";

const AppFooter = () => (
  <div className="footer">
    <Typography variant="body2" color="inherit" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Ghost The Dev
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  </div>
);
export default AppFooter;
