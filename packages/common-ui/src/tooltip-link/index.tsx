"use client";

import { Tooltip as MUITooltip, TooltipProps, styled } from "@mui/material";
import React from "react";

const StyledTooltip = styled(MUITooltip)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

const Label = styled("div")(({ theme }) => ({
  transition: "color 50ms",
  cursor: "pointer",
}));

type Props = TooltipProps;

const TooltipLink: React.FC<Props> = ({
  title,
  placement,
  children,
  ...rest
}) => {
  return (
    <StyledTooltip title={title} placement={placement} {...rest}>
      <Label>{children}</Label>
    </StyledTooltip>
  );
};

export { TooltipLink };
