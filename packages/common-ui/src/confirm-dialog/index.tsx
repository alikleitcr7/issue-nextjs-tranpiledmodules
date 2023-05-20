"use client";

import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled, useTheme } from "@mui/material/styles";
import { MessageType } from "@products/types";
import * as React from "react";
import { CancelButton } from "../buttons/CancelButton";
import { DeleteButton } from "../buttons/DeleteButton";
import { SaveButton } from "../buttons/SaveButton";

export type ConfirmDialogBaseProps = {
  open: boolean;
  title: string;
  className?: string;
  isSaving?: boolean;
  isLoading?: boolean;
  message?: MessageType;
  cancelLabel?: string;
  confirmLabel?: string;
  cancelDisabled?: boolean;
  confirmDisabled?: boolean;
  isDeletion?: boolean;
};

export type ConfirmDialogProps = ConfirmDialogBaseProps & {
  onCancel: () => void;
  onConfirm: () => void;
};

const Actions = styled(DialogActions)(() => ({}));

export const ConfirmDialog: React.FC<
  React.PropsWithChildren<ConfirmDialogProps>
> = ({
  open,
  title,
  onCancel,
  className,
  onConfirm,
  cancelLabel,
  confirmLabel,
  isLoading,
  isSaving,
  cancelDisabled,
  confirmDisabled,
  isDeletion,
  children,
}) => {
  const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const disableCancel = cancelDisabled || isSaving;
  const disableConfirm = confirmDisabled || isSaving || isLoading;

  return (
    <Dialog
      className={className}
      open={open}
      onClose={onCancel}
      // aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle
        sx={{
          borderBottom: children
            ? `2px solid ${theme.palette.grey[600]}`
            : undefined,
          color: theme.palette.grey[800],
          padding: children ? theme.spacing(1) : theme.spacing(2, 2, 1, 2),
          fontWeight: children ? 600 : undefined,
        }}
      >
        {title}
      </DialogTitle>
      {children ? (
        <DialogContent sx={{ padding: theme.spacing(1) }}>
          <Box mt={1}>{children}</Box>
        </DialogContent>
      ) : null}
      <Actions>
        <CancelButton autoFocus onClick={onCancel} disabled={disableCancel}>
          {cancelLabel ?? "Cancel"}
        </CancelButton>
        {isDeletion ? (
          <DeleteButton
            onClick={onConfirm}
            autoFocus
            disabled={disableConfirm}
            label={confirmLabel ?? "Confirm"}
          />
        ) : (
          <SaveButton
            onClick={onConfirm}
            autoFocus
            disabled={disableConfirm}
            label={confirmLabel ?? "Confirm"}
          />
        )}
      </Actions>
    </Dialog>
  );
};
