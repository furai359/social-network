import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleFollowing,
    requestUsers,
    followUser, unfollowUser
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowing,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";

class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    changePage = p => {
        this.props.requestUsers(p, this.props.pageSize);
    }

    render(){
        return <>
            {this.props.isFetching ? <Preloader /> :
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} changePage={this.changePage}
                   users={this.props.users}
                   follow={this.props.followUser} unfollow={this.props.unfollowUser}
                   following = {this.props.following} toggleFollowing = {this.props.toggleFollowing}
        />}
        </>

    }
}

let mapStateToProps = state => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        following: getFollowing(state)
    }
}

export default compose(
    connect(mapStateToProps, {followUser, unfollowUser, setCurrentPage, toggleFollowing, requestUsers}),
    withAuthRedirect
)(UsersAPIComponent);