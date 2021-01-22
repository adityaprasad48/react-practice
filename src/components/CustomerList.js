import {
  Badge,
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { authorization } from "../helpers/helperMethods";

const CustomerList = ({ data }) => {
  // console.log("data from customerlist", data);

  const [customers, setCustomers] = useState([]);
  const [inputs, setInputs] = useState({ searchName: "", searchNumber: "" });


  useEffect(() => {
    // axios
    //   .get("/sales_customers", {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json; charset=utf-8",
    //       Authorization: `Bearer + ${authorization}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     setCustomers(res.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    handleFilter();

    // console.log(data);
  }, [inputs]);

  console.log("data from", customers);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // handleFilter();
  };

  const handleFilter = () => {
    console.log("called");
    let updated = customers.filter((customer) =>
      customer.name.toLowerCase().includes(inputs.searchName.toLowerCase())
    );
    setCustomers(updated);
  };

  console.log(inputs);

  return (
    <Box>
      <input
        type="text"
        placeholder="Search Name"
        name="searchName"
        value={inputs.searchName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Search Number"
        name="searchNumber"
        value={inputs.searchNumber}
        onChange={handleChange}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>SNO.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Markup</TableCell>
            <TableCell>Discount</TableCell>
          </TableHead>
          <TableHead>
            {customers.map((item, index) => (
              <TableRow>
                <TableCell>
                  <Badge badgeContent={item.id} color="secondary">
                    {index + 1}
                  </Badge>
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.business_email}</TableCell>
                <TableCell>{item.poc_phone_number}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.markups}</TableCell>
                <TableCell>{item.discount}</TableCell>
              </TableRow>
            ))}
          </TableHead>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomerList;
