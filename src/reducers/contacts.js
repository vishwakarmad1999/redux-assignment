import { APPEND_DATA } from "../actions/contacts"

const contactsReducer = (state=[], action) => {
    switch (action.type) {
        case APPEND_DATA:
            return [...state, action.payload]
        default:
            return state
    }
}

export default contactsReducer