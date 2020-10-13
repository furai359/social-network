import React from "react";
import c from './Chats.module.css'
import ChatItem from "./ChatItem/ChatItem";
import Message from "./Message/Message";
import ChatInput from "./ChatInput/ChatInput";

const Chats = props => {
    let state = props.chatsPage;
    let sendMessage = data => {
        props.sendMessage(data.message);
    }
    return <div className={c.wrap}>
        <div className={c.chatsList}>{
            state.rooms.map(user =>
                    <ChatItem id={user.id} name={user.name} avatar={user.avatar}/>)}
        </div>
        <div className={c.messages}>{
            state.messages.map(msg =>
                <Message id={msg.id} message={msg.text} incoming={msg.incoming} />)}
        </div>
        <ChatInput onSubmit={sendMessage}/>
    </div>
};
export default Chats;
