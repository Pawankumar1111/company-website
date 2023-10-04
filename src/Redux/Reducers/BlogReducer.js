// import {
//     GET_BLOG_REQUEST,
//     GET_BLOG_SUCCESS,
//     GET_BLOG_FAIL
// } from './Constant';

// export const getBlogReducer = (state = {}, action) => {
//     switch (action.type) {
//         case GET_BLOG_REQUEST:
//             return {
//                 loading: true
//             }
//         case GET_BLOG_SUCCESS:
//             return {
//                 loading: false,
//                 blogs: action.payload
//             }
//         case GET_BLOG_FAIL:
//             return {
//                 loading: false,
//                 error: action.payload
//             }
//     }
//     return state
// }



import { GET_BLOG_SUCCESS, GET_BLOG_DEFAULT} from './Constant'

export const GetBlogReducer = (state = {}, action) => {
    switch (action.type) {
       case GET_BLOG_SUCCESS:
           return{
               loading:false,
               blogs:action.payload
           }
           case GET_BLOG_DEFAULT:
               return{
                   loading:true
                   
               }
    }
    return state;
}
