import { GET_LOGO_SUCCESS, GET_LOGO_DEFAULT} from '../Reducers/Constant'
import axios from 'axios'

export const LogoAction = () => async(dispatch) =>{
    try{
       const {data} = await axios.get(`http://www.website.draggital.in/api/get-logo`);
       dispatch({
           type:GET_LOGO_SUCCESS,
           payload:data
       })
    }catch{
        dispatch({
            type:GET_LOGO_DEFAULT
           
        })
    }

}