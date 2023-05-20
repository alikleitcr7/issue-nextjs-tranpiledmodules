"use client";

import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

type Props = {
  steps: string[];
  activeStep: number;
};

const StepperSteps: React.FC<Props> = ({ activeStep, steps }) => {
  return (
    <Stepper activeStep={activeStep}>
      {steps.map((label, index) => {
        return (
          <Step key={`step-${label}-${index}`}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export { StepperSteps };
