import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


const LoginForm = ({handleSubmit, error, c}) => {
    return <form onSubmit={handleSubmit}>
        {createField('Email', 'email', [required], Input)}
        {createField('Password', 'password', [required], Input, {type: 'password'})}
        {createField('Remember me', 'rememberMe', [], Input, {type: 'checkbox'})}
        {error ? <div>{error}</div> : ''}
        <div><button className={c.submit}>Login</button></div>
    </form>
}
export default reduxForm({form:'login'})(LoginForm);