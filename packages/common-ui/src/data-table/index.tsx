"use client";

import {
  Box,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { ActionButtons, ActionButtonsProps } from "../action-buttons";
// import { AddButton } from "../buttons";
import { ConfirmDialog } from "../confirm-dialog";
import { MessageDialog, MessageDialogProps } from "../message-dialog";

type TBase = {
  [key: string]: any;
  id: string | number;
};

export interface IDataTableColumn<T extends TBase> {
  field: keyof T;
  name: string;
  render?: (row: T) => string | React.ReactNode;
}

export interface IDataTable<T extends TBase> {
  name: string;
  isLoading?: boolean;
  onAddClick?: () => void;
  onAddTo?: string;
  columns: IDataTableColumn<T>[];
  title?: string;
  rows: T[];
  actions?: Omit<ActionButtonsProps<T>, "data">;
  pagination?: {
    page: number;
    countPerPage: number;
    totalCount: number;
    onChange: (page: number) => void;
  };
}

const DataTable = <T extends TBase>({
  name,
  columns,
  onAddClick,
  onAddTo,
  rows,
  actions,
  pagination,
}: IDataTable<T>) => {
  const [removal, setRemoval] = useState<T | undefined>();
  const [message, setMessage] = useState<MessageDialogProps | undefined>();

  const handleRemove = () => {
    setRemoval(undefined);

    setMessage({
      title: "Deletion in Progress",
      message: {
        message: <Typography variant="body1">Please wait...</Typography>,
        type: "info",
      },
      disabled: true,
    });

    const remove = actions?.remove;

    if (!remove || !remove.onConfirm) return;

    remove
      .onConfirm(removal)
      .then((x) => {
        setMessage({
          title: "Deletion Successful",
          message: {
            message: (
              <Typography variant="body1">
                Record was deleted successfully
              </Typography>
            ),
            type: "success",
          },
          disabled: false,
        });
      })
      .catch((e) => {
        setMessage({
          title: "Unable to delete",
          message: {
            message: (
              <Typography variant="body1">Unable to delete record</Typography>
            ),
            type: "error",
          },
          disabled: false,
        });
      });
  };

  const pagesCount = useCallback(() => {
    return pagination && pagination.totalCount && pagination.countPerPage
      ? Math.ceil(pagination.totalCount / pagination.countPerPage)
      : undefined;
  }, [pagination]);

  return (
    <>
      {removal ? (
        <ConfirmDialog
          title="Confirm Deletion"
          open={true}
          isDeletion={true}
          confirmLabel="Delete"
          onCancel={() => setRemoval(undefined)}
          onConfirm={handleRemove}
        >
          {actions?.remove?.comment ? (
            actions?.remove?.comment(removal)
          ) : (
            <Typography>Are you sure you want to delete?</Typography>
          )}
        </ConfirmDialog>
      ) : null}

      {message && (
        <MessageDialog
          {...message}
          onClose={() => setMessage(undefined)}
          open={true}
        />
      )}
      {/* 
      {onAddClick || onAddTo ? (
        <Box mb={2}>
          {onAddClick && <AddButton onClick={onAddClick} />}
          {onAddTo && (
            <Link href={onAddTo}>
              <AddButton />
            </Link>
          )}
        </Box>
      ) : null} */}

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader sx={{ minWidth: 650 }} size="small">
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return (
                    <TableCell
                      key={`${name}-column-${column.field.toString()}`}
                    >
                      {column.name}
                    </TableCell>
                  );
                })}

                {actions && <TableCell></TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row, rowIndex) => {
                return (
                  <TableRow
                    key={`${name}-row-${rowIndex}`}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {columns.map((column, columnIndex) => (
                      <TableCell
                        align="left"
                        key={`${name}-row${rowIndex}-col${columnIndex}`}
                      >
                        {column.render ? column.render(row) : row[column.field]}
                      </TableCell>
                    ))}

                    {actions && (
                      <TableCell>
                        <ActionButtons
                          {...actions}
                          remove={
                            actions.remove
                              ? {
                                  onClick: (data) => {
                                    setRemoval(data);
                                  },
                                }
                              : undefined
                          }
                          data={row}
                        />
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        {pagination && pagesCount() && (
          <Box mt={2} mb={1}>
            <Pagination
              size="small"
              color="primary"
              count={pagesCount()}
              onChange={(_, page) => pagination.onChange(page)}
            />
          </Box>
        )}
      </Paper>
    </>
  );
};

export { DataTable };
