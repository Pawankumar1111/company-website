import {GET_SERVICE_REQUEST,GET_SERVICE_SUCCESS,GET_SERVICE_FAIL} from '../Reducers/Constant'

import axios from 'axios'
export const ServiceAction = () => async(dispatch) =>{
    try{
        dispatch({
            type:GET_SERVICE_REQUEST,
            loading:true
        })
        const {data} = await axios.get(`http://www.website.draggital.in/api/get-service-header`)
        console.log(data);
        dispatch({
            type:GET_SERVICE_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch(
            {type:GET_SERVICE_FAIL,
            payload:error
            }
        )
    }
}