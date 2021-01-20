import { Box, Button, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getNumber, randomElement } from "../helpers";

let authorization =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE2MTExMzU5MzV9.75GaISRSGqHZ0JAHqHrlTrfgIR3q_S69psKyeSecsU8";

const App = () => {
  let sameName = randomElement;

  const data = {
    sales_customer: {
      name: sameName,
      sales_person_id: 4,
      client_type: 1,
      street_address: "South Avalon Glitz park",
      city: "Banguluru",
      state: "Karnatka",
      zipcode: "560003",
      country: "India",
      business_phone_number: getNumber(),
      business_whatsapp_number: getNumber(),
      business_email: `${sameName}@gmail.com`,
      poc_name: sameName,
      poc_phone_number: getNumber(),
      poc_whatsapp_number: getNumber(),
      poc_email: `${sameName}@gmail.com`,
      preferred_phone_number: true,
      preferred_whatsapp_number: true,
      preferred_email: true,
      status_id: 1,
      notes: "Hi there its me who is going to be your first customer",
      card_details: "123456789",
      // success_status: true,
      discount: 0,
      markups: 40.85,
      save_cards_attributes: [
        {
          customer_id: 1,
          card_number: getNumber(),
          exp_month: "12",
          exp_year: "2021",
          cvv: "123",
          card_holder_name: sameName,
          set_primary: true,
        },
        {
          customer_id: 1,
          card_number: getNumber(),
          exp_month: "12",
          exp_year: "2021",
          cvv: "123",
          card_holder_name: randomElement,
          set_primary: false,
        },
      ],
    },
  };

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

    // console.log(data);
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
        // console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("Data sent");
  };

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
      <Button onClick={postCustomer}>Post Customer Detail</Button>
    </Box>
  );
};

export default App;
