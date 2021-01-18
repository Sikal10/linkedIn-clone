import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import {useSelector, useDispatch} from "react-redux";
import {selectUser} from "./features/userSlice";
import Login from "./components/Login/Login";
import {auth} from "./firebase";
import {logout, login} from "./features/userSlice";
import Widgets from "./components/Widgets/Widgets";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "./components/Register/Register";


function App() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                //user is logged in
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL
                }))
            } else {
                //user is logged out
                dispatch(logout());
            }
        })
    }, [dispatch])
    return (
        <Router>
            <div className="app">
                <Header/>

                {!user ? <Switch>
                    <Route exact component={Login} path={"/"} />
                    <Route  component={Register} path={"/register"} />
                </Switch> : <div className={"app__body"}>
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>}
                {/*{!user ? <Login/>  : <div className="app__body">*/}
                {/*    <Sidebar/>*/}
                {/*    <Feed/>*/}
                {/*    <Widgets/>*/}
                {/*</div>*/}
                {/*}*/}
            </div>
        </Router>
    );
}

export default App;
