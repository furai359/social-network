import {setUserData} from "./auth-reducer"

const SET_INITIALIZE = 'app/SET_INITIALIZE'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE: {
            return {
                ...state,
                initialized: action.initialize
            }
        }
        default: return state;
    }
}

export const setInitialize = (initialize) => ({type: SET_INITIALIZE, initialize})

export const initializeApp = () => (dispatch) => {
    dispatch(setUserData())
        .then(() => {
            dispatch(setInitialize(true))
        })
}

export default appReducer