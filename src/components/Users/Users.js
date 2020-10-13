import React from "react";
import Paginator from "../common/Paginator/Paginator";
import c from './Users.module.css'
import User from "./User";

const Users = props => {

    return <div className={c.wrap}>
        { props.users.map(u => <User key={u.id} user={u} following={props.following}
                                     follow={props.follow} unfollow={props.unfollow}
        />) }
        <Paginator currentPage={props.currentPage} changePage={props.changePage}
                       totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
    </div>
}

export default Users;