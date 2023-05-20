"use client";

import { styled } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const Title = styled("div")(({ theme }) => ({}));

const Subtitle = styled("div")(({ theme }) => ({
  fontSize: theme.spacing(1.25),
  color: theme.palette.grey[700],
}));

const RecordTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
    </Wrapper>
  );
};

export { RecordTitle };
