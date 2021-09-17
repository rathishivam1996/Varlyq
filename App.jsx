import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Paper from "@mui/material/Paper";

import store from "./redux/store";
import NavBar from "./components/NavBar";
import PageContent from "./components/PageContent";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <Paper
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "no-wrap",
            flexGrow: "1",
            flexShrink: "0",
            flexBasis: "100%",
            minHeight: "100vh",
            height: "100%",
            // backgroundColor: "red",
            width: "80%",
            marginRight: "auto",
            marginLeft: "auto",
            // overflow: "auto",
            alignItems: "centre",
            justifyContent: "flex-start",
            padding: "20px",
          }}
        >
          <NavBar />
          <PageContent />
        </Paper>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
