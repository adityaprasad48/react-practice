import { Box, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Counter from "./counter/Counter";
import NameList from "./name/NameList";
import Posts from "./posts/Posts";

let authorization =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE2MTEzNzA0NDl9.BXWkPq68QT8bNnx5u9UdZu90e0TfRq9PAd4WcDOK4rA";

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

  return (
    <Box>
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
      <Counter />
      
      <NameList/>
      <Posts/>
      
    </Box>
  );
};

export default App;
