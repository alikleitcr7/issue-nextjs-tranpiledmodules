"use client";

import MUIAddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import React from "react";

type AddIconProps = {
  isActive: boolean;
};

const AddIcon = styled(MUIAddIcon, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<AddIconProps>(({ theme, isActive }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1 / 2),
  display: "inline-block",
  transform: isActive ? "rotate(45deg)" : "unset",
  opacity: 0.5,
  transition: "opacity .2s, transform .35s",
  cursor: "pointer",
  "&:hover": {
    opacity: 1,
  },
}));

type Props = {
  isActive: boolean;
  className?: string;
  onActive?: () => void;
  onClear?: () => void;
};

const AddRemoveIcon: React.FC<Props> = ({
  isActive,
  onClear,
  onActive,
  className,
}) => {
  const handleClick = () => {
    if (isActive) {
      if (onClear) onClear();
    } else {
      if (onActive) onActive();
    }
  };

  return (
    <AddIcon isActive={isActive} onClick={handleClick} className={className} />
  );
};

export { AddRemoveIcon };
