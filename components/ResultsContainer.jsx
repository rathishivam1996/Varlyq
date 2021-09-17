/* eslint-disable react/prop-types */
import React from "react";
import { Box } from "@material-ui/core";
import DataListItem from "./DataListItem";

const ResultsContainer = (props) => {
  const { data, error } = props;

  return error ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "no-wrap",
        flexGrow: "1",
        flexShrink: "0",
        flexBasis: "100%",
        minHeight: "100vh",
        height: "100%",
        // backgroundColor: "green",
        width: "100%",
        // overflow: "auto",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: "20px",
      }}
    >
      <p>Error: {error.message}</p>
    </Box>
  ) : (
    <DataListItem names={data} />
  );
};

export default ResultsContainer;
