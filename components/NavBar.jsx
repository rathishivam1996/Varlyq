/* eslint-disable  */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchItem from "./SearchItem";
import { fetchDataNames } from "../redux/actions/dataActions";
import { dispatchSetSearchTerm } from "../redux/actions/searchActions";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box } from "@material-ui/core";

// If you don't specify the second argument to connect(), your component will receive dispatch by default. For example:
// function Counter({ count, dispatch })
// Therefore, instead of calling props.dispatch(() => increment()), you may call props.increment() directly
//  if you define your own mapDispatchToProps, the connected component will no longer receive dispatch.
const NavBar = (props) => {
  const fetchDataName = () => props.fetchDataNames("data");

  const simulateError = () => props.fetchDataNames("error");

  useEffect(() => {
    props.fetchDataNames("data");
    // return () => {
    //   cleanup
    // }
  }, []);

  const handleNavSearch = (event) => {
    props.dispatchSetSearchTerm(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "no-wrap",
        flexGrow: "1",
        flexShrink: "0",
        flexBasis: "100%",
        minHeight: "100%",
        height: "auto",
        // backgroundColor: "red",
        width: "100%",
      }}
    >
      <SearchItem id="search" onInputChange={handleNavSearch} />
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={fetchDataName}>
          Fetch Data
        </Button>
        <Button variant="outlined" onClick={simulateError}>
          Simulate Error
        </Button>
      </Stack>
      {/* <button type="button" onClick={fetchDataName} onClick={simulateError}>
        Fetch Names
      </button>
      <button type="button" onClick={simulateError}>
        Simulate Error
      </button> */}
    </Box>
  );
};

const mapActionsToProps = {
  fetchDataNames,
  dispatchSetSearchTerm,
};

export default connect(null, mapActionsToProps)(NavBar);
