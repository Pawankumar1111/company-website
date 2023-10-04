import { GET_BOTTOM_SERVICE_SUCCESS, GET_BOTTOM_SERVICE_DEFAULT} from './Constant'

export const GetBottomServReducer = (state = {}, action) =>{
    switch (action.type) {
        case GET_BOTTOM_SERVICE_SUCCESS:
            return{
                loading:false,
                bottoms:action.payload
            }
            case GET_BOTTOM_SERVICE_DEFAULT:
                return{
                    loading:true
                }

    }
    return state;

}
