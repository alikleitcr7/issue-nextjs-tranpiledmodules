"use client";

import DoneIcon from "@mui/icons-material/Done";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Theme, styled } from "@mui/material/styles";
import { MessageType, MessageTypeColor } from "@products/types";
import * as React from "react";

export type MessageDialogProps = {
  title: string;
  message?: MessageType;
  disabled?: boolean;
};

export interface Props extends MessageDialogProps {
  open: boolean;
  className?: string;
  closeLabel?: string;
  onClose: () => void;
}

const getColor = ({
  theme,
  type,
}: {
  theme: Theme;
  type?: MessageTypeColor;
}) => {
  switch (type) {
    case "success":
      return theme.palette.success.main;
    case "warning":
      return theme.palette.warning.main;
    case "error":
      return theme.palette.error.main;
    case "info":
      return theme.palette.grey[500];
    default:
      return undefined;
  }
};

const DialogHeadIcon = styled("div")(({ theme }) => ({
  width: theme.spacing(3),
  textAlign: "left",
}));

const DialogHeadLabel = styled("div")(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(0, 1),
}));

const DialogContent = styled("div")(({ theme }) => ({
  width: theme.spacing(40),
  padding: theme.spacing(2),
}));

const DialogHead = styled(DialogTitle)<{ type?: MessageTypeColor }>(
  ({ theme, type }) => ({
    borderBottom: "4px solid",
    borderColor: getColor({ theme, type }),
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    display: "flex",
    svg: {
      // display: "inline-block",
      transform: "translateY(2.5px)",
      color: getColor({ theme, type }),
      fontSize: theme.spacing(3),
    },
  })
);

const getIcon = (type?: MessageTypeColor) => {
  switch (type) {
    case "success":
      return <DoneIcon />;
    case "info":
      return <InfoOutlinedIcon />;
    case "warning":
      return <WarningAmberIcon />;
    case "error":
      return <ErrorOutlineIcon />;
    default:
      return null;
  }
};

export const MessageDialog: React.FC<React.PropsWithChildren<Props>> = ({
  open,
  title,
  onClose,
  className,
  closeLabel,
  disabled,
  message,
  children,
}) => {
  return (
    <Dialog
      className={className}
      // fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      // aria-labelledby="responsive-dialog-title"
    >
      <DialogHead type={message?.type}>
        <DialogHeadIcon>{getIcon(message?.type)}</DialogHeadIcon>
        <DialogHeadLabel>{title}</DialogHeadLabel>
      </DialogHead>
      <DialogContent>
        {message?.message}
        {children}
      </DialogContent>
      <DialogActions>
        <Button size="small" autoFocus onClick={onClose} disabled={disabled}>
          {closeLabel ?? "Close"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
