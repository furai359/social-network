import React from "react";
import c from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = props => {
    if(!props.profile) return <Preloader/>
    let src = props.profile.photos.large || 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png';
    return (
        <div>
            <div className={c.info}>
                <img className={c.avatar} src={src}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} className={c.status}/>
                <div className={c.fullName}>{props.profile.fullName}</div>
                <div className={c.aboutMe} >{props.profile.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;