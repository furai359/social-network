import React from "react";
import c from "./Users.module.css";
import {NavLink} from "react-router-dom";

const User = ({user, ...props}) => {
    let defaultAvatar = 'https://image.flaticon.com/icons/png/512/21/21104.png'
    return <div key={user.id} className={c.userWrap}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small ? user.photos.small : defaultAvatar}
                          alt={':('} className={c.avatar}/>
                    </NavLink>
                </div>
                <div className={c.follow}>{user.followed
                    ? <button disabled={props.following.some(id => id === user.id)} onClick={() => props.unfollow(user.id)}>Unfollow</button>
                    : <button disabled={props.following.some(id => id === user.id)} onClick={() => props.follow(user.id)}>Follow</button> }
                </div>
                <h2 className={c.fullName}>{user.name}</h2>
                <h4 className={c.status}>{user.status}</h4>
            </div>
}

export default User