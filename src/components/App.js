import { Box, Button, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { data } from "../helpers/data";
import AuthCopy from "./AuthCopy";

let authorization =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE2MTE0ODkxMzZ9.jEt17y4nwu7s_x-JOwgMlu66kSAtpyIfiG1hxQ3vYW0";

const App = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("/sales_customers", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer + ${authorization}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setCustomers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  const postCustomer = () => {
    axios
      .post("/sales_customers", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer + ${authorization}`,
        },
      })
      .then((res) => {
        console.log("Data sent");
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box>
      <AuthCopy />
      <Box>
        {customers.map((customer, i) => {
          return (
            <Box
              key={i}
              style={{ border: "1px solid red", marginBottom: "10px" }}
            >
              <Typography variant="body1">{customer.name}</Typography>
              <Typography variant="body1">{customer.business_email}</Typography>
            </Box>
          );
        })}
      </Box>
      <Button onClick={postCustomer}>Post Customer Detail</Button>
    </Box>
  );
};

export default App;
