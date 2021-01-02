import { FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_FAIL, FETCH_EMPLOYEE_REQUEST } from "../actions/employee"

const initialState = {
    loading: false,
    employee: [],
    error: ''
}

const employeeReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_EMPLOYEE_SUCCESS:
            return {
                loading: false,
                employee: action.payload,
                error: ''
            }
        case FETCH_EMPLOYEE_FAIL:
            return {
                loading: false,
                employee: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default employeeReducer