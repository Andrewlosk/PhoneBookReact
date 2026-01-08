

export const selectContactsArray = (state) => {
  const all = state.contacts.ids.map((id) => state.contacts.entities[id]);
  const owner = state.auth?.user?.email || null;
  if (!owner) return all;
  return all.filter((c) => c.owner === owner);
};

export const selectContactById = (id) => (state) => state.contacts.entities[id];
