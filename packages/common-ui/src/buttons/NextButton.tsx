"use client";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button, ButtonProps } from "@mui/material";
import React from "react";

type NextButtonProps = ButtonProps & { label?: string };

const NextButton: React.FC<NextButtonProps> = (props) => {
  return (
    <Button
      size="small"
      endIcon={<NavigateNextIcon />}
      variant="outlined"
      color="primary"
      {...props}
    >
      {props.label ?? "Next"}
    </Button>
  );
};

export { NextButton };
