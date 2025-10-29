import { initialState } from "./constants";

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/changeContacts":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "contacts/deleteContact":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case "contacts/findContact":
      // console.log(state.contacts.filter(
      //     (contact) => contact.name.toUpperCase().includes(action.payload.toUpperCase())
      //   ),);
      
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
