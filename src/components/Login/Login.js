import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import c from "./Login.module.css";

const Login = ({login, isAuth}) => {
    let onSubmit = (data) => {
        login(data.email, data.password, data.rememberMe)
    }

    if(isAuth) return <Redirect to={'/profile'}/>

    return <div className={c.wrap}>
        <div className={c.block}>
            <h1 className={c.title}>Login</h1>
            <LoginForm onSubmit={onSubmit} c={c}/>
        </div>
    </div>
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);