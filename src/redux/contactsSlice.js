import { createSlice } from '@reduxjs/toolkit';

const initiateContacts = () =>
    JSON.parse(localStorage.getItem('LOCALSTORAGE_KEY')) || [];

const initialState = {
  contacts: initiateContacts(),
  filter: "",
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(c => c.id !== action.payload);
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const {addContact, deleteContact, filterContacts} = contactsSlice.actions;

export default contactsSlice.reducer;