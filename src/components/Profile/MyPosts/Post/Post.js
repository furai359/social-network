import React from "react";
import c from './Post.module.css'

const Post = props => {
    return <div className={c.wrap}>
        <img
            src={'https://i.pinimg.com/originals/cd/51/cc/cd51cce8cb73fa51c0d9e84a240180c8.png'}
            className={c.avatar}
            alt={'kartinka ne gruzitsia blyat'}
        />
        <p>{props.message}</p>
    </div>;
};

export default Post;