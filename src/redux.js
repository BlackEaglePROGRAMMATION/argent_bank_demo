import { configureStore, createSlice } from "@reduxjs/toolkit";

const base = {
    id: '',
    token: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userName: '',
    createdAt: '',
    updatedAt: ''
};

const userSlice = createSlice({
    name: "user",
    initialState: base,
    reducers: {
        addProfil: (state, action) => {
            state = { ...action.payload };
            return state
        },   
        editName: (state, action) => {
            state.userName = action.payload;
            return state;
        },
        deleteProfil: (state) => {
            state = base;
            return state;
        }
    }
})

export const { addProfil, editName, deleteProfil } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
});