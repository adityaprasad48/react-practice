import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";

const CLists = () => {
  return (
    <List>
      <ListItem>
        <ListItemText>
          <Typography component="body1">Name</Typography>
          <Typography component="body1">Email</Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default CLists;
