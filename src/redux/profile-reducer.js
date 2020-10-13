import {profileAPI} from "../API/API"

const ADD_POST          = 'profile/ADD_POST'
const SET_USER_PROFILE  = 'profile/SET_USER_PROFILE'
const SET_USER_STATUS   = 'profile/SET_USER_STATUS'
const DELETE_POST       = 'profile/DELETE_POST'


let initialState = {
    profile: null,
    posts : [
        { id: 1, text:'first post' , likesCount: 10},
        { id: 2, text:'second post', likesCount: 14},
        { id: 3, text:'third post' , likesCount: 23},
    ],
    status: ''
}

const profileReducer = (state = initialState, action) => {
        switch (action.type) {
        case ADD_POST: {
            let post = {
                id: 5,
                text: action.text,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, post]
            }
        }
       case DELETE_POST: {
           return {
               ...state,
               posts: [state.posts.filter(p => p.id !== action.postId)]
           }
       }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: return state
    }
}

export const addPost = text =>  ({type: ADD_POST, text})
export const deletePost = postId =>  ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_USER_STATUS, status})

//thunks
export const getProfile = id => async dispatch => {
    let data = await profileAPI.getProfile(id)
    dispatch(setUserProfile(data))
}

export const getStatus = id => async dispatch => {
    let data = await profileAPI.getStatus(id)
    if(data) dispatch(setStatus(data))
}

export const updateStatus = status => async dispatch => {
    let data = profileAPI.updateStatus(status)
    if(data.resultCode === 0) dispatch(setStatus(status))
}

export default profileReducer;