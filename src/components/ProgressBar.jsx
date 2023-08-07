import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ BMI, indication }) => {
  return (
    <CircularProgressbar
      value={BMI}
      text={`${BMI}`}
      circleRatio={0.6}
      styles={buildStyles({
        rotation: 0.7,
        strokeLinecap: "round",
        trailColor: "#eee",
        pathColor: `${indication.color}`,
        textColor: "#000",
      })}
      minValue={0}
      maxValue={40}
    />
  );
};

export default ProgressBar;
