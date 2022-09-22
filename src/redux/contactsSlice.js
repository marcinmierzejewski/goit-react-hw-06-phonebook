import { createSlice } from '@reduxjs/toolkit';

const initiateContacts = () =>
    JSON.parse(localStorage.getItem('LOCALSTORAGE_KEY')) || [];

const initialState = {
  items: initiateContacts(),
}
  
  // filter: "",


const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(({id}) => id !== action.payload);
    },
  }
});

export const {addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;