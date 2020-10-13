import React from "react";
import {sendMessageCreator} from "../../redux/chats-reducer";
import Chats from "./Chats";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = state => {
    return {
        chatsPage:state.chatsPage
    }
}
let mapDispatchToProps = dispatch => {
    return {
        sendMessage:message => { dispatch(sendMessageCreator(message));}
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Chats);
