import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import {GetBlogReducer} from './Reducers/BlogReducer'
import {getServiceReducer} from './Reducers/serviceItems'
import {GetLogoReducer} from './Reducers/LogoReducer'
import {GetBottomServReducer} from './Reducers/bottomSerReducer'
import {GetAboutReducer} from './Reducers/AboutReducer'


const reducers = combineReducers({
    getAbout:GetAboutReducer,
    getBlog: GetBlogReducer,
    getLogo:GetLogoReducer,
    getServiceHead:getServiceReducer,
    getSubService:GetBottomServReducer
})
const initialState={

}

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)
export default store

