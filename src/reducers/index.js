import { combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"

import employeeReducer from "./employee"
import contactsReducer from "./contacts"

export default combineReducers({
    data: employeeReducer,
    contacts: contactsReducer
})

export const middlewares = applyMiddleware(
    thunk,
    logger,
)