import React from "react";
import c from './News.module.css'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const News = () => {
    return <div>
        <h1>News</h1>
    </div>
};
export default compose(withAuthRedirect)(News);