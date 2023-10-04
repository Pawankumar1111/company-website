import { GET_BOTTOM_SERVICE_SUCCESS, GET_BOTTOM_SERVICE_DEFAULT} from '../Reducers/Constant'
import axios from 'axios'

export const bottomServiceAction = async(dispatch) =>{
    try{
        const {data} = await axios.get(`http://www.website.draggital.in/api/service-name-and-subservice-name`)
        dispatch({
            type:GET_BOTTOM_SERVICE_SUCCESS,
            payload:data
        })

    }catch{
        dispatch({
            type:GET_BOTTOM_SERVICE_DEFAULT
        })
    }

}