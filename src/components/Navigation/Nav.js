import React from "react";
import c from './Nav.module.css'
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={c.nav}>
            <NavLink to={'/profile/'} className={c.item} activeClassName={c.active}> <div>  Profile    </div> </NavLink>
            <NavLink to={'/chats'}    className={c.item} activeClassName={c.active}> <div>  Chats      </div> </NavLink>
            <NavLink to={'/news'}     className={c.item} activeClassName={c.active}> <div>  News       </div> </NavLink>
            <NavLink to={'/music'}    className={c.item} activeClassName={c.active}> <div>  Music      </div> </NavLink>
            <NavLink to={'/users'}    className={c.item} activeClassName={c.active}> <div>  People</div> </NavLink>
            <NavLink to={'/settings'} className={c.item} activeClassName={c.active}> <div>  Settings   </div> </NavLink>
        </nav>)
};

export default Nav;