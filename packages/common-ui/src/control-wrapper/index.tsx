"use client";

import { ErrorOutlined } from "@mui/icons-material";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { Tooltip, styled } from "@mui/material";
import React, { PropsWithChildren } from "react";

const Container = styled("div")(({ theme }) => ({
  position: "relative",
}));

const TooltipWrapper = styled("div")<{
  isError: boolean;
  isSelect: boolean;
  messageRight?: string;
}>(({ theme, isError, isSelect, messageRight }) => ({
  position: "absolute",
  top: "1em",
  right: messageRight ? messageRight : isSelect ? "2em" : "1em",
  cursor: "pointer",
  color: isError ? "red" : "black",
}));

type Props = {
  error?: string;
  info?: string;
  isSelect?: boolean;
  messageRight?: string;
  showMessage?: boolean;
} & PropsWithChildren;

const ControlWrapper: React.FC<Props> = ({
  error,
  info,
  children,
  isSelect,
  showMessage,
  messageRight,
}) => {
  return (
    <Container>
      {children}
      {showMessage && (error || info) && (
        <TooltipWrapper
          isError={error !== undefined}
          isSelect={isSelect ?? false}
          messageRight={messageRight}
        >
          <Tooltip title={error || info}>
            {info ? <InfoOutlined /> : <ErrorOutlined />}
          </Tooltip>
        </TooltipWrapper>
      )}
    </Container>
  );
};

export { ControlWrapper };
