import {authAPI} from "../API/API"
import {stopSubmit} from "redux-form"

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
    userID: null,
    email:  null,
    login:  null,
    isAuth: false,
    isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default: return state
    }
}
export const setUserDataAC = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data:{userId, email, login, isAuth}})

export const setUserData = () => async (dispatch) => {
    let data = await authAPI.me()

    if(data.resultCode === 0){
        let {id, email, login} = data.data;
        dispatch(setUserDataAC(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if(data.resultCode === 0) dispatch(setUserData())
    else dispatch(stopSubmit('login', {
        _error: data.messages.length > 0 ? data.messages[0] :'Unknown error'
    }))
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if(data.resultCode === 0) dispatch(setUserDataAC(null, null, null, false))
}

export default authReducer