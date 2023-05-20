"use client";

import AddIcon from "@mui/icons-material/Add";
import { Button, ButtonProps } from "@mui/material";
import React from "react";

type Props = ButtonProps & { label?: string };

const AddButton: React.FC<Props> = (props) => {
  return (
    <Button
      size="small"
      startIcon={<AddIcon />}
      variant="contained"
      color="primary"
      onClick={props.onClick}
      // {...props}
    >
      {props.label ?? "Add"}
    </Button>
  );
};

export { AddButton };
