"use client";

import { DeleteOutline } from "@mui/icons-material";
import { Button, ButtonProps, useTheme } from "@mui/material";
import React from "react";

type Props = ButtonProps & { label?: string };

const DeleteButton: React.FC<Props> = (props) => {
  const theme = useTheme();
  return (
    <Button
      size="small"
      startIcon={<DeleteOutline color="error" />}
      variant="outlined"
      color="primary"
      sx={{
        borderColor: theme.palette.error.main,
        color: theme.palette.error.dark,
        "&:hover": {
          borderColor: theme.palette.error.dark,
        },
      }}
      {...props}
    >
      {props.label ?? "Delete"}
    </Button>
  );
};

export { DeleteButton };
