"use client";

import { Button, ButtonProps, useTheme } from "@mui/material";
import React from "react";

type Props = ButtonProps & { label?: string };

const CancelButton: React.FC<Props> = (props) => {
  const theme = useTheme();
  return (
    <Button
      size="small"
      variant="outlined"
      color="primary"
      {...props}
      sx={{
        borderColor: theme.palette.grey[400],
        color: theme.palette.grey[800],
        "&:hover": {
          borderColor: theme.palette.grey[500],
        },
      }}
    >
      {props.label ?? "Cancel"}
    </Button>
  );
};

export { CancelButton };
