import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "";


export const store = configureStore({
reducer: {
	contacts: {
		items: []
	},
  filters: {
		name: ""
	}
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