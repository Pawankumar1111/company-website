import { GET_ABOUT_SUCCESS, GET_ABOUT_DEFAULT} from './Constant'

export const GetAboutReducer = (state = {}, action) => {
    switch (action.type) {
       case GET_ABOUT_SUCCESS:
           return{
               loading:false,
               items:action.payload
           }
           case GET_ABOUT_DEFAULT:
               return{
                   loading:true
                   
               }
    }
    return state;
}
