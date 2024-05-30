
const ContactReducer = (state, action) => {
    switch (action.type) {
        case "SAVE_CONTACT":
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
            }

        case "DELETE":
            return {
                ...state,
                contacts: state.contacts.filter((item) => item.id !== action.payload)
            }

    }


}

export default ContactReducer;