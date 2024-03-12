import { createSlice } from '@reduxjs/toolkit';

import { addContact, fetchContacts, removeContact } from './operations';

const statusPending = state => {
  state.isLoading = true;
  state.error = null;
};

const statusRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const statusFinally = state => {
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: statusPending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: statusRejected,

    [addContact.pending]: statusPending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state = state.items.push(action.payload);
    },
    [addContact.rejected]: statusRejected,

    [removeContact.pending]: statusPending,
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(contact => {
        return contact.id !== action.payload.id;
      });
    },
    [removeContact.rejected]: statusRejected,
    [removeContact.finally]: statusFinally,
  },
});

export const contactsReducer = contactsSlice.reducer;
