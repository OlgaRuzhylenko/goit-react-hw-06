// import { createAction, createReducer,  } from "@reduxjs/toolkit";
import {createSlice  } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const contactsSlice = createSlice({
  name: "contacts",
initialState: {
  contacts: 
  [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
},

  reducers: {
      addContact: {
        reducer(state, action) {
          state.contacts = [...state.contacts, action.payload]
        },
        prepare(name, number) {
          return {
            payload: {
              id: nanoid(),
              name, 
             number,
            },
          };
      }
    },
    
    deleteContact(state, action) {
            const index = state.contacts.findIndex((contact) => contact.id === action.payload);
      state.contacts.splice(index, 1)
    }
  }
})
export const {addContact, deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;

export const selectContacts  = (state) => state.contacts.contacts;


// const contactsInitialState = [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ]

//   export const contactsReducer = (state = contactsInitialState, action) => {
//     switch (action.type){
//         case addContact.type:
//             return [...state, action.payload];
//         case deleteContact.type:
//             return state.filter((contact) => contact.id !== action.payload);
//             default: return state;
//             }
//   }
//   export const addContact = createAction('contacts/addContact', (id, name, number) => {
//     return {
//         payload: {
//             id: nanoid(),
//             name, 
//             number,
//         }
//     }
//   });

// export const deleteContact = createAction("contacts/deleteContact")

// export const contactsReducer = createReducer( contactsInitialState, builder => {
//     builder
//     .addCase(addContact, (state, action) => {
//         // return [...state, action.payload]
//         state.push(action.payload);
//     })
//     .addCase(deleteContact, (state, action) => {
//         // return state.filter((contact) => contact.id !== action.payload)
//         const index = state.findIndex((contact) => contact.id === action.payload);
//         state.splice(index, 1)
//     })
// })

