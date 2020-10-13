import c from "../Chats.module.css";
import React from "react";
import {Field} from "redux-form";
import {reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const max = maxLength(30)

const ChatInput = props => {
    return <form onSubmit={props.handleSubmit}>
        <div className={c.sendWrap}>
            <Field  component={TextArea} name={'message'}
                    placeholder={'type message...'}
                    validate={[required, max]}
            />
            <button className={c.send}>SEND</button>
            </div>
    </form>
}

export default reduxForm({form:'Chat_sendMessageForm'})(ChatInput)