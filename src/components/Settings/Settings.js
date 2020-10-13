import React from "react";
import c from './Settings.module.css'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const Settings = () => {
    return <div>
        <h1>Settings</h1>
    </div>
};
export default compose(withAuthRedirect)(Settings);