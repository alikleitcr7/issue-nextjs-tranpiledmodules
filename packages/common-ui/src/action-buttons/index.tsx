"use client";

import ArticleIcon from "@mui/icons-material/Article";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Tooltip, styled } from "@mui/material";
import Link from "next/link";
import React from "react";

export type ActionButtonProps<T> = {
  tooltip?: (data?: T) => string;
  to?: (data?: T) => string;
  onClick?: (data?: T) => void;
};

export type RemoveActionButtonProps<T> = {
  tooltip?: (data?: T) => string;
  to?: (data?: T) => string;
  onClick?: (data?: T) => void;
  onConfirm?: (data?: T) => Promise<boolean>;
  comment?: (data?: T) => any;
};

export type ActionButtonsProps<T> = {
  edit?: ActionButtonProps<T>;
  remove?: RemoveActionButtonProps<T>;
  details?: ActionButtonProps<T>;
  data?: T;
};

const Wrapper = styled("div")<any>(({}) => ({
  display: "flex",
}));

const ActionButton = <T extends unknown>({
  tooltip,
  onClick,
  data,
  to,
  children,
}: ActionButtonProps<T> & { data?: T; children: React.ReactNode }) => {
  return (
    <Tooltip title={tooltip ? tooltip(data) : ""}>
      {to ? (
        <Link href={to(data)}>
          <IconButton>{children}</IconButton>
        </Link>
      ) : (
        <IconButton onClick={onClick ? () => onClick(data) : undefined}>
          {children}
        </IconButton>
      )}
    </Tooltip>
  );
};

const ActionButtons = <T extends unknown>({
  data,
  edit,
  remove,
  details,
}: ActionButtonsProps<T>) => {
  return (
    <Wrapper>
      {edit && (
        <ActionButton {...edit} data={data}>
          <EditIcon />
        </ActionButton>
      )}
      {remove && (
        <ActionButton
          {...remove}
          data={data}
          onClick={() =>
            remove.onClick
              ? remove.onClick(data)
              : remove.onConfirm
              ? remove.onConfirm(data)
              : undefined
          }
        >
          <DeleteIcon />
        </ActionButton>
      )}
      {details && (
        <ActionButton {...details} data={data}>
          <ArticleIcon />
        </ActionButton>
      )}
    </Wrapper>
  );
};

export { ActionButtons };
