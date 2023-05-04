import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    return payload;
  }
);

export const __deleteTodo = createAsyncThunk(
  '__deleteToDo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    return payload;
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
  },
  extraReducers: (thunk) => {
    thunk
      .addCase(__addToDo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(__deleteTodo.fulfilled, (state, action) => {
        const idx = state.list.findIndex((a) => a.id === action.payload);
        state.list.splice(idx, 1);
      });
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
