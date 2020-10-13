import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {compose} from "redux";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profile-reducer";
import NewPostForm from "./NewPostForm";

const MyPosts = props => {
    let addPost = data => {
        props.addPost(data.newPostText);
    };
    return <div>
        <h4 className={c.title}>Posts</h4>
        <NewPostForm onSubmit={addPost}/>
        <div className={c.posts_wrap}>{
            props.posts.map(post =>
                <Post id={post.id} message={post.text}/>)}
        </div>
    </div>
};


let mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

export default compose(
    connect(mapStateToProps, {addPost})
)(MyPosts);