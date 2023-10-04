import { GET_SERVICE_REQUEST, GET_SERVICE_SUCCESS, GET_SERVICE_FAIL } from './Constant'

export const getServiceReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SERVICE_REQUEST:
            return {
                loading: true
            }
        case GET_SERVICE_SUCCESS:
            return {
                loading: false,
                services: action.payload
            }
        case GET_SERVICE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
    }
    return state;
}