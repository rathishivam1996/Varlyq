/* eslint-disable  */
import { Box } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import ResultsContainer from "./ResultsContainer";

const PageContent = (props) => {
  const { list, error, isFetching, searchTerm } = props;

  const filteredItems = list.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
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
        // backgroundColor: "white",
        width: "100%",
        // overflow: "auto",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: "20px",
      }}
    >
      {isFetching ? (
        <div>
          <p>Fetching...</p>
        </div>
      ) : (
        <ResultsContainer data={filteredItems} error={error} />
      )}
    </Box>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  const { list } = state.data;
  const { searchTerm } = state.searchTerm;
  console.log(
    `data ${JSON.stringify(list, null, 4)} search ${JSON.stringify(
      searchTerm,
      null,
      4
    )}`
  );

  return { ...state.data, searchTerm };
};

export default connect(mapStateToProps)(PageContent);
