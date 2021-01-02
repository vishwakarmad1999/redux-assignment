import axios from "axios"

export const FETCH_EMPLOYEE_REQUEST = 'FETCH_EMPLOYEE_REQUEST'
export const FETCH_EMPLOYEE_SUCCESS = 'FETCH_EMPLOYEE_SUCCESS'
export const FETCH_EMPLOYEE_FAIL = 'FETCH_EMPLOYEE_FAIL'

export const fetchdata = () => {
    return (dispatch) => {
        axios.get("clientData.json")
        .then((res) => {
            dispatch(fetchSuccess(res.data.clientData))
        })
        .catch(err => {
            dispatch(fetchFailure(err))
        })
    }
}

export const fetchSuccess = (employee) => ({
    type: FETCH_EMPLOYEE_SUCCESS,
    payload: employee
})

export const fetchFailure = (error) => ({
    type: FETCH_EMPLOYEE_FAIL,
    payload: error
})