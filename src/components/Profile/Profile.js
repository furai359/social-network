import React from "react";
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import Preloader from "../common/Preloader/Preloader";

const Profile = props => {
    if(!props.profile) return <Preloader/>
    return <div>
             <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
             <MyPosts store={props.store} onSubmit={props.handleSubmit}/>
            </div>
};

export default Profile;