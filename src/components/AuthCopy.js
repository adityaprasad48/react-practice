import { Box, IconButton, InputBase } from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import React from "react";

const AuthCopy = () => {
  return (
    <Box style={{display: 'flex', justifyContent: 'center'}}>
      <InputBase
        style={{ border: "1px solid gray", width: '200px' }}
        placeholder="Auth Token Genrator"
        startAdornment={
          <IconButton>
            <InfoOutlined />
          </IconButton>
        }
        endAdornment={
          <IconButton>
            <InfoOutlined />
          </IconButton>
        }
      />
    </Box>
  );
};

export default AuthCopy;
