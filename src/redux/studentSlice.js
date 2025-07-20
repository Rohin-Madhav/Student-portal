import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: [],
  },
  reducers: {
    setStudents: (state, action) => {
      state.list = action.payload;
    },
    deleteStudent: (state, action) => {
      state.list = state.list.filter((s) => s.id !== action.payload);
    },
    editStudent: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.list.findIndex((s) => s.id === id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...updatedData };
      }
    },
  },
});

export const { setStudents, deleteStudent, editStudent } = studentSlice.actions;
export default studentSlice.reducer;
