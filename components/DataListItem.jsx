/* eslint-disable*/
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Box } from "@material-ui/core";
import Typography from "@mui/material/Typography";

const DataListItem = (props) => {
  const names = props.names || [];

  return (
    <Box
      sx={{
        display: "block",
        minHeight: "100vh",
        height: "100%",
        width: "100%",
      }}
    >
      {names.map((item) => (
        // add key
        <Card
          key={item.id}
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "no-wrap",
            flexGrow: "1",
            flexShrink: "0",
            flexBasis: "100%",
            height: "auto",
            minHeight: "50px",
            height: "100%",
            width: "100%",
          }}
        >
          <CardContent>
            <span
              style={{
                width: "50px",
                height: "50px",
                alignSelf: "flex-start",
                display: "inline-block",
              }}
            >
              <img
                src={item.thumbnailUrl}
                style={{ width: "100%", height: "100%" }}
              ></img>
            </span>
            <Typography variant="h5" display="insilne-block">
              {item.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default DataListItem;
