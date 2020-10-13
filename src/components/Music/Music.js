import React from "react";
import c from './Music.module.css'
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Music = () => {
    return <div>
        <h1>Music</h1>
    </div>
};
export default compose(withAuthRedirect)(Music);