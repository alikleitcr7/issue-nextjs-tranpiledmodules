"use client";

import SaveOutlined from "@mui/icons-material/SaveOutlined";
import { Button, ButtonProps } from "@mui/material";
import React from "react";

type SaveButtonProps = ButtonProps & { label?: string };

const SaveButton: React.FC<SaveButtonProps> = (props) => {
  return (
    <Button
      size="small"
      startIcon={<SaveOutlined />}
      variant="contained"
      color="primary"
      {...props}
    >
      {props.label ?? "Save"} 7
    </Button>
  );
};

export { SaveButton };
