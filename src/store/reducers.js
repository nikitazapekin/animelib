

import { createSlice } from "@reduxjs/toolkit";

export const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
      count: 0,
      todos: ['sccf', 'dsdw', 'ddwwd'],
      window: false,
      userWindow: false,
      username: "",
    },
    reducers: {
      increment(state) {
        console.log(state.count)
        state.count = state.count + 1;
      },
      decrement(state) {
        state.count = state.count - 1;
      },
      addTodo(state, action) {
        state.todos.push(action.payload);
      },
      removeLastTodo(state) {
        state.todos.pop();
      },
    setSearchWindow(state) {
      
      if(!state.window){
        state.window=true
      }
      else {
        state.window=false
      }
      },
      setUserWindow(state) {
        if(!state.userWindow){
          state.userWindow=true
        }
        else {
          state.userWindow=false
        }
      }
    },
    setUsername(state, action){
state.username=action.payload
    }
  });
  
  export const { increment, decrement, addTodo, removeLastTodo, setSearchWindow, setUserWindow, setUsername } = toolkitSlice.actions;
  //export default toolkitSlice.reducers;
  export default toolkitSlice.reducer;


