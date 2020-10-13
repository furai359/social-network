import React from "react";
import  c from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = props => {
    let imgUrl = 'https://machineryscanner.com/assets/homepage/top_brands/mercedes_logo.png'
    return <header className={c.header}>
        <div className={c.titleBlock}>
            <img alt={':('} src={imgUrl}/>
            <h1>Nazvanie</h1>
        </div>
        <div className={c.filler}> </div>
        {props.isAuth
            ? <div className={c.loginBlock} onClick={props.logout}><h3>{props.login}</h3></div>
            : <NavLink to={'/login'} className={c.loginBlock} title={'logout'}><h3>Login</h3></NavLink>}
           </header>
};

export default Header;