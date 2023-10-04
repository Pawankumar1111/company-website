import { GET_LOGO_SUCCESS, GET_LOGO_DEFAULT} from './Constant'

export const GetLogoReducer = (state = {}, action) => {
    switch (action.type) {
       case GET_LOGO_SUCCESS:
           return{
               loading:false,
               logos:action.payload
           }
           case GET_LOGO_DEFAULT:
               return{
                   loading:true
                   
               }
    }
    return state;
}
