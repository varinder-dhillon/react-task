import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./slices/userDataSlice";
const store = configureStore({
    reducer:{
        userDataSlice : userDataSlice
    }
})
export default store;