import { createAction, createReducer } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");

export const deleteContact = createAction("contacts/deleteContact");

export const contactsReducer = createReducer( {
    contacts: {
		items: []
	},
}, (builder) => {
    builder.addCase('contacts/addContact', (state, action) => {
        state.value.push(action.payload)
    })
        .addCase('contacts/deleteContact', (state, action) => {
            
        })
})

