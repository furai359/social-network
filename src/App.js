import React, {Suspense} from "react";
import Nav       from "./components/Navigation/Nav.js";
import {Route}   from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import HeaderContainer  from "./components/Header/HeaderContainer";
import {withRouter}     from "react-router-dom";
import {initializeApp}  from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const ChatsContainer   = React.lazy(() => import('./components/Chats/ChatsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer   = React.lazy(() => import('./components/Users/UsersContainer'))
const News             = React.lazy(() => import('./components/News/News'))
const Music            = React.lazy(() => import('./components/Music/Music'))
const Settings         = React.lazy(() => import('./components/Settings/Settings'))
const Login            = React.lazy(() => import('./components/Login/Login'))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) return <Preloader/>

        return (
            <section className={'app-wrap'}>
                <HeaderContainer/>
                <Nav/>
                <Suspense fallback={<Preloader/>} >
                    <div className={'app-wrap__content'}>
                        <Route path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/chats'} render={() => <ChatsContainer/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                    </div>
                </Suspense>
        </section>)
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
    )(App);
