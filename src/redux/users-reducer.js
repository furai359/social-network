import {usersAPI} from "../API/API";
import {updateObjectInArray} from "../utils/objHelpers";

const FOLLOW                = 'users/FOLLOW';
const UNFOLLOW              = 'users/UNFOLLOW';
const SET_USERS             = 'users/SET_USERS';
const SET_CURRENT_PAGE      = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCH          = 'users/TOGGLE_FETCH';
const TOGGLE_FOLLOWING      = 'users/TOGGLE_FOLLOWING';

let initialState = {
    users:[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    following: []
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:{
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', {followed: true})

                /*state.users.map(u => {
                    if (u.id === action.id) return {...u, followed: true}
                    return u;
                })*/
            };
        }
        case UNFOLLOW:{
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', {followed: false})
            };
        }
        case SET_USERS: {
            return {...state, users:[...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_FETCH: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING: {
            return {
                ...state,
                following: action.isFetching
                    ? [...state.following, action.userID]
                    : state.following.filter(id => id !== action.userID)
            }
        }
        default: return state;
    }
}

export const follow             = (id) => ({type:FOLLOW, id:id})
export const unfollow           = (id) => ({type:UNFOLLOW, id:id})
export const setUsers           = (users) => ({type:SET_USERS, users})
export const setCurrentPage     = (page) => ({type:SET_CURRENT_PAGE, page})
export const setTotalUsersCount = (count) => ({type:SET_TOTAL_USERS_COUNT, count})
export const toggleFetch        = (isFetching) => ({type:TOGGLE_FETCH, isFetching})
export const toggleFollowing    = (isFetching, userID) => ({type:TOGGLE_FOLLOWING, isFetching, userID})


//thunks
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetch(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleFetch(false))
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleFollowing(true, id))
    let data = await apiMethod(id)
    if(data.resultCode === 0) dispatch(actionCreator(id))
    dispatch(toggleFollowing(false, id))
}

export const followUser = (id) =>
    async (dispatch) => await followUnfollowFlow(dispatch, id, usersAPI.followUser.bind(usersAPI), follow);

export const unfollowUser = (id) =>
    async (dispatch) => await followUnfollowFlow(dispatch, id, usersAPI.unfollowUser.bind(usersAPI), unfollow)

export default usersReducer