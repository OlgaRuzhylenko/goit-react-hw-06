import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../redux/contactsSlice";


export const store = configureStore({
reducer: {
	contacts: {
		contactsReducer
	},
//   filters: {
// 		name: ""
// 	}
}
})

// ось це rootReducer
// {
// 	contacts: {
// 		items: []
// 	},
//   filters: {
// 		name: ""
// 	}
// }