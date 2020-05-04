import { withStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";
const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#b2dfdb",
  },
  barColorPrimary: {
    backgroundColor: "#00695c",
  },
})(LinearProgress);

export default ColorLinearProgress;
