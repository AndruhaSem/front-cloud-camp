import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import "../../styles/progress-bar.css";
import ExecutedBarIcon from "../icons/executedBarIcon";
import NexBarIcon from "../icons/nextBarIcon";
import CurrentBarIcon from "../icons/currentBarIcon";

const ProgressBar = ({ maxSteps, step }) => {
  const points = _.range(1, maxSteps + 1);
  const i = _.range(1, maxSteps);

  return (
    <div className="create-progres__bar">
      <div className="progress-point">
        {points.map((point) => (
          <div className="point" key={point}>
            {step < point && <NexBarIcon />}
            {point === step && <CurrentBarIcon />}
            {step > point && <ExecutedBarIcon />}

            <span className={"point-span " + (point <= step ? "active" : "")}>
              {point}
            </span>
          </div>
        ))}
      </div>
      <div className="progres"></div>
      <div className="container-made">
        {i.map((el) => (
          <div
            key={el}
            className={"made " + (el <= step - 1 ? "active" : "")}
          ></div>
        ))}
      </div>
    </div>
  );
};
ProgressBar.propTypes = {
  maxSteps: PropTypes.number,
  step: PropTypes.number,
};
export default ProgressBar;
