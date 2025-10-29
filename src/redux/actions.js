export const changeContacts = (contact) => {
    return {
        type: "contacts/changeContacts",
        payload: contact
    }
}

export const deleteContact = (contact) => {
    return {
        type: "contacts/deleteContact",
        payload: contact
    }
}


export const findContact = (contact) => {
    return {
        type: "contacts/findContact",
        payload: contact
    }
}