"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button, ButtonProps } from "@mui/material";
import React from "react";

type Props = ButtonProps & { label?: string };

const BackButton: React.FC<Props> = (props) => {
  return (
    <Button
      size="small"
      startIcon={<ArrowBackIosNewIcon />}
      variant="outlined"
      color="primary"
      {...props}
    >
      {props.label ?? "Back"}
    </Button>
  );
};

export { BackButton };
