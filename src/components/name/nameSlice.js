import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "customers",
  initialState: {
    id: 0,
    customerNames: [],
    value: 0
  },
  reducers: {
    addCustomer: (state, action) => {
      const { name } = action.payload;
      state.id = state.id + 1;
      state.customerNames.push({ id: state.id, name });
    },
    removeCustomer: (state, action) => {
      const { id } = action.payload;
      let removeIndex = state.customerNames.map((item) => item.id).indexOf(id);
      state.customerNames.splice(removeIndex, 1);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  addCustomer,
  removeCustomer,
  incrementByAmount,
} = nameSlice.actions;

export default nameSlice.reducer;

export const selectCustomers = (state) => state.customers.customerNames;
