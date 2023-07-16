/*import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import toolkitSli
import { toolkitSlice } from "./reducers";
const rootReducer=combineReducers({
 toolkit: toolkitSlice
})
export const store=configureStore({
  reducer: rootReducer
}) */



import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import { toolkitSlice } from "./reducers";
import { toolkitSlice } from "./reducers";
/*
const rootReducer=combineReducers({
  toolkit: toolkitSlice
}) */
const rootReducer = combineReducers({
  toolkit: toolkitSlice.reducer
});
/*
export const store=configureStore({
  reducer: rootReducer
})
 */
export const store = configureStore({
  reducer: rootReducer
});




