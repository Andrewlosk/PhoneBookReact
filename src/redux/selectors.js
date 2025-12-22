

export const selectContactsArray = (state) => state.contacts.ids.map((id) => state.contacts.entities[id]);

export const selectContactById = (id) => (state) => state.contacts.entities[id];
