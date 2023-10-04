// import {
//     GET_BLOG_REQUEST,
//     GET_BLOG_SUCCESS,
//     GET_BLOG_FAIL
// } from '../Reducers/Constant';
// import axios from 'axios'


// export const blogAction =()=> async(dispatch) =>{
//     try{
//         dispatch({
//             type:GET_BLOG_REQUEST,
//             loading:true
//         })
//         const {data} = await axios.get(`http://draggitalserver-env.eba-mmgxmkyc.us-east-2.elasticbeanstalk.com/api/get-latest-blogs`);
//         //console.log(data)
//     dispatch({
//         type:GET_BLOG_SUCCESS,
//         payload:data
        
//     })
//     }catch(error){
//         dispatch(
//            { type: GET_BLOG_FAIL,
//             payload:error
//         }
//         )
//     }
    
// }



import { GET_BLOG_SUCCESS, GET_BLOG_DEFAULT} from '../Reducers/Constant'
import axios from 'axios'

export const BlogAction = () => async(dispatch) =>{
    try{
       const {data} = await axios.get(`http://www.website.draggital.in/api/get-latest-blogs`);
       dispatch({
           type:GET_BLOG_SUCCESS,
           payload:data
       })
    }catch{
        dispatch({
            type:GET_BLOG_DEFAULT
           
        })
    }

}
