"use client";

import SaveOutlined from "@mui/icons-material/SaveOutlined";
import { Button, styled } from "@mui/material";
import React from "react";

type ActionType = {
  label?: string;
  onClick: () => void;
};

type Props = {
  save?: ActionType;
  cancel?: ActionType;
};

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  "& > a, button": {
    margin: theme.spacing(1, 1, 1, 0),
  },
}));

const FormActionBar: React.FC<Props> = ({ save, cancel }) => {
  return (
    <Wrapper>
      {save && (
        <Button
          size="small"
          startIcon={<SaveOutlined />}
          variant="contained"
          color="primary"
          onClick={save.onClick}
        >
          {save.label ?? "Save"}
        </Button>
      )}
      {cancel && (
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={cancel.onClick}
        >
          {cancel.label ?? "Cancel"}
        </Button>
      )}
    </Wrapper>
  );
};

export { FormActionBar };
