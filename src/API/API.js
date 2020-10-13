import * as axios from "axios";
const APIkey   = '12ccf1f9-e4aa-4622-b385-a71c6b446160';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": APIkey
    }
});

export const usersAPI = {
    getUsers(page = 1, size = 30) {
        return instance.get(`users?page=${page}&count=${size}`).then(r => r.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(r => r.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(r => r.data)
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`).then(r => r.data)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe}).then(r => r.data)
    },
    logout(){
        return instance.delete(`auth/login`).then(r => r.data)
    }
}

export const profileAPI = {
    getProfile(id){
        return instance.get(`profile/${id}`).then(r => r.data)
    },
    getStatus(id){
        return instance.get(`profile/status/${id}`).then(r => r.data)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {
            status: status
        }).then(r => r.data)
    }
}