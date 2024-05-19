import { configureStore } from "@reduxjs/toolkit";

import donorsReducer from "./features/donors/donorSlice";
const store = configureStore({
  reducer: {
   donors : donorsReducer 
  },
});

export default store;
