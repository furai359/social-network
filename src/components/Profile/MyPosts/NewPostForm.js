import c from "./MyPosts.module.css";
import {Field} from "redux-form";
import React from "react";
import {reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {createField, TextArea} from "../../common/FormsControls/FormsControls";

const max = maxLength(10);

const NewPostForm = props => {
    return(
    <form className={c.newPost} onSubmit={props.handleSubmit}>
        {createField('New post...', 'newPostText', [required, max], TextArea)}
        {/*<Field component={TextArea} placeholder={'New post...'} name={'newPostText'}
                validate={[required, max]}
        />*/}
        <button>New post</button>
    </form>)
}

export default reduxForm({form:'Profile__newPostForm'})(NewPostForm);