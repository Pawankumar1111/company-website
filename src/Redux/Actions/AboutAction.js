import { GET_ABOUT_SUCCESS, GET_ABOUT_DEFAULT} from '../Reducers/Constant'
import axios from 'axios'

export const AboutAction = () => async(dispatch) =>{
    try{
       const {data} = await axios.get(`http://www.website.draggital.in/api/get-about`);
       dispatch({
           type:GET_ABOUT_SUCCESS,
           payload:data
       })
    }catch{
        dispatch({
            type:GET_ABOUT_DEFAULT
           
        })
    }

}