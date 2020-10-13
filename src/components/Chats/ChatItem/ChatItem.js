import React from "react";
import c from "./ChatItem.module.css";
import {NavLink} from "react-router-dom";

const ChatItem = props => {
    return (
        <NavLink to={`/chats/${props.id}` }>
            <div className={c.chatItem}>
                <img
                    src={props.avatar}
                    alt={':('}
                />
                <h3>{props.name}</h3>
            </div>
        </NavLink>
    );
};

export default ChatItem;