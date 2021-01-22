import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, removeCustomer, selectCustomers } from "./nameSlice";

const NameList = () => {
  const customerNames = useSelector(selectCustomers);
  const dispatch = useDispatch();
  console.log(customerNames);
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCustomer({ name: customerName }));
    setCustomerName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
      {customerNames &&
        customerNames.map((customer) => <div>{customer.name}</div>)}

      <button onClick={() => dispatch(removeCustomer({ id: 1 }))}>
        Remove Customer
      </button>
    </div>
  );
};

export default NameList;
