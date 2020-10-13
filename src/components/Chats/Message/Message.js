import c from "./Message.module.css";
import React from "react";

const Message = props => {
    return (
        <div className={props.incoming ? c.incoming : c.outgoing}>
            <p className={c.message}>{props.message}</p>
        </div>
    );
};

export default Message;