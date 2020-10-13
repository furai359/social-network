import React from "react";
import s from "./FormsControls.module.css";
import {Field} from "redux-form";


export const FormControl = ({input, meta, child, Element, ...props}) => {
    const hasError = meta.error && meta.touched;
    return <div className={`${s.inputWrap} ${hasError ? s.error : ''}`}>
        <Element {...input} {...props}/>
        <span className={s.errorMessage}>{hasError ? meta.error : ''}</span>
    </div>
}

export const TextArea = (props) => {
    return <FormControl {...props} Element={'textarea'}/>
}

export const Input = (props) => {
    return <FormControl {...props} Element={'input'}/>
}

export const createField = (placeholder, name, validators, component, props) => (
    <div className={s.formWrap}>
        <Field placeholder={placeholder} name={name} {...props}
               validate={validators} component={component}/>
        {props && props.type && props.type === 'checkbox' ? <span>{placeholder}</span> : ''}
    </div>
)
