import { withStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";
const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#b2dfdb",
  },
  barColorPrimary: {
    backgroundColor: "#255aa8",
  },
})(LinearProgress);

export default ColorLinearProgress;
