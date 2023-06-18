import React from "react";
import ProgressBar from "../components/pages/progressBar";
import { getStep, getMaxStep } from "../store/form";
import { useSelector } from "react-redux";
import "../styles/form-screen.css";
import "../styles/form-step-one.css";
import "../styles/form-step-two.css";
import "../styles/form-step-three.css";
import FirstStepForm from "../components/pages/firstStepForm";
import SecondStepForm from "../components/pages/secondStepForm";
import ThirdStepForm from "../components/pages/thirdStepForm";

const FormsScreen = () => {
  const step = useSelector(getStep());
  const maxSteps = useSelector(getMaxStep());
  return (
    <div className="forms-screen-container">
      <ProgressBar maxSteps={maxSteps} step={step} />
      {step === 1 && <FirstStepForm />}
      {step === 2 && <SecondStepForm />}
      {step === 3 && <ThirdStepForm />}
    </div>
  );
};

export default FormsScreen;
