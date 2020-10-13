import React from "react";
import {connect} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";


let MSTP_Redirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectWrap extends React.Component {
        render() {
            if (this.props.isAuth === false)  {
                return <Redirect to={'/login'}/>
            }
            return <Component {...this.props}/>
        }
    }

    return connect(MSTP_Redirect)(RedirectWrap);
}